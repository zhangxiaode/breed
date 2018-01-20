<template>
  <div class="news">
    <div class="newsBanner"><img src="../../static/images/newsBanner.jpg" alt=""></div>
    <div class="newsWraper">
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
      <div class="normalBox">
        <div class="title"><span>相关咨询</span></div>
        <ul class="cont">
          <li :key="index" v-for="(item,index) in newsBox3"><a href="javascript:;">{{item.value}}</a><span>{{item.date}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
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
        {value:"幼虾养爱上殖理",date:"2018/01/12"},
        {value:"幼之日常阿斯顿发管理2",date:"2018/01/12"},
        {value:"日常管撒地方阿斯顿阿斯顿阿斯顿发理3",date:"2018/01/12"},
        {value:"殖幼之阿斯顿日常管理4",date:"2018/01/12"},
        {value:"之日啊的方式常管理5",date:"2018/01/12"},
        {value:"日常爱上管理6",date:"2018/01/12"}
      ]
    }
  }
}
</script>
