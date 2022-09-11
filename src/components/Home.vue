<template>
  <div class="HomePage">
    <el-header class="header">
      <img src="@/assets/logo.png" alt="">
      <div class="title">电商后台管理系统</div>
      <el-button class="btn" @click="exit" type="info">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'" :collapse="isCollapse">
        <div class="toggleBtn" @click="changeToggle">|||</div>
        <el-menu 
          class="menu"
          mode="vertical"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :collapse-transition="true"
          unique-opened>
          <el-submenu :index="(item.id.toString())" v-for="(item, index) in menulist" :key=item.id>
            <template slot="title">
              <i :class="objIcon[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item v-for="(subItem, index) in item.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
    <div class="Main"></div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data(){
    return {
      menulist: [],
      isCollapse: false,
      objIcon: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      }
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
      const { data: res } = await this.$http.get('menus');
      // console.log(res);
      this.menulist = res.data;
    },
    changeToggle(){
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less" scoped>
.HomePage{
  height: 100%;
}
.el-header{
  color: #fff;
  height: 60px;
  background-color: #373d41;
  overflow: hidden;
  padding: 0;
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
.el-menu {
  height: 100%;
  border-right: none;
}
.el-container{
  height: calc(100vh - 60px);
}
.el-aside{
  height: 100%;
  overflow: hidden;
}
.toggleBtn{
  color: #fff;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  background-color: #4a5064;
  letter-spacing: .2rem;
  cursor: pointer;
}
.iconfont{
  margin-right: 10px;
}
</style>
