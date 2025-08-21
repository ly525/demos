# Vue 2 + Element-UI 示例项目

这是一个基于 Vue 2 和 Element-UI 构建的完整示例项目，展示了常用的组件和功能。

## 技术栈

- Vue 2.6
- Element-UI 2.15
- Vue Router 3.5
- Vuex 3.6
- Axios 1.4

## 项目结构

```
vue2-element-demos/
├── public/
│   └── index.html
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 公共组件
│   ├── views/          # 页面组件
│   │   ├── Home.vue
│   │   ├── Components.vue
│   │   ├── FormDemo.vue
│   │   └── TableDemo.vue
│   ├── router/         # 路由配置
│   ├── store/          # Vuex 状态管理
│   ├── utils/          # 工具函数
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── package.json
└── README.md
```

## 安装和运行

### 安装依赖
```bash
npm install
```

### 开发环境运行
```bash
npm run serve
```

### 生产环境构建
```bash
npm run build
```

### 代码检查
```bash
npm run lint
```

## 功能特性

### 1. 首页 (Home)
- Vuex 状态管理示例
- 计数器功能
- 用户信息展示

### 2. 组件示例 (Components)
- Element-UI 基础组件展示
- 按钮、输入框、开关等
- 消息提示功能

### 3. 表单示例 (FormDemo)
- 完整的表单验证
- 多种表单控件
- 表单提交和重置

### 4. 表格示例 (TableDemo)
- 数据表格展示
- 搜索功能
- 增删改操作
- 分页功能

## 开发说明

项目已配置好开发环境，包括：
- ESLint 代码检查
- Vue Router 路由管理
- Vuex 状态管理
- Element-UI 组件库

可以直接在此基础上进行开发扩展。
