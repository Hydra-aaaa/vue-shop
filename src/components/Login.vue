<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="@/assets/logo.png" alt="">
      </div>
      <el-form ref="form" :model="form" label-width="0px" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="form.username" prefix-icon="iconfont icon-custom-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="iconfont icon-password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="buttons">
        <el-button type="primary">登录</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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
    left: 34%;
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