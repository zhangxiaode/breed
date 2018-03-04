<template>
  <div class="connect">
    <div class="title">联系我们</div>
    <div class="cont">
      <div class="contImg">
        <img :key="index" v-for="(item,index) in photo" :src="item">
      </div>
      <div class="contTxt">
        <p>全椒县西张龙虾养殖专业合作社</p>
        <p>联系人:张凤春</p>
        <p>手机:13516401935</p>
        <p>地址：安徽省滁州市全椒县二郎口镇曹埠村西张组</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'connect',
  data () {
    return {
      photo:[require("@img/connectImg1.jpg"),require("@img/connectImg2.jpg")]
    }
  }
}
</script>
