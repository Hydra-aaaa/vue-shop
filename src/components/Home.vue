<template>
  <div class="HomePage">
    <div class="header">
      <img src="@/assets/logo.png" alt="">
      <div class="title">电商后台管理系统</div>
      <el-button class="btn" @click="exit" type="info">退出</el-button>
    </div>
    <div class="aside">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="Main"></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    exit(){
      window.sessionStorage.clear();
      this.$router.push('/');
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  color: #fff;
  height: 60px;
  background-color: #373d41;
  overflow: hidden;
  img{
    float: left;
    width: 65px;
  }
  .title{
    float: left;
    margin: 15px 0 0 5px;
  }
  .btn{
    float: right;
    margin: 10px 15px 0 0;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
