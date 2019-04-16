<template>
  <div id="app">
    <!-- header头部文件 -->
    <header>
    <div id="top"> 
        <div>
            <router-link to="/ing">登录</router-link>
            <router-link to="/ing">注册</router-link> 
        </div>
    </div>
</header>
<nav>
    <table></table>
    <img src="./assets/logo.png" alt="">
    <ul id="nav1">
        <li><a href="javascript:;" @click="fn6">技术支持</a></li>
        <li><a href="javascript:;" @click="fn5">合作加盟</a></li>
        <li><a href="javascript:;" @click="fn4">平台</a></li>
        <li><a href="javascript:;" @click="fn3">app</a></li>
        <li><a href="javascript:;" @click="fn2">产品</a></li>
        <li><a href="javascript:;" @click="fn1">首页</a></li>
    </ul> 
</nav>
      
    <router-view/>


        <footer>
        <div id="bottom1">
        <table></table>
            <div id="left">
                <ul>
                    <li>关于我们</li>
                    <li>加入我们</li>
                    <li>服务协议</li>
                </ul>                   
                <div>
                    版权所有 ©2018 山西小问智能科技有限公司 
                </div>
            </div>
            <div class="right">
                <p>关注我们</p>
                <img src="./assets/wx.jpg" alt="">
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
      fn1(){
          this.$router.push("/home")
      },
      fn2(){
          this.$router.push("/product")
      },
      fn3(){
          this.$router.push("/app")
      },
      fn4(){
          this.$router.push("/platform")
      },
      fn5(){
          this.$router.push("/join")
      },
      fn6(){
          this.$router.push("/support")
      },
  }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
  width:100%;
} */
*{
    margin:0;
    padding:0;
}
body{
    background:#f2f2f2;
}
#top{
    height:50px;
    background:#d6d6d6;
}
#top>div{
    width:1300px;
    height:50x;
    margin:0 auto;
    overflow: hidden;
}
#top>div>a:focus+div{
    display:block;

}
#top>div>div{
    display:none;
    position:absolute;
    top:0px;
   right:0px;
    border:20px double gray;
    width:400px;
    height:400px;
    z-index: 100;
}
#top>div>a{
    border-radius:7px;
    background-color:#a0a0a0;
    width:70px;
    height:30px;
    float:right;
    text-align: center;
    line-height:30px;
    margin-top:10px;
    color:#fff;
    margin-left:20px;
}
#top>div>a:hover{
    color:#fff;
    text-decoration: none;
}
#top>div>a:last-child{
    margin-right:20px;
}
nav{
    width:1300px;
    height:80px;
    margin:0 auto;
    background:#fff;
}
#nav1{
    list-style: none;
}
nav>img{
    float:left;
    margin-top:10px;
    margin-left:20px;
}
#nav1>li{
    font-size:18px;
    color:#4284f4;
    float:right;
    line-height:80px;
}
#nav1>li>a{
    padding:20px 30px;
    text-decoration:none;
    color:#4284f4;
}
#nav1>li>a:focus{
    border-bottom:1px solid #4284f4;
}
*{padding:0;margin:0;}
footer{
    width:100%;
    height:170px;
    background:#373d41;
}
footer>#bottom1{
    width:1300px;
    margin:0 auto;
}
#left{
    width:600px;
    margin-top:40px;
    margin-left:40px;
    float:left;
}
#left>ul{
    list-style:none;
    overflow:hidden;
}
#left>ul>li{
    color:#fff;
    font-size:16px;
    float:left;
    padding-right:40px;
}
#left>div{
    margin-top:60px;
    color:#fff;
    font-size:14px;
    opacity: 0.5;
}
   .right{
       width:600px;
       float:right;
       margin-right:20px;
   } 
   .right>p{
       width:90px;
       text-align:center;
       margin-top:18px;
       color:#fff;
       float:right;
   }
   .right>img{
       margin-top:16px;
       width:90px;
       height:90px;
       clear:both;
       float:right;
   }
   a{
       text-decoration: none;
   }
</style>
