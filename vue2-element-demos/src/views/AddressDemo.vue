<template>
  <div class="address-demo">
    <h2>四级地址联动选择器演示</h2>
    
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <div slot="header">
            <h3>功能特性</h3>
          </div>
          <ul class="feature-list">
            <li>✅ 支持省市区街道四级地址选择</li>
            <li>✅ 街道数据懒加载（点击区县时才加载）</li>
            <li>✅ 支持多选模式</li>
            <li>✅ 支持地址回填</li>
            <li>✅ 支持搜索过滤</li>
            <li>✅ 完整的事件回调</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" style="margin-top: 20px;">
      <!-- 基础演示 -->
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <h3>基础使用</h3>
          </div>
          
          <el-form label-width="100px">
            <el-form-item label="选择地址:">
              <address-cascader
                ref="basicCascader"
                v-model="basicSelected"
                :multiple="true"
                :collapse-tags="true"
                @change="handleBasicChange"
                @address-change="handleAddressChange"
              />
            </el-form-item>
          </el-form>
          
          <div class="result-display">
            <h4>选中的地址编码:</h4>
            <pre>{{ JSON.stringify(basicSelected, null, 2) }}</pre>
            
            <h4>地址详细信息:</h4>
            <div v-if="addressInfo.length > 0">
              <div v-for="(addr, index) in addressInfo" :key="index" class="address-item">
                <p><strong>地址 {{ index + 1 }}:</strong> {{ addr.fullAddress }}</p>
                <p class="address-detail">
                  省: {{ addr.province }} | 
                  市: {{ addr.city }} | 
                  区: {{ addr.district }} | 
                  街道: {{ addr.street }}
                </p>
              </div>
            </div>
            <p v-else class="no-selection">暂无选择</p>
          </div>
        </el-card>
      </el-col>
      
      <!-- 回填演示 -->
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <h3>回填功能演示</h3>
          </div>
          
          <el-alert
            title="回填演示说明"
            type="info"
            :closable="false"
            style="margin-bottom: 15px;"
          >
            <div slot="description">
              • 下方选择器已预设初始数据展示回填效果<br/>
              • 页面加载时会自动演示街道级别的懒加载回填<br/>
              • 可点击下方按钮测试不同场景的回填功能
            </div>
          </el-alert>
          
          <el-form label-width="100px">
            <el-form-item label="回填地址:">
              <address-cascader
                ref="backfillCascader"
                v-model="backfillSelected"
                :multiple="true"
                :collapse-tags="true"
                @change="handleBackfillChange"
              />
            </el-form-item>
          </el-form>
          
          <div class="backfill-buttons">
            <h4>快速回填测试:</h4>
            <el-button 
              size="small" 
              type="primary" 
              @click="backfillExample1"
            >
              回填示例1 (北京多个地址)
            </el-button>
            <el-button 
              size="small" 
              type="success" 
              @click="backfillExample2"
            >
              回填示例2 (跨省市地址)
            </el-button>
            <el-button 
              size="small" 
              type="warning" 
              @click="backfillExample3"
            >
              回填示例3 (包含街道)
            </el-button>
            <el-button 
              size="small" 
              type="info" 
              @click="clearBackfill"
            >
              清空
            </el-button>
          </div>
          
          <div class="result-display">
            <h4>回填结果:</h4>
            <pre>{{ JSON.stringify(backfillSelected, null, 2) }}</pre>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" style="margin-top: 20px;">
      <!-- 单选模式演示 -->
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <h3>单选模式</h3>
          </div>
          
          <el-form label-width="100px">
            <el-form-item label="单选地址:">
              <address-cascader
                ref="singleCascader"
                v-model="singleSelected"
                :multiple="false"
                @change="handleSingleChange"
              />
            </el-form-item>
          </el-form>
          
          <div class="result-display">
            <h4>选中结果:</h4>
            <pre>{{ JSON.stringify(singleSelected, null, 2) }}</pre>
          </div>
        </el-card>
      </el-col>
      
      <!-- API 使用说明 -->
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <h3>API 说明</h3>
          </div>
          
          <div class="api-doc">
            <h4>Props:</h4>
            <ul>
              <li><code>value / v-model</code>: 选中的值数组</li>
              <li><code>multiple</code>: 是否多选，默认 true</li>
              <li><code>collapse-tags</code>: 多选时是否折叠tag，默认 true</li>
              <li><code>filterable</code>: 是否可搜索，默认 true</li>
              <li><code>placeholder</code>: 占位符文本</li>
              <li><code>size</code>: 组件尺寸</li>
            </ul>
            
            <h4>Events:</h4>
            <ul>
              <li><code>@change</code>: 选择改变时触发</li>
              <li><code>@address-change</code>: 地址信息改变时触发</li>
              <li><code>@expand-change</code>: 展开状态改变时触发</li>
            </ul>
            
            <h4>Methods:</h4>
            <ul>
              <li><code>setSelectedValues(values)</code>: 设置选中值</li>
              <li><code>clearSelection()</code>: 清空选择</li>
              <li><code>getSelectedAddresses()</code>: 获取地址信息</li>
              <li><code>backfillByAddressCodes(codes)</code>: 按编码回填</li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AddressCascader from '@/components/AddressCascader.vue'

