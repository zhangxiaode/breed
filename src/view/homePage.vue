<template>
  <div class="homePage">
    <div class="scene assortment">
      <div class="normalBox">
        <div class="title"><span>淡水小龙虾</span></div>
        <div class="tips">
          <p>小龙虾（学名：Procambarus clarkii）：也称克氏原螯虾、红螯虾和淡水小龙虾。形似虾而甲壳坚硬。成体长约5.6~11.9厘米，暗红色，甲壳部分近黑色，腹部背面有一楔形条纹。幼虾体为均匀的灰色，有时具黑色波纹。螯狭长。甲壳中部不被网眼状空隙分隔，甲壳上明显具颗粒。额剑具侧棘或额剑端部具刻痕。</p>
          <p>（营养价值：小龙虾体内的蛋白质含量很高，且肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物；虾肉内还富含镁、锌、碘、硒等，镁对心脏活动具有重要的调节作用，能保护心血管系统，它可减少血液中胆固醇含量，防止动脉硬化，同时还能扩张冠状动脉，有利于预防高血压及心肌梗塞。小龙虾含有虾青素，虾青素是一种很强的抗氧化剂，日本大阪大学的科学家发现，虾青素有助消除因时差反应而产生的“时差症”。另外，小龙虾还可入药，能化痰止咳，促进手术后的伤口生肌愈合。）</p>
          <p>（保护级别：列入《世界自然保护联盟》（IUCN）2010年濒危物种红色名录ver3.1——无危（LC）。</p>
        </div>
        <ul class="cont">
          <li :key="index" v-for="(item,index) in newsBox3"><a href="javascript:;"><img :src="item.imgUrl" alt=""></a></li>
        </ul>
      </div>
    </div>
    <div class="top">
      <div class="newsWraper" ref="newsWraper">
        <div class="normalBox">
          <div class="title"><span>今日头条</span></div>
          <ul class="cont">
            <li :key="index" v-for="(item,index) in newsBox1"><a href="javascript:;">{{item.value}}</a><span>{{item.date}}</span></li>
          </ul>
        </div>
        <div class="normalBox">
          <div class="title"><span>相关文库</span></div>
          <ul class="cont">
            <li :key="index" v-for="(item,index) in newsBox2"><a href="javascript:;">{{item.value}}</a><span>{{item.date}}</span></li>
          </ul>
        </div>
      </div>
      <div class="map">
        <div id="mapArea" :style="'width:100%;height:' + height"></div>
      </div>
    </div>
    <div class="newsBanner"><img src="../../static/images/newsBanner.jpg" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      height:"290px",
      newsBox1:[
        {value:"高温养虾季节十大注意",date:"2018/01/12"},
        {value:"高温养虾季节稍等史蒂夫十大注意2",date:"2018/01/12"},
        {value:"高温养暗示法虾季节阿道夫十大注意3",date:"2018/01/12"},
        {value:"啊地方高温阿舒服点养虾季节十大注意4",date:"2018/01/12"},
        {value:"阿迪高温养虾季节十大注意5",date:"2018/01/12"},
        {value:"啊身份阿舒服点暗示法高温养虾季节十大注意6",date:"2018/01/12"}
      ],
      newsBox2:[
        {value:"幼虾养殖幼之阿道夫幼虾收获",date:"2018/01/12"},
        {value:"幼虾养殖之阿迪阿斯顿发阿斯顿发幼虾收获2",date:"2018/01/12"},
        {value:"殖幼之暗示法幼虾收获3",date:"2018/01/12"},
        {value:"养殖幼之幼虾收获4",date:"2018/01/12"},
        {value:"获阿斯顿发5",date:"2018/01/12"},
        {value:"幼之阿斯顿幼虾收获6",date:"2018/01/12"}
      ],
      newsBox3:[
        {imgUrl:require("@img/germchitImg17.jpg")},
        {imgUrl:require("@img/germchitImg18.jpg")},
        {imgUrl:require("@img/germchitImg12.jpg")},
        {imgUrl:require("@img/germchitImg11.jpg")}
      ],
    }
  },
  mounted(){
    this.height=this.$refs.newsWraper.height + "px";
    //百度地图API功能
    var map = new BMap.Map("mapArea");    // 创建Map实例118.275612,32.098167
    map.centerAndZoom(new BMap.Point(118.160475,31.914325), 11);  // 初始化地图,设置中心点坐标和地图级别 
    var point = new BMap.Point(118.160475,31.914325);
    var marker = new BMap.Marker(point);        // 创建标注    
    map.addOverlay(marker); 
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
      mapTypes:[
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
          ]}));	  
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    marker.addEventListener("click", function(){    
        alert("龙虾养殖场");    
    }); 
  }
}
</script>
