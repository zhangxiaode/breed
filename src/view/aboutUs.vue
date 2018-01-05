<template>
  <div class="aboutUs">
    <div class="sideBar">
      <ul>
        <li :key="index" v-for="(item,index) in sideBarList" @click="changeSideBar(item)" :class="[{'actived':item.status}]">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="aboutUsCont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      sideBarList:[
        {
          name:"关于我们",
          path:'/aboutUs/about',
          status:true
        },
        {
          name:"联系我们",
          path:'/aboutUs/connect',
          status:false
        }
      ]
    }
  },
  methods: {
    changeSideBar(item){
      this.sideBarList.forEach(element => {
        element.status=false;
      });
      item.status=true;
    }
  }
}
</script>
