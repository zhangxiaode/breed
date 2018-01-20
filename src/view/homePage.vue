<template>
  <div class="homePage">
    <div class="scene assortment">
      <div class="normalBox">
        <div class="title"><span>波纹龙虾</span></div>
        <div class="tips">全身呈青绿色，很易分辨，市场常见的多为本地龙，其余也有来自斯里兰卡、南亚海域及其它地方。主要产于香港大鹏湾、西贡、东平洲一带、斯里兰卡、南亚海域。全年供应，农历六七月当造。青龙卖相美观，时尚高级餐厅必备食材，深得总厨青睐。因为虾母特别多膏，出品时最适合做蒜茸蒸,也可出品芝士局和刺身，肉质鲜嫩无比。</div>
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
