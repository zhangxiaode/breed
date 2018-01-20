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
        {imgUrl:"../../static/images/germchitImg1.jpg"},
        {imgUrl:"../../static/images/germchitImg2.jpg"},
        {imgUrl:"../../static/images/germchitImg3.jpg"},
        {imgUrl:"../../static/images/germchitImg4.jpg"},
        {imgUrl:"../../static/images/germchitImg5.jpg"},
        {imgUrl:"../../static/images/germchitImg6.jpg"},
        {imgUrl:"../../static/images/germchitImg7.jpg"},
        {imgUrl:"../../static/images/germchitImg8.jpg"}
      ],
      newsBox2:[
        {imgUrl:"../../static/images/germchitImg11.jpg"},
        {imgUrl:"../../static/images/germchitImg12.jpg"},
        {imgUrl:"../../static/images/germchitImg13.jpg"},
        {imgUrl:"../../static/images/germchitImg14.jpg"},
        {imgUrl:"../../static/images/germchitImg15.jpg"},
        {imgUrl:"../../static/images/germchitImg16.jpg"},
        {imgUrl:"../../static/images/germchitImg17.jpg"},
        {imgUrl:"../../static/images/germchitImg18.jpg"}
      ]
    }
  }
}
</script>
