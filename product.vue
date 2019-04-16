<template>
  <div>
    <section>
       <div class="clock d1" v-for="(item,k) of list" :key="k" :data-img="item.img">
           <div class="clock"> 
                <h1>{{item.title}}</h1>
                <p>{{item.des}}</p>
           </div>          
       </div>
          <div class="clock3 d3">
               <div class="clock3">
                    <h1>智能灯光套餐</h1>
               </div>
          </div>
          <div class="other d1">
           <div style="width:100%;height:100%;"> 
                <h1>空调面板</h1>
                <p>液晶触控面板，实现空调、地暖系统智能控制，定时控制、联动控制，更节能，更舒适</p>
           </div>          
       </div>
          <div id="d0"></div>
   </section>
  </div>
</template>
<script>
export default {
  data(){
    return {
         list:[
               {img:"../../static/s1_1.jpg",title:"智慧中心",des:"智家系统控制中心，是系统运行的核心，又是一台超强无线路由器。智能控制，网络覆盖一步到位。"},
               {img:"../../static/s1.png",title:"呼叫铃",des:"与告警单元配合使用，免安装，内置充电电池，超长待机。多种提醒方式，多一点关爱。"},
               {img:"../../static/s2.png",title:"环境感应器",des:"监测室内温湿度和光照，可与其它设备组成联动控制。免安装，内置充电电池，超长待机。"},
               {img:"../../static/s3.png",title:"五合一智能气体监测",des:"五大有毒气体（一氧化碳、二氧化碳、VOC、甲烷、甲醛）3秒检测，及时报警提醒。"},
               {img:"../../static/s4.png",title:"门磁",des:"检测门窗开关状态，触发告警推送，可以与其它设备组成联动控制。"},
               {img:"../../static/goods.jpg",title:"智能摄像头",des:"安防小卫士，走到哪都妥妥的.720P，360°环顾四周，实时语音对讲。"},
               {img:"../../static/s6.png",title:"智能插座",des:"远程开关、定时开关，可以与其它设备组成联动控制。"},
               {img:"../../static/s7.png",title:"告警单元",des:"系统发声单元，与门铃、呼叫铃及其他设备配合使用，发出对应的提示声或告警声。即插即用，音量可调。"},
               {img:"../../static/s9.png",title:"移动感应器",des:"监测室内温湿度和光照，可与其它设备组成联动控制。免安装，内置充电电池，超长待机。"},
               {img:"../../static/s10.png",title:"智能锁",des:"远程开锁、密码开锁，可以实时查看开锁记录、重置密码。"},
               {img:"../../static/s11.png",title:"气体监测器",des:"厨房气体实时监测，可以联动告警单元提醒用户。"},
               {img:"../../static/s13.png",title:"智能门铃",des:"与告警单元配合使用，免安装，内置充电电池，超长待机。"},
         ]
    }
  },
  methods:{
      fn1(){
          return `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
      },
       fn(){
            var products = document.getElementsByClassName('clock');
            for(var item of products){
                 var img = item.dataset.img;
                 item.style.backgroundImage = `url(${img})`
                 item.style.backgroundColor = this.fn1()
            }
       },
  },
  mounted(){
       this.fn();
  }
}
</script>
<style scoped>
  *{margin:0;padding:0;}
body{
background-color:#e8eaed;
}
section{
    width:1300px;
    margin:0 auto;
    background-color:#fff;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
}
.clock{
    width:310px;height:280px;
    margin-bottom:10px;
}
.other{
    width:310px;height:280px;
    margin-bottom:10px;
}
.d1{
    background-image:url(../../static/s1_1.jpg);
    margin:0 6px 12px;
}
.d1>div{
    overflow:hidden;
    width:100%;
    background-color:#0072ce;
    color:#fff;
    display:none;
    }
.d1:hover>div{
    display:block;
}
.d1>div>h1{
    width:90%;
    margin:0 auto;
    margin-top:70px;
    margin-bottom:10px;
}
.d1>div>p{
    margin:0 auto;
    width:90%;
}
.clock2{
    width:960px;height:280px;
}
.d2{
   background:url(../../static/s12.png);
}
.d2>div{
    background:#1cd0c8;
    display:none;
}
.d2>div>h1{
    color:#fff;
    width:90%;
    margin:0 auto;
    padding-top:70px;
    margin-bottom:10px;
}
.d2:hover>div{
    display:block;
}
.clock3{
    width:642px;
    height:280px;
}
.d3{
    background-image:url(../../static/s17.png);
    background-size:contain;
}
.d3>div{
    background:#ffde00;
    display:none;
}
.d3>div>h1{
    color:#fff;
    width:90%;
    margin:0 auto;
    padding-top:70px;
}
.d3:hover>div{
    display:block;
}
#d0{
    width:315px;    
}
</style>