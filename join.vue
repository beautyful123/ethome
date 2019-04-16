<template>
  <div>
    <section>
        <img src="../assets/ban_coor.jpg" alt="">
        <div class="tab">
            <img src="../assets/left.jpg" alt="">
           <span>加盟说明</span>
            <img src="../assets/right.jpg" alt="">
        </div>
        <p>认同ethome的品牌，产品及理念，参与者独立经营ethome品牌体验及销售产品，规范运作线上线下渠道及市场销售体系，持续为合作伙伴提供全线产品支</p>
        <p>持和优质售后服务保障。由ethome授予品牌资质，共同经营智家市场，实现共赢。请发送个人简介及资源优势说明至</p>
        <span>sales@ethome.com</span>
        <div class="tab">
            <img src="../assets/left.jpg" alt="">
           <span>加盟商说明</span>
            <img src="../assets/right.jpg" alt="">
        </div>
        <aside>
            <img src="../assets/c1.png" alt="">
            <div id="container"></div>
        </aside>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  }
}
</script>
<style scoped>
  *{margin:0;padding:0;}
body{
    background:#e8eaed;
}
section{
    width:1300px;
    margin:0 auto;
}
section>img{
    background:red;
}
.tab{
    background:#fff;
    text-align:center;
    padding-top:60px;
    line-height:40px;
    padding-bottom:32px;
}
div.tab>img{
    vertical-align:middle;
}
div.tab>span{
    margin:0 10px;
    color:#1d49a0;
    font-weight: 700;
    font-size:20px;
}
section>p{
    width:100%;
    text-align:center;
    font-size:14px;
    background:#fff;
    padding-bottom:10px;
}
section>span{
    display:block;
    text-align:center;
    background:#fff;
    padding-top:10px;
    color:#4284f4;
    font-size:18px;
    font-weight:bold;
}
aside{
    margin:0;padding:0;
    width:1300px;
    margin:0 auto;
    background:#fff;
    text-align:center;
}
#container{
    width:920px;
    height:80px;
    margin:0 auto;
    padding:0;
    background:#fff;
}
</style>