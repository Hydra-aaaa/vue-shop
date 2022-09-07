<template>
  <div class="HomePage">
    <div class="header">
      <img src="@/assets/logo.png" alt="">
      <div class="title">电商后台管理系统</div>
      <el-button class="btn" @click="exit" type="info">退出</el-button>
    </div>
    <div class="aside">
      <el-aside>
        <el-menu 
          class="menu"
          mode="vertical"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :collapse-transition="false">
          <el-submenu>
            导航一
          </el-submenu>
        </el-menu>
      </el-aside>
      
    </div>
    <div class="Main"></div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data(){
    return {
      menulist: []
    }
  },
  created(){
    this.getMenuList();
  },  
  methods: {
    exit(){
      window.sessionStorage.clear();
      this.$router.push('/');
    },
    async getMenuList(){
      console.log(window.sessionStorage.getItem('token'));
      const { data: res } = await this.$http.get('menus');
      console.log(res);
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
.menu {
  width: 200px;
  min-height: 200px;
}
</style>
