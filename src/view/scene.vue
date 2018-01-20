<template>
  <div class="scene">
    <div class="normalBox">
      <div class="title"><span>龙虾种苗</span></div>
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox1"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
    <div class="normalBox">
      <div class="title"><span>种虾展示</span></div>
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox2"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scene',
  data () {
    return {
      newsBox1:[
        {imgUrl:require("@img/germchitImg1.jpg")},
        {imgUrl:require("@img/germchitImg2.jpg")},
        {imgUrl:require("@img/germchitImg3.jpg")},
        {imgUrl:require("@img/germchitImg4.jpg")},
        {imgUrl:require("@img/germchitImg5.jpg")},
        {imgUrl:require("@img/germchitImg6.jpg")},
        {imgUrl:require("@img/germchitImg7.jpg")},
        {imgUrl:require("@img/germchitImg8.jpg")}
      ],
      newsBox2:[
        {imgUrl:require("@img/germchitImg11.jpg")},
        {imgUrl:require("@img/germchitImg12.jpg")},
        {imgUrl:require("@img/germchitImg13.jpg")},
        {imgUrl:require("@img/germchitImg14.jpg")},
        {imgUrl:require("@img/germchitImg15.jpg")},
        {imgUrl:require("@img/germchitImg16.jpg")},
        {imgUrl:require("@img/germchitImg17.jpg")},
        {imgUrl:require("@img/germchitImg18.jpg")}
      ]
    }
  }
}
</script>
