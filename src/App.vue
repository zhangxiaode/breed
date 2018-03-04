<template>
  <div class="breed">
    <div class="header">
      <a href="javascript:;" class="logo"></a>
    </div>
    <div class="nav">
      <ul>
        <li :key="index" v-for="(item,index) in navList" @click="changeNav(item)" :class="[{'actived':item.status}]">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>  
    </div>
    <div class="footer">
      全椒县西张龙虾养殖专业合作社  联系人:张凤春  手机: <span>13516401935</span>
    </div>
  </div>
</template>
<script>
import "@style/reset.less";
import "@style/common.less";
import "@style/main.less";
export default {
  name: "app",
  data() {
    return {
      navList:[
        {
          name:'网站首页',
          path:'/',
          status:true
        },
        {
          name:'龙虾品种',
          path:'/assortment',
          status:false
        },
        {
          name:'养殖实景',
          path:'/scene',
          status:false
        },
        {
          name:'新闻咨询',
          path:'/news',
          status:false
        },
        {
          name:'养殖技术',
          path:'/technique',
          status:false
        },
        {
          name:'养殖场地图',
          path:'/map',
          status:false
        },
        {
          name:'关于我们',
          path:'/aboutUs/about',
          status:false
        }
      ]
    };
  },
  created() {
    this.navList.forEach((element) => {
      element.path==this.$route.fullPath?element.status=true:element.status=false;
    })
  },
  methods: {
    changeNav(item){
      this.navList.forEach(element => {
        element.status=false;
      });
      item.status=true;
    }
  }
};
</script>
