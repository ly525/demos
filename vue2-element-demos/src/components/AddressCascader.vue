<template>
  <div class="address-cascader">
    <el-cascader
      ref="cascader"
      v-model="selectedValues"
      :options="options"
      :props="cascaderProps"
      :show-all-levels="true"
      :multiple="multiple"
      :collapse-tags="collapseTags"
      :clearable="true"
      :filterable="filterable"
      :placeholder="placeholder"
      :size="size"
      @change="handleChange"
      @expand-change="handleExpandChange"
      style="width: 100%"
    />
  </div>
</template>

<script>
import { provincesData, loadStreets } from '@/utils/addressData'

export default {
  name: 'AddressCascader',
  props: {
    // 选中的值
    value: {
      type: Array,
      default: () => []
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: true
    },
    // 多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default: true
    },
    // 是否可搜索选项
    filterable: {
      type: Boolean,
      default: true
    },
    // 输入框占位文本
    placeholder: {
      type: String,
      default: '请选择地址'
    },
    // 尺寸
    size: {
      type: String,
      default: 'medium'
    }
  },
  data() {
    return {
      options: [], // cascader 选项数据
      selectedValues: [], // 当前选中的值
      loadingStreets: new Set(), // 正在加载街道数据的区县
      streetsCache: new Map(), // 街道数据缓存，key: districtCode, value: streets array
      cascaderProps: {
        value: 'value',
        label: 'label',
        children: 'children',
        multiple: this.multiple,
        checkStrictly: false, // 严格模式，选择任意一级选项
        emitPath: true, // 返回完整路径
        lazy: true, // 开启懒加载
        lazyLoad: this.lazyLoad // 懒加载方法
      }
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.selectedValues = newVal || []
      },
      immediate: true,
      deep: true
    },
    selectedValues: {
      handler(newVal) {
        this.$emit('input', newVal)
      },
      deep: true
    }
  },
  created() {
    this.initOptions()
  },
  methods: {
    // 初始化选项数据
    initOptions() {
      this.options = JSON.parse(JSON.stringify(provincesData))
    },
    
    // 懒加载方法 - 加载街道数据
    lazyLoad(node, resolve) {
      const { level, value } = node
      
      // 第4级才需要懒加载街道数据
      if (level === 3) {
        this.loadStreetsData(value, resolve)
      } else {
        // 其他层级直接resolve空数组
        resolve([])
      }
    },
    
    // 加载街道数据
    async loadStreetsData(districtCode, resolve) {
      if (this.loadingStreets.has(districtCode)) {
        return
      }
      
      // 检查缓存
      if (this.streetsCache.has(districtCode)) {
        const cachedStreets = this.streetsCache.get(districtCode)
        resolve(cachedStreets)
        return
      }
      
      this.loadingStreets.add(districtCode)
      
      try {
        const streets = await loadStreets(districtCode)
        // 缓存街道数据
        this.streetsCache.set(districtCode, streets)
        resolve(streets)
      } catch (error) {
        console.error('加载街道数据失败:', error)
        this.$message.error('加载街道数据失败')
        resolve([])
      } finally {
        this.loadingStreets.delete(districtCode)
      }
    },
    
    // 选择改变事件
    handleChange(value) {
      this.$emit('change', value)
      
      // 发出详细的地址信息
      const addressInfo = this.getAddressInfo(value)
      this.$emit('address-change', addressInfo)
    },
    
    // 展开/收起事件
    handleExpandChange(value) {
      this.$emit('expand-change', value)
    },
    
    // 获取地址详细信息
    getAddressInfo(selectedPaths) {
      if (!selectedPaths || selectedPaths.length === 0) {
        return []
      }
      
      const addressInfo = []
      
      selectedPaths.forEach(path => {
        const info = this.getPathInfo(path)
        if (info) {
          addressInfo.push(info)
        }
      })
      
      return addressInfo
    },
    
    // 根据路径获取地址信息
    getPathInfo(path) {
      if (!path || path.length === 0) return null
      
      const labels = []
      let currentOptions = this.options
      
      for (let i = 0; i < path.length; i++) {
        const value = path[i]
        const option = currentOptions.find(item => item.value === value)
        
        if (option) {
          labels.push(option.label)
          currentOptions = option.children || []
        } else {
          // 如果是街道数据，从缓存中获取名称
          if (i === 3 && path.length === 4) {
            const streetCode = path[3]
            const districtCode = path[2]
            const streetName = this.getStreetNameFromCache(districtCode, streetCode)
            labels.push(streetName || `街道(${streetCode})`)
          }
          break
        }
      }
      
      return {
        codes: path,
        labels: labels,
        fullAddress: labels.join(' / '),
        province: labels[0] || '',
        city: labels[1] || '',
        district: labels[2] || '',
        street: labels[3] || ''
      }
    },
    
    // 设置选中值（支持回填）
    setSelectedValues(values) {
      this.selectedValues = values || []
    },
    
    // 清空选择
    clearSelection() {
      this.selectedValues = []
    },
    
    // 获取当前选中的地址信息
    getSelectedAddresses() {
      return this.getAddressInfo(this.selectedValues)
    },
    
    // 根据地址编码回填（异步处理街道数据）
    async backfillByAddressCodes(addressCodes) {
      if (!addressCodes || addressCodes.length === 0) {
        this.clearSelection()
        return
      }
      
      const validatedCodes = []
      
      // 验证并预加载街道数据
      for (const codes of addressCodes) {
        if (codes.length === 4) {
          // 四级地址，需要预加载街道数据
          const districtCode = codes[2]
          try {
            await this.preloadStreetsForBackfill(districtCode)
            validatedCodes.push(codes)
          } catch (error) {
            console.warn('预加载街道数据失败:', error)
            // 如果街道数据加载失败，只保留到区县级别
            validatedCodes.push(codes.slice(0, 3))
          }
        } else {
          validatedCodes.push(codes)
        }
      }
      
      this.setSelectedValues(validatedCodes)
    },
    
    // 为回填预加载街道数据
    async preloadStreetsForBackfill(districtCode) {
      return new Promise((resolve, reject) => {
        // 找到对应的区县节点
        const node = this.findNodeByCode(districtCode)
        if (!node) {
          reject(new Error('未找到对应的区县节点'))
          return
        }
        
        // 如果已经有街道数据，直接返回
        if (node.children && node.children.length > 0) {
          resolve()
          return
        }
        
        // 懒加载街道数据
        this.lazyLoad({ level: 3, value: districtCode }, (streets) => {
          if (node) {
            this.$set(node, 'children', streets)
          }
          resolve()
        })
      })
    },
    
    // 根据编码查找节点
    findNodeByCode(code) {
      const findInOptions = (options, targetCode) => {
        for (const option of options) {
          if (option.value === targetCode) {
            return option
          }
          if (option.children) {
            const found = findInOptions(option.children, targetCode)
            if (found) return found
          }
        }
        return null
      }
      
      return findInOptions(this.options, code)
    },
    
    // 从缓存中获取街道名称
    getStreetNameFromCache(districtCode, streetCode) {
      if (!this.streetsCache.has(districtCode)) {
        return null
      }
      
      const streets = this.streetsCache.get(districtCode)
      const street = streets.find(s => s.value === streetCode)
      return street ? street.label : null
    }
  }
}
</script>

<style scoped>
.address-cascader {
  width: 100%;
}

/* 自定义级联选择器样式 */
.address-cascader :deep(.el-cascader) {
  width: 100%;
}

.address-cascader :deep(.el-cascader__tags) {
  max-height: 100px;
  overflow-y: auto;
}
</style>
