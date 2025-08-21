<template>
  <div class="form-demo">
    <h2>表单示例</h2>
    
    <el-card>
      <el-form
        ref="userForm"
        :model="userForm"
        :rules="formRules"
        label-width="100px"
        style="max-width: 600px;"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        
        <el-form-item label="年龄" prop="age">
          <el-input-number v-model="userForm.age" :min="1" :max="100"></el-input-number>
        </el-form-item>
        
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="userForm.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>
        
        <el-form-item label="兴趣爱好" prop="hobbies">
          <el-checkbox-group v-model="userForm.hobbies">
            <el-checkbox label="reading">阅读</el-checkbox>
            <el-checkbox label="sports">运动</el-checkbox>
            <el-checkbox label="music">音乐</el-checkbox>
            <el-checkbox label="travel">旅行</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        
        <el-form-item label="城市" prop="city">
          <el-select v-model="userForm.city" placeholder="请选择城市">
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
            <el-option label="深圳" value="shenzhen"></el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="个人简介">
          <el-input
            v-model="userForm.description"
            type="textarea"
            :rows="3"
            placeholder="请输入个人简介"
          ></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'FormDemo',
  data () {
    return {
      userForm: {
        username: '',
        email: '',
        age: null,
        gender: '',
        hobbies: [],
        city: '',
        description: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          console.log('表单数据:', this.userForm)
          this.$message.success('提交成功！')
        } else {
          this.$message.error('请检查表单填写')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.userForm.resetFields()
    }
  }
}
</script>

<style scoped>
.form-demo {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #409EFF;
  margin-bottom: 20px;
}
</style>
