<template>
  <div class="table-demo">
    <h2>表格示例</h2>
    
    <el-card>
      <!-- 操作区域 -->
      <div class="toolbar">
        <el-button type="primary" @click="addUser">新增用户</el-button>
        <el-input
          v-model="searchText"
          placeholder="搜索用户名"
          style="width: 200px; margin-left: 10px;"
          clearable
        ></el-input>
      </div>
      
      <!-- 表格 -->
      <el-table
        :data="filteredTableData"
        style="width: 100%; margin-top: 20px;"
        stripe
        border
      >
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="80"></el-table-column>
        <el-table-column prop="city" label="城市" width="100"></el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === 'active' ? 'success' : 'danger'"
              size="small"
            >
              {{ scope.row.status === 'active' ? '活跃' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="editUser(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteUser(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        style="margin-top: 20px; text-align: right;"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TableDemo',
  data () {
    return {
      searchText: '',
      currentPage: 1,
      pageSize: 10,
      tableData: [
        {
          id: 1,
          name: '张三',
          email: 'zhangsan@example.com',
          age: 25,
          city: '北京',
          status: 'active'
        },
        {
          id: 2,
          name: '李四',
          email: 'lisi@example.com',
          age: 30,
          city: '上海',
          status: 'active'
        },
        {
          id: 3,
          name: '王五',
          email: 'wangwu@example.com',
          age: 28,
          city: '广州',
          status: 'inactive'
        },
        {
          id: 4,
          name: '赵六',
          email: 'zhaoliu@example.com',
          age: 35,
          city: '深圳',
          status: 'active'
        },
        {
          id: 5,
          name: '钱七',
          email: 'qianqi@example.com',
          age: 27,
          city: '杭州',
          status: 'inactive'
        }
      ]
    }
  },
  computed: {
    filteredTableData () {
      if (!this.searchText) {
        return this.tableData
      }
      return this.tableData.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  },
  methods: {
    addUser () {
      this.$message.info('新增用户功能')
    },
    editUser (row) {
      this.$message.info(`编辑用户: ${row.name}`)
    },
    deleteUser (id) {
      this.$confirm('确认删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData = this.tableData.filter(item => item.id !== id)
        this.$message.success('删除成功!')
      }).catch(() => {
        this.$message.info('已取消删除')
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
.table-demo {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #409EFF;
  margin-bottom: 20px;
}

.toolbar {
  display: flex;
  align-items: center;
}
</style>
