<template>
  <div class="scene assortment">
    <div class="normalBox">
      <div class="title"><span>大龙虾</span></div>
      <div class="tips">大龙虾是软甲纲(Crustacea)十足目(Decapoda)螯龙虾科(Homaridae, 或拟海螯虾科〔Nephropsidae〕，真龙虾)、龙虾科(Palinuridae, 刺龙虾)、蝉虾科和多螯龙虾科(Polychelidae, 深海龙虾)动物的统称。</div>
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox1"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
    <div class="normalBox">
      <div class="title"><span>超级耐热虾</span></div>
      <div class="tips">英国科学家发现一种新的深海虾种群，是目前最耐热的生物。它的栖息地深度超过此前在地球上环境最极端的深海火山喷口地区发现的其他任何虾种群。这种虾生活在加勒比海海底的沸腾热泉，水温可能超过450摄氏度。</div>
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox2"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
    <div class="normalBox">
      <div class="title"><span>小龙虾</span></div>
      <div class="tips">是淡水经济虾类，因肉味鲜美广受人们欢迎。因其杂食性、生长速度快、适应能力强而在当地生态环境中形成绝对的竞争优势。 其摄食范围包括水草、藻类、水生昆虫、动物尸体等，食物匮缺时亦自相残杀。小龙虾近年来在中国已经成为重要经济养殖品种。在商业养殖过程中应严防逃逸，尤其是严防逃入人迹罕至的原生态水体。其对当地物种生态竞争优势而导致破坏性危害。</div>
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox3"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
      </ul>
    </div>
    <div class="normalBox">
      <div class="title"><span>波纹龙虾</span></div>
      <div class="tips">全身呈青绿色，很易分辨，市场常见的多为本地龙，其余也有来自斯里兰卡、南亚海域及其它地方。主要产于香港大鹏湾、西贡、东平洲一带、斯里兰卡、南亚海域。全年供应，农历六七月当造。青龙卖相美观，时尚高级餐厅必备食材，深得总厨青睐。因为虾母特别多膏，出品时最适合做蒜茸蒸,也可出品芝士局和刺身，肉质鲜嫩无比。</div>
      <ul class="cont">
        <li :key="index" v-for="(item,index) in newsBox4"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
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
        {imgUrl:"../../static/images/germchitImg14.jpg"}
      ],
      newsBox3:[
        {imgUrl:"../../static/images/germchitImg17.jpg"},
        {imgUrl:"../../static/images/germchitImg18.jpg"},
        {imgUrl:"../../static/images/germchitImg12.jpg"},
        {imgUrl:"../../static/images/germchitImg11.jpg"},
        {imgUrl:"../../static/images/germchitImg13.jpg"},
        {imgUrl:"../../static/images/germchitImg14.jpg"},
        {imgUrl:"../../static/images/germchitImg15.jpg"},
        {imgUrl:"../../static/images/germchitImg16.jpg"}
      ],
      newsBox4:[
        {imgUrl:"../../static/images/germchitImg5.jpg"},
        {imgUrl:"../../static/images/germchitImg6.jpg"},
        {imgUrl:"../../static/images/germchitImg7.jpg"},
        {imgUrl:"../../static/images/germchitImg8.jpg"}
      ]
    }
  }
}
</script>
