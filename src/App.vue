<template>
  <div class="breed">
    <div class="header">

    </div>
    <div class="nav">
      <router-link v-for="(item,index) in navList" :to="item.path">{{ item.name }}</router-link>
    </div>
    <div class="content">
      <router-view></router-view>  
    </div>
    <div class="footer">

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
          path:'/'
        },
        {
          name:'关于我们',
          path:'/aboutUs'
        }
      ]
    };
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>
