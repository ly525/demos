<template>
  <div id="app">
    <el-container>
      <el-header>
        <nav class="nav-header">
          <h1>Vue 2 + Element-UI 示例</h1>
          <el-menu
            mode="horizontal"
            background-color="#409EFF"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :default-active="$route.path"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/components">组件示例</el-menu-item>
            <el-menu-item index="/form">表单示例</el-menu-item>
            <el-menu-item index="/table">表格示例</el-menu-item>
          </el-menu>
        </nav>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #409EFF;
  padding: 0 20px;
}

.nav-header h1 {
  color: white;
  margin: 0;
  font-size: 20px;
}

.el-header {
  padding: 0;
}

.el-main {
  padding: 20px;
}
</style>
