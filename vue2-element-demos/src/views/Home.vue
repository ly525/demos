<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="welcome-card">
          <h2>欢迎使用 Vue 2 + Element-UI 示例项目</h2>
          <p>这是一个基于 Vue 2 和 Element-UI 构建的完整示例项目</p>
          
          <el-divider />
          
          <h3>技术栈</h3>
          <el-tag type="primary" class="tag">Vue 2.6</el-tag>
          <el-tag type="success" class="tag">Element-UI</el-tag>
          <el-tag type="info" class="tag">Vue Router</el-tag>
          <el-tag type="warning" class="tag">Vuex</el-tag>
          
          <el-divider />
          
          <h3>Vuex 状态示例</h3>
          <p>当前计数：{{ count }}</p>
          <el-button @click="increment" type="primary">增加</el-button>
          <el-button @click="decrement" type="danger">减少</el-button>
          
          <el-divider />
          
          <h3>用户信息</h3>
          <p>用户名：{{ userName }}</p>
          <p>角色：{{ userRole }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['userName', 'userRole', 'getCount']),
    count () {
      return this.getCount
    }
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.welcome-card {
  text-align: center;
}

.tag {
  margin: 0 5px 5px 0;
}

h2 {
  color: #409EFF;
  margin-bottom: 10px;
}

h3 {
  color: #606266;
  margin: 20px 0 10px 0;
}

p {
  color: #909399;
  line-height: 1.6;
}
</style>
