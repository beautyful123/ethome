<template>
  <div>
    <div class="frame">
        <img src="../assets/pt_banner.png" alt="">
        <div>
            <img src="../assets/dotted_line.png" alt="">
            <div>产品快速接入</div>
            <img src="../assets/dotted_line.png" alt="">
        </div>
        <table class="tab_border" >
            <tr>
                <td class="td_rightb" >
                    <p class="weight">433MHz模块</p>
                    <p>低功耗，远距离，</p>
                    <p>接入力强，无线跳频技术</p>
                </td>
                <td class="td_rightb">
                    <p class="weight">智慧中心</p>
                    <p>智能控制与wifi上网分离，</p>
                    <p>逻辑控制，预留通讯接口</p>
                </td>
                <td class="td_rightb">
                    <p class="weight">云服务</p>
                    <p>大数据架构，</p>
                    <p>可扩展性强，第三方兼容性强</p>
                </td>
                <td>
                    <p class="weight">APP/web</p>
                    <p>支持多地智慧中心添加控制，</p>
                    <p>支持设备联动，支持一键分享、</p>
                </td>
            </tr>
        </table>
        <div>
            <img src="../assets/dotted_line.png" alt="">
            <div>产品快速实现</div>
            <img src="../assets/dotted_line.png" alt="">
        </div>
        <section id="p_top">
            <div>
                <div><img src="../assets/design_ash.png" alt=""></div>
                <div>设计</div>
                <div>红点设计大奖获得者团队，<br>符合使用情景，注重细节优化</div>
            </div>
            <div>
                <div><img src="../assets/dev_ash.png" alt=""></div>
                <div>研发</div>
                <div>拥有完善的研发团队、硬件、
                    嵌入式、电源、java、ios、
                    安卓、射频等工程师</div>
            </div>
            <div>
                <div><img src="../assets/test_ash.png" alt=""></div>
                <div>测试</div>
                <div>自主研发成套产品测试系统，
                    支持规模化生产</div>
            </div>
            <div>
                <div><img src="../assets/pro_ash.png" alt=""></div>
                <div>生产</div>
                <div>完善的质量管理体系，
                    完善质量追踪体系，具
                    备规模化生产能力</div>
            </div>
        </section>
        <div>
            <img src="../assets/dotted_line.png" alt="">
            <div>智能工业</div>
            <img src="../assets/dotted_line.png" alt="">
        </div>
        <nav id="p_top1">
            <img src="../assets/pimg.png" alt="">  <div>    <p>端到端软硬件设计及平台提供，按照客户需求完成硬件到云平台的整套设计和产品提供，解决转型客户智能化转型人才欠缺、转型投资大、周期长的痛点，做客户的研发部。帮助企业进行产品智能迭代升级，助力 企业从产品公司走向产品服务型公司。</p></div>
             <img src="../assets/pimg2.png" alt="">
        </nav>
        <div>
            <img src="../assets/dotted_line.png" alt="">
            <div>无线模块</div>
            <img src="../assets/dotted_line.png" alt="">
        </div>
        <aside>
            <p>无线方式：433MHz GFSK<br>
                无线距离：1-5km（空旷环境）<br>
                供电电压：5V<br>
                接口：SPI/UART/I2C<br>
                接收灵敏度：-120dbm<br>
                特点：无线跳频技术<br>
                应用范围：智能家居、智能楼宇、智能工业</p>
            <img src="../assets/pimg3.png" alt="">
        </aside>
        <p>联系我们sales@ethome.com</p>
    </div>
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
    background-color:#e8eaed;
}
.frame{
    width:1300px;
    margin:0 auto;
    background:#fff;
}
div.frame>div{
    text-align: center;
    color: #1c4695;
    font-size: 24px;
    line-height: 194px;
    overflow: hidden;

}
div.frame>div>img:first-child{
    float:left;
    padding-top: 96px;
    padding-left: 40px;
}
div.frame>div>div:nth-child(2){
    float:left;
    padding-left:59px;
}
div.frame>div>img:last-child{
    float:right;  
    padding-top: 96px;
    padding-left: 40px;
}
.tab_border{
    border:1px solid #1c4695;
    margin:0 auto;
    width:1200px;
    height:188px;
    text-align:center;
}
table.tab_border>tr>td{
    vertical-align:center;
}
 div.frame>table>tbody>tr{
    text-align:center;
}   
.td_rightb{
    border-right:1px solid #1c4695;
}
.weight{
    font-size: 20px;
    color: #1c4695;
    font-weight: blod;
}
.td_font{
    font-size:18px;
    color:#0a0a0a;
}
#p_top{
    width:1000px;
    height:306px;
    margin:0 auto;padding:0;
    display:flex;
    justify-content: space-between;
    /* margin:0 150px; */
}
#p_top>div{
    text-align:center;
    width:20%;
}
#p_top>div>div:nth-child(2){
    font-size:24px;
    color:#666;
    padding-bottom:40px;
}
#p_top1{
    position:relative;
    width:1300px;
    height:510px;
    margin:0 auto;
}
#p_top1>img{
    display:block;
    position:absolute;
    top:0px;left:220px;
}
#p_top1>div{
    width:600px;height:217px;
    position:absolute;
    top:0px;right:20px;
}
#p_top1>div>p{
    height:117px;width:600px;
    font-size:14px;
    padding-top:100px;
    line-height:30px;
}
#p_top1>img:last-child{
    display:block;
    position:absolute;
    top:193px;
    left:500px;
}
aside{
    width:1300px;
    height:276px;
}
aside>p{
    float:left;
    font-size: 14px;
    color: #0a0a0a;
    line-height: 30px;
    width: 500px;
    padding-left: 120px;
    padding-top: 40px;
}
aside>img{
    float:right;
    margin-right:220px;
}
aside+p{
    font-size: 24px;
    color: #4284f4;
    line-height: 120px;
    text-align: center;
}
</style>