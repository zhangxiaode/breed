<template>
  <div class="map">
    <div id="mapArea" :style="'width:100%;height:' + height"></div>
  </div>
</template>

<script>
export default {
  name: 'place',
  data () {
    return {
    }
  },
  computed:{
    height(){
      return document.body.clientHeight - 150 - 60 - 40 -20 + "px"
    }
  },
  mounted(){
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
