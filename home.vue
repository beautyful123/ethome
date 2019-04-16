<template>
  <div>
    <!-- header -->
    <!-- swiper	 -->
   <section>
        <!-- 第一块 -->
         <!--<div id="container1">
             <img src="../assets/ban1.jpg" alt="" class="ban">
             <img src="../assets/ban2.jpg" alt="" class="">            
         </div>-->

        <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/ban1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/ban2.jpg" alt=""></div>
        </div>
    <!-- 如果需要分页器 -->
<!-- 	   <div class="swiper-pagination"></sdiv> -->
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div> 
  </div>

<!-- //        <script>
//            function task(){
//                var show=document.querySelector(
//                    "#container1>img.ban"
//                );
//                show.className="";
//                if(show.nextElementSibling!==null)
//                    show.nextElementSibling.className="ban";
//                else
//                    show.parentNode.children[0].className="ban"
//            }
//            var n=setInterval(task,3000);
//            var div=document.getElementById("container1")
//            //鼠标进入停止定时器
//            div.onmouseover=function(){
//                clearInterval(n);
//            }
//            //鼠标移出重新启动定时器
//            div.onmouseout=function(){
//                n=setInterval(task,3000);
//            }
//        </script> -->
        <!-- 第二块 -->
        <div id="container2" style="width:1300px;box-sizing:border-box">
            <div class="ethome">
                <div :class="none">
                    <img id="d2" src="../assets/pror12.png" alt="" @mouseenter="block_e(1)" @mouseleave="block_e(-1)">
                    <div class="c3">
                        <h3>门磁/窗贴</h3>
                        <p>检测门窗开关状态，触发告警推送，可以与其它设备组成联动控制。</p>
                    </div>
                </div>
            </div>
            <div class="little" @mouseenter="block" ></div>
        </div>
        <!-- 第三块 -->
        <div id="container3">
            <div>
                <h3>安防监控</h3>
                <img src="../assets/five1.png" alt="">
                <p>摄像头、门磁、移动感应器...</p>
                <p>设备联动视频， </p>
                <p>更智能的安防，更安心的家</p>
            </div>
            <div>
                    <h3>空调地暖控制</h3>
                    <img src="../assets/five2.png" alt="">
                    <p>空调地暖控制</p>
                    <p>分体机、风机、水机、VRV</p>
                    <p>全面覆盖，节能，更舒适</p>
            </div>
            <div>
                    <h3>老幼关爱系统</h3>
                    <img src="../assets/five3.png" alt="">
                    <p>应急呼叫，语音交互，</p>
                    <p>针对老幼贴心关爱设计</p>
                    <p>多一份关怀，多一份安心</p>
            </div>
            <div>
                    <h3>灯光电气控制</h3>
                    <img src="../assets/five4.png" alt="">
                    <p>不用布线</p>
                    <p>升级优化开关电气布置</p>
                    <p>让传统电器变为智能家电</p> 
            </div>
            <div>
                    <h3>环境监控</h3>
                    <img src="../assets/five4.png" alt="">
                    <p>每一个温度</p>
                    <p>每一立方的空气质量</p>
                    <p>帮你打造最干净的家</p> 
            </div>
        </div>
        <!-- 第四块 -->
        <div id="container4">
            <div>
                <div id="left">    
                    <img src="../assets/video.jpg" alt="">
                </div>
                <div id="right">
                    <h3>“ethome 智家”宣传片</h3>
                   <img src="../assets/ira.jpg" alt="">
                    <p>ethome因爱和品质而生，而爱和品质从不抽象。为成功人士定制更高品质的生活,ethome坚持将舒适 ,安全，格调以及绿色节能的理念滲透于产品绽放于生活</p>
                </div>
            </div>
        </div>
        <!-- 第五块 -->
        <div id="container5">
            <div class="c1">
                <h3>智家APP</h3>
                <hr>
                <p>所有功能，尽在一个app</p>
            </div>
            <div class="c2">
                <img :src='phone' alt="">
                <div>
                    <div>
                        <img :src='one' alt="" @mouseenter="cutimg_one">
                        <p>按房间、设备分，更易识别</p>
                    </div>
                    <div>
                        <img :src='two' alt="" @mouseenter="cutimg_two">
                        <p>多种情景模式</p>
                    </div>
                    <div>
                        <img :src='three' alt="" @mouseenter="cutimg_three">
                        <p>实时消息反馈</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第六快 -->
        <div id="container6">
            <img src="../assets/inbotpic.png" alt="">
        </div>
    </section>
    <!-- footer -->
  </div>
