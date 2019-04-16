<template>
  <div>
    <section>
       <div>
           <input type="text" placeholder="请输入您要搜索问题/产品使用手册的关键字">
           <input type="submit" value=" ">
       </div>
        <ul id="list">
            <li>相关Q&A</li>
            <li>
                <h3 class="weight_c">Q：ethome智家的产品适用于哪些应用场合？ </h3>
                <p class="little"><span class="weight_c">A：

                    
                </span>ethome智家的产品适用于普通住宅、别墅、高端写字楼、精品酒店等应用场合，带给用户最佳的使用体验和绿色节能感受。</p>
            </li>
            <li>
                    <h3 class="weight_c">Q：ethome智家的产品可以单独购买使用吗？ </h3>
                    <p class="little"><span class="weight_c">A：</span>ethome智家的产品需要由智慧中心协同管理除空调伴侣和摄像头，因此在用户第一次购买ethome智家产品的时候，需要同时购买智慧中心，以后则可以单独购买喜爱的ethome智家产品，我们建议用户可以选择带智慧中心的产品套装，具有比较高的性价比。</p>
            </li>
        </ul>
        <div id="foot">
            <div style="position:relative">
               <input @blur="hint" id="input_1" placeholder="请输入问题标题" type="text" class="border_opa"><span class="input_s" id="d1" style="position:absolute;top:0px;left:611px;"></span>
               <textarea  @blur="hint" id="input_2"  placeholder="请输入问题描述" name="" class="t1" cols="30" rows="10"></textarea><span  class="input_s" style="white-space:nowrap;position:absolute;top:181px;left:605px;"></span>
               <input  @blur="hint" id="input_3" type="text" class="little_w border_opa" placeholder="请留下您的用户名称"><span  class="input_s"></span>
               <input @blur="hint" id="input_4" type="text" class="little_w border_opa" placeholder="请留下您的联系方式  邮箱/手机号码"><span class="input_s"></span>
               <input class="border_opa" type="submit" value="提交问题">
            </div>
            <div>
                <div>
                    <span class="little_l">技术支持邮箱：</span>
                    <span class="little_b">support@ethome.com</span>
                </div>
                <div>
                    <span class="little_l">技术支持 QQ：</span>
                    <span class="little_b">3237119244</span>
                </div>
            </div>
        </div>
   </section>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
      hint(){
          if(!event.value){
              console.log("123")
              event.target.nextElementSibling.innerText = "此处不能为空"
          }else{
               event.target.nextElementSibling.innerText = ""
          }
      }
  }
}
</script>
<style scoped>
*{
  padding:0;margin:0;
}
body{
    background:#e8eaed;
}
section{
    width:1300px;
    margin:0 auto;
    background:#fff;
    padding-bottom:30px;
}
section>div:first-child{
    width:100%;
    height:455px;
    background:url(../assets/ban_supp.jpg);
}
section>div>input:first-child{
    width:700px;
    height:44px;
    line-height:30px;
    opacity: 0.8;
    border:1px solid #e6e6e6;
    margin-top:168px;
    margin-left:243px;
}
section>div>input:last-child{
    width:51px;
    height:46px;
    opacity: 0.8;
    border:1px solid #fff;
    border-top-right-radius:20%;
    border-bottom-right-radius:20%;
    margin-left:-5px;
    background:blue;
}
#list{
    width:980px;
    /* height:341px; */
    margin:0 auto;
    list-style:none;
}
#list>li:first-child{
    padding-top:10px;
    padding-bottom:25px;
    font-size:22px;
    color:#1a1a1a;
}
#list>li:not(:first-child){
    padding-bottom:40px;
}
.weight_c{
    font-weight:700;
    font-size:20px !important;
    color:#666;
}
.little{
    font-size:16px;
}
#foot{
    margin:0 auto;
    width:980px;
    height:365px;
    overflow:visible;
}
#foot>div:first-child{
    width:650px;
    height:376px;
    float:left;
}
#foot>div:first-child>input:first-child{
    width:610px;
    height:34px;
}
.border_opa{
    border:1px solid #d1d4d9;
    margin-bottom:20px;
}
.border_opa{
    width:613px;
    height:124px;
    margin-bottom:20px;
}
.little_w{
    width:320px;
    height:34px;
    padding-right:20px;
}
#foot>div:first-child>input:last-child{
    width:120px;height:36px;
    display:block;
}
.little_l{
    font-size:18px;
    color:#666;
}
.little_b{
    font-size:17px;
    color:#4284f4;
}
#foot>div:last-child{
    float:right;
    width:325px;
    height:348px;
    /* background:blue; */
}
#foot>div:last-child>div:first-child{
    padding-top:85px;
}
.input_s{
    font-size:12px;
    color:red;
    line-height:34px;
    width: 200px;
    height: 30px;
}
#input_2{
    width:600px;
}
.s1{
    position:absolute;
    top:52px;
    left:601px;
}

</style>