<template>
  <div class="components-demo">
    <h2>Element-UI 组件示例</h2>
    
    <el-row :gutter="20">
      <!-- 按钮示例 -->
      <el-col :span="12">
        <el-card>
          <h3>按钮组件</h3>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-card>
      </el-col>
      
      <!-- 消息提示示例 -->
      <el-col :span="12">
        <el-card>
          <h3>消息提示</h3>
          <el-button @click="showSuccess">成功消息</el-button>
          <el-button @click="showWarning">警告消息</el-button>
          <el-button @click="showError">错误消息</el-button>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" style="margin-top: 20px;">
      <!-- 输入框示例 -->
      <el-col :span="12">
        <el-card>
          <h3>输入框</h3>
          <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
          <p style="margin-top: 10px;">输入的内容：{{ inputValue }}</p>
        </el-card>
      </el-col>
      
      <!-- 开关示例 -->
      <el-col :span="12">
        <el-card>
          <h3>开关</h3>
          <el-switch v-model="switchValue"></el-switch>
          <p style="margin-top: 10px;">开关状态：{{ switchValue ? '开' : '关' }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data () {
    return {
      inputValue: '',
      switchValue: false
    }
  },
  methods: {
    showSuccess () {
      this.$message.success('这是一条成功消息')
    },
    showWarning () {
      this.$message.warning('这是一条警告消息')
    },
    showError () {
      this.$message.error('这是一条错误消息')
    }
  }
}
</script>

<style scoped>
.components-demo {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  color: #409EFF;
  margin-bottom: 20px;
}

h3 {
  color: #606266;
  margin-bottom: 15px;
}

.el-button {
  margin: 0 5px 5px 0;
}
</style>