</template>
<script>
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'
export default {
  data(){
    return {
      n:"",//定时器
      none:{
            c2_none:true,
            c2_block:false
      },
      kg:false,
      one:"../../static/ipico1.png",
      two:"../../static/ipico2.png",
      three:"../../static/ipico4.png",
      phone:'../../static/phone1.png',
    }
  },
  methods:{
    //   二楼
      block(){
        this.kg=true;
        this.none.c2_none=false;
        this.none.c2_block=true;
        },
      block_e(e){
          if(this.kg){
              if(e==1){
                this.none.c2_none=false;
                this.none.c2_block=true;   
              }else if(e==-1){
                this.none.c2_none=true;
                this.none.c2_block=false;
                this.kg=false;
              }
              
          }
            // this.none.c2_none=1;
            // this.none.c2_block=-1;
      },
//   四楼
        cutimg_one(a){
            this.one="../../static/ipico1.png";
            this.two="../../static/ipico2.png";
            this.three="../../static/ipico4.png";
            this.one="../../static/ipicohov1.png";
            this.phone='../../static/phone1.png';
        },
        cutimg_two(){
            this.one="../../static/ipico1.png";
            this.two="../../static/ipico2.png";
            this.three="../../static/ipico4.png";
            this.two="../../static/ipicohov2.png"
            this.phone='../../static/phone2.png';
        },
        cutimg_three(){
            this.one="../../static/ipico1.png";
            this.two="../../static/ipico2.png";
            this.three="../../static/ipico4.png";
            this.three="../../static/ipicohov4.png";
            this.phone='../../static/phone4.png';
        }
  },
  created(){
    //   this.n=setInterval(this.task,3000);
            // var div=document.getElementById("container1")
            // //鼠标进入停止定时器
            // div.onmouseover=function(){
            //     clearInterval(n);
            // }
            // //鼠标移出重新启动定时器
            // div.onmouseout=function(){
            //     n=setInterval(this.task,100);
            // }
  },
  destroyed(){//应该是一个钩子函数
    // clearInterval(this.n)
  },
  mounted(){
    var mySwiper = new Swiper(".swiper-container",{
      
    //    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
		// mousewheel: true,
		keyboard : true,
        effect:"fade",
		speed:3000,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    }
    })
  } 
}

</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    section{
        margin:0 auto;
    }
</style>















<style scoped>

*{margin:0;padding:0;}
body{
    color:#666;
    background:#e8eaed;
    min-width:1300px;
}
.swiper-container,#container2,#container3,#container4,#container6{
    width:1300px;
    margin:0px auto 0;
    background:#fff;
    
}
#container2>img{
    display:block;  
    width:100%;
}
#container3{width:1300px;height:360px;}
#container3>div{
    width:258px;
    height:265px;
    border:1px solid #eaeaea;
    padding-top:50px;
    padding-bottom:50px;
    float:left;
}
#container3>div{
    text-align:center;    
}
#container3>div>h3{
    font-weight: normal;
    margin-top:10px;
    margin-bottom:45px;
}
#container3>div>img{
    margin:0 99px;
    margin-bottom:48px;
}
#container3>div>p{
    font-size:0.7rem;
}
#container3>div:hover>p,img{
    color:#4284f4;
}
#container3>div:hover{
    border:1px solid #4284f4;
    cursor:pointer;
}
#container4{
    padding-top:100px;
    padding-bottom:60px;
    height:424px;
}
#container4>div{
    width: 1130px;
    height: 410px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 0px auto;
    padding: 6px;
}
#left{float:left;}
#right{
    float:right;
    margin-right:40px;
}
#right>h3{
    font-size: 1.17em;
    color: #1b49a0;
    margin: 50px 0 40px;
    text-indent: 10px;
}
#right>img{
    display:block;
    margin:20px auto 40px !important;
}
#right>p{
    width:300px;
    height:88px;
    font-size:15px;
    text-indent: 30px;
}
/* container5 */
#container5{
    box-sizing: border-box;
    width:1300px;
    height:960px;
    background:#fff;
    padding:0 200px;
    margin:0 auto;
}
#container5>.c1{
    width:400px;
    margin:0 auto;
    padding:50px 0;

}
.c1>h3{
    text-align:center;
}
#container5>.c1>p,hr{
    text-align:center;
}
#container5>.c1>p:first-child{
    font-size:54px;
}
#container5>.c1>hr{
    width:100px;
    height:6px;
    background-color:#4284f4;
    margin:15px auto;
}
#container5>.c1>p:last-child{
    font-size:23px;
    color:#666;
}
#container5>.c2{
    width:100%;
    height:530px;
    max-width:1300px;

}
#container5>.c2>img{
    width:251px;
    height:526px;
    display: block;
    float:left;
}
#container5>.c2>div{
    width:640px;
    height:420px;
    float:left;
    margin-top:55px;
}
#container5>.c2>div>div{
    width:220px;height:200px;
    text-align:center;
    margin-left:100px;
    margin-bottom:10px;
    font-size:18px;
    float:left;
}
#container6>img{
    display:block;
}
/*轮播*/
#container1{
    height:860px;
    position:relative;
  }
#container1>img{
    position:absolute; top:0; left:0;
    opacity:0;
    transition:all .8s linear;
  }
#container1>img.ban{  opacity:1;  }
#container2{
    text-align: center;
    padding:150px 90px 70px 90px;
    background:#fff;    
    position: relative;
}
.ethome{
    background:url('../assets/mainpic.jpg')   no-repeat;
    height:560px;
    position: relative;
}
.ethome>div>img{
    position:absolute;
    width:240px;
    height:240px;
    top:-83px;
    left:67px;
}
.ethome>div>div{
    width:260px;
    height:92px;
    position: absolute;
    top:-110px;
    left:307px;
}
.ethome>div>div>h3{
    color:#4573ae;
    font-weight: normal;
    width:260px;
    height:45px;
    line-height: 45px;
    font-size: 25px;
    border-bottom: 1px solid #4573ae;
    text-align: left;
    margin-bottom: 5px;
}
.ethome>div{
    transition:all 1s; 
}
div.c3>p{
    text-align: left;
    width:260px;
    height:42px;
    line-height: 21px;
    font-size: 14px;
    color:#333;
}
/* 显示隐藏 */
.c2_none{
    opacity: 0;
    z-index: -1;
}
.c2_block{
    opacity:1;
}
.little{
    width:24px;
    height:18px;
    position:absolute;
    top:278px;
    left:265px;
}
</style>