export default {
  name: 'AddressDemo',
  components: {
    AddressCascader
  },
  data() {
    return {
      // 基础演示
      basicSelected: [],
      addressInfo: [],
      
      // 回填演示 - 初始就有回填数据
      backfillSelected: [
        ['110000', '110100', '110101'], // 北京市-北京市-东城区
        ['310000', '310100', '310104'], // 上海市-上海市-徐汇区
        ['440000', '440100', '440106']  // 广东省-广州市-天河区
      ],
      
      // 单选演示
      singleSelected: ['320000', '320100', '320102'] // 江苏省-南京市-玄武区
    }
  },
  methods: {
    // 基础选择改变
    handleBasicChange(value) {
      console.log('基础选择改变:', value)
    },
    
    // 地址信息改变
    handleAddressChange(addressInfo) {
      console.log('地址信息改变:', addressInfo)
      this.addressInfo = addressInfo
    },
    
    // 回填选择改变
    handleBackfillChange(value) {
      console.log('回填选择改变:', value)
    },
    
    // 单选改变
    handleSingleChange(value) {
      console.log('单选改变:', value)
    },
    
    // 回填示例1：北京多个地址
    async backfillExample1() {
      const addressCodes = [
        ['110000', '110100', '110101'], // 北京市-北京市-东城区
        ['110000', '110100', '110102'], // 北京市-北京市-西城区
        ['110000', '110100', '110105']  // 北京市-北京市-朝阳区
      ]
      
      this.$message.info('正在回填北京多个地址...')
      await this.$refs.backfillCascader.backfillByAddressCodes(addressCodes)
      this.$message.success('回填完成！')
    },
    
    // 回填示例2：跨省市地址
    async backfillExample2() {
      const addressCodes = [
        ['110000', '110100', '110101'], // 北京市-北京市-东城区
        ['310000', '310100', '310101'], // 上海市-上海市-黄浦区
        ['440000', '440100', '440106']  // 广东省-广州市-天河区
      ]
      
      this.$message.info('正在回填跨省市地址...')
      await this.$refs.backfillCascader.backfillByAddressCodes(addressCodes)
      this.$message.success('回填完成！')
    },
    
    // 回填示例3：包含街道的完整地址
    async backfillExample3() {
      const addressCodes = [
        ['110000', '110100', '110101', '110101001'], // 北京市-北京市-东城区-东华门街道
        ['110000', '110100', '110105', '110105001'], // 北京市-北京市-朝阳区-建外街道
        ['440000', '440100', '440106', '440106006']  // 广东省-广州市-天河区-天河南街道
      ]
      
      this.$message.info('正在回填包含街道的地址...')
      try {
        await this.$refs.backfillCascader.backfillByAddressCodes(addressCodes)
        this.$message.success('回填完成！街道数据已懒加载')
      } catch (error) {
        this.$message.warning('部分街道数据加载失败，已回填到区县级别')
      }
    },
    
    // 清空回填
    clearBackfill() {
      this.$refs.backfillCascader.clearSelection()
      this.$message.info('已清空选择')
    }
  },
  
  async mounted() {
    // 页面加载时自动演示回填效果
    await this.$nextTick()
    
    // 延迟一下让组件完全初始化
    setTimeout(async () => {
      // 为回填组件设置包含街道的完整地址，展示懒加载回填效果
      if (this.$refs.backfillCascader) {
        const fullAddressCodes = [
          ['110000', '110100', '110101', '110101001'], // 北京市-北京市-东城区-东华门街道
          ['110000', '110100', '110105', '110105003'], // 北京市-北京市-朝阳区-呼家楼街道
        ]
        
        this.$message.info('正在演示回填功能（包含街道懒加载）...')
        try {
          await this.$refs.backfillCascader.backfillByAddressCodes(fullAddressCodes)
          this.$message.success('回填演示完成！街道数据已自动懒加载')
        } catch (error) {
          console.warn('自动回填失败:', error)
        }
      }
    }, 1000)
  }
}
</script>

<style scoped>
.address-demo {
  max-width: 1400px;
  margin: 0 auto;
}

h2 {
  color: #409EFF;
  margin-bottom: 20px;
}

h3 {
  color: #606266;
  margin: 0;
}

h4 {
  color: #909399;
  margin: 15px 0 10px 0;
  font-size: 14px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  padding: 5px 0;
  color: #606266;
}

.result-display {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
  font-size: 12px;
}

.result-display pre {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
}

.address-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
}

.address-item p {
  margin: 5px 0;
}

.address-detail {
  font-size: 12px;
  color: #909399;
}

.no-selection {
  color: #c0c4cc;
  font-style: italic;
  text-align: center;
  margin: 20px 0;
}

.backfill-buttons {
  margin: 15px 0;
}

.backfill-buttons .el-button {
  margin: 5px;
}

.api-doc {
  font-size: 12px;
  line-height: 1.6;
}

.api-doc ul {
  margin: 10px 0;
  padding-left: 20px;
}

.api-doc li {
  margin: 5px 0;
}

.api-doc code {
  background-color: #f5f7fa;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: #e6a23c;
}
</style>
