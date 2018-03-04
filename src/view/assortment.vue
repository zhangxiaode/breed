<template>
  <div class="scene assortment">
    <div class="normalBox">
      <div class="title"><span>小龙虾</span></div>
      <!-- <div class="tips">是淡水经济虾类，因肉味鲜美广受人们欢迎。因其杂食性、生长速度快、适应能力强而在当地生态环境中形成绝对的竞争优势。 其摄食范围包括水草、藻类、水生昆虫、动物尸体等，食物匮缺时亦自相残杀。小龙虾近年来在中国已经成为重要经济养殖品种。在商业养殖过程中应严防逃逸，尤其是严防逃入人迹罕至的原生态水体。其对当地物种生态竞争优势而导致破坏性危害。</div>-->
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox3"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
    <div class="normalBox">
      <div class="title"><span>虾苗</span></div>
      <!-- <div class="tips">是淡水经济虾类，因肉味鲜美广受人们欢迎。因其杂食性、生长速度快、适应能力强而在当地生态环境中形成绝对的竞争优势。 其摄食范围包括水草、藻类、水生昆虫、动物尸体等，食物匮缺时亦自相残杀。小龙虾近年来在中国已经成为重要经济养殖品种。在商业养殖过程中应严防逃逸，尤其是严防逃入人迹罕至的原生态水体。其对当地物种生态竞争优势而导致破坏性危害。</div>-->
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox1"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assortment',
  data () {
    return {
      newsBox1:[
        {imgUrl:require("@img/germchitImg1.jpg")},
        {imgUrl:require("@img/germchitImg2.jpg")},
        {imgUrl:require("@img/germchitImg3.jpg")},
        {imgUrl:require("@img/germchitImg4.jpg")},
        {imgUrl:require("@img/germchitImg5.jpg")},
        {imgUrl:require("@img/germchitImg7.jpg")}
      ],
      newsBox3:[
        {imgUrl:require("@img/germchitImg8.jpg")},
        {imgUrl:require("@img/germchitImg13.jpg")},
        {imgUrl:require("@img/germchitImg14.jpg")},
        {imgUrl:require("@img/germchitImg18.jpg")},
        {imgUrl:require("@img/germchitImg15.jpg")},
        {imgUrl:require("@img/germchitImg16.jpg")}
      ]
    }
  }
}
</script>
