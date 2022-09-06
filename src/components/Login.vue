<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="@/assets/logo.png" alt="">
      </div>
      <el-form ref="form" :model="form" :rules="loginFormRules" label-width="0px" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="form.username" prefix-icon="iconfont icon-custom-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="iconfont icon-password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="buttons">
          <el-button type="primary" @click="Login('form')">登录</el-button>
          <el-button type="info" @click="Reset('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default{
  data() {
    return {
      // 登录表单
      form: {
        username: 'admin',
        password: '123456'
      },
      // 登录验证规则
      loginFormRules: {
        username: [
        {required: true, message: '请输入登录用户名', trigger: 'blur'}, 
        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
      ],
      //验证密码是否合法
      password: [
        { required: true, message: '请输入登录密码', trigger: 'blur' },
        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
      ]
      }
    }
  },
  methods: {
    Login(formName) {
      this.$refs[formName].validate(async (valid) => {
        if(!valid) return;
        const { data } = await this.$http.post('login', this.form);
        if(data.meta.status !== 200) return this.$message.error('登录失败! ');
        this.$message.success('登录成功! ')
        // 保存token, 跳转页面
        window.sessionStorage.setItem('token', data.data.token);
        this.$router.push('/home')
      })
    },
    Reset(formName){
      this.form.username = '';
      this.form.password = '';
    }
  }
}
</script>
<style lang="less" scoped>
.login_container{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg,#0269ff,#42a4ff 33%,#c8e6ff 67%,#fff 93%);
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  
  .avatar_box{
    position: absolute;
    top: -28%;
    left: 33%;
    width: 130px;
    height: 130px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    img{
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login_form{
    padding: 110px 20px 0 20px;
  }
}
.buttons{
  position: absolute;
  right: 20px;
}
</style>