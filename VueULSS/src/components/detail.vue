<template>
  <div>
  <div class="shopdetails">
    <!-------放大镜-------->
    <div id="leftbox">
      <div id="showbox">
        <a href="#" class="mainImg"><img :src=this.image width="400" height="550"  class="" /></a>
        <p class="aaa"><span>{{this.spuId}}</span>jaskdhasjdg</p>
<!--        <img src="../images/shopdetail/img02.png" width="400" height="550" />-->
<!--        <img src="../images/shopdetail/img03.png" width="400" height="550" />-->
<!--        <img src="../images/shopdetail/img04.png" width="400" height="550" />-->
<!--        <img src="../images/shopdetail/img05.png" width="400" height="400" />-->
<!--        <img src="../images/shopdetail/img01.png" width="400" height="400" />-->

      </div><!--展示图片盒子-->
<!--      <div id="showsum"></div>&lt;!&ndash;展示图片里边&ndash;&gt;-->
<!--      <p class="showpage">-->
<!--        <a href="javascript:void(0);" id="showlast"> < </a>-->
<!--        <a href="javascript:void(0);" id="shownext"> > </a>-->
<!--      </p>-->

    </div>
    <!----中间----->

    <div class="centerbox">
<!--      <img src=this.image width="400" height="500"/>-->
      <p class="imgname">{{this.spuName}}</p>
      <p class="Aprice">价格：<samp>￥89.00</samp></p>
      <p class="price">促销价：<samp>￥49.00</samp></p>
      <p class="youhui">店铺：<samp>{{this.storename}}</samp></p>
      <p class="kefu">客服：</p>
      <p class="type"><span>{{skus[0].spec_name}}</span> : </p>
      <div class="props" v-for="prop in skus">
      <ul>
<!--        <p class="kuanshi"><span>{{prop.spec_name}}</span>：</p>-->
        <div class="propValue" v-for="propValue in prop.specificationList">
          <ul>
            <li class="no  shopimg"><a href="#" title="imgicon"><img src="../images/shopdetail/tell04.png" width="35"><p><spam>{{propValue.spec_concrete_name}}</spam></p></a></li>
<!--        <li class="shopimg"><a href="#" title="铁塔套装"><img src="../images/shopdetail/kuanshi02.jpg" width="45"></a></li>-->
<!--        <li class="shopimg"><a href="#" title="创意胡子"><img src="../images/shopdetail/kuanshi03.jpg" width="45"></a></li>-->
<!--        <li class="shopimg"><a href="#" title="四色小猫"><img src="../images/shopdetail/kuanshi04.jpg" width="45"></a></li>-->
          </ul>
        </div>
      </ul>
      </div>
      <div class="clear"></div>
<!--      <p class="chima">尺码：</p>-->
      <p class="kucun">当前库存：<span>{{this.stock}}</span></p>
      <p class="deliveryAddr">发货地 : <span>{{this.address}}</span></p>
      <p class="buy"><a href="#" id="firstbuy">立即购买</a><a href="#" class="cart" @click="goCart">加入购物车</a></p>
      <div class="clear"></div>
      <div class="fenx"><a href="#"><img src="../images/shopdetail/tell07.png"></a></div>
      <p class="fuwu">服务承诺：</p>
      <p class="pay">支付方式：</p>
    </div>

  </div>
  <!-----商品详情部分结束------->

  <!-----商品详情评价部分------->
  <div class="evaluate">

    <div class="classify">
      <div class="shopim">
        <p class="name">{{this.storename}}<img src="../images/shopdetail/tell01.png" width="22" height="22"></p>
        <img src="../images/shopdetail/tellbottom.png">
        <p class="sc"><a href="#">收藏店铺</a></p>
        <p class="sc"><a href="#">进入店铺</a></p>
        <div class="search">
          <input class="left" type="text" />
          <input class="right" type="button" style=" cursor:pointer;" value=""/>
        </div>
      </div>
      <div class="shopfl">
        <p class="name">本店分类</p>
        <ul>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">全部商品</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">木质商品</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">石制商品</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">陶制商品</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">家居厨房</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">欧式混搭</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">桌面摆件</a></li>
          <li><a href="#"><img src="../images/shopdetail/tell02.png" width="10" height="10">书香文房</a></li>
        </ul>
      </div>
      <div class="shopsee">
        <p class="name">看了又看</p>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see.jpg" width="170" height="245">
          <p>手绘陶瓷茶壶</p>
          <p>商城价:168元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see1.jpg" width="170" height="245">
          <p>茶具特价紫砂</p>
          <p>商城价:￥234元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see2.jpg" width="170" height="245">
          <p>创意爱家杯盖</p>
          <p>商城价:￥38元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see03.png" width="170" height="245">
          <p>木质棋盘</p>
          <p>商城价:￥158元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see04.png" width="170" height="245">
          <p>北欧风创意椅子</p>
          <p>商城价:￥178元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see5.jpg" width="170" height="245">
          <p>木质简约衣架</p>
          <p>商城价:￥68元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see07.png" width="170" height="245">
          <p>龙猫微观景观小夜灯</p>
          <p>商城价:￥258元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see06.png" width="170" height="245">
          <p>火树银花灯</p>
          <p>商城价:￥858元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/content_04.jpg" width="170" height="245">
          <p>木质烘脚器</p>
          <p>商城价:￥108元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see08.png" width="170" height="245">
          <p>个性实木壁灯</p>
          <p>商城价:￥68元</p>
        </a>
        <a href="#" class="ex01">
          <img src="../images/shopdetail/see09.png" width="170" height="245">
          <p>创意马克杯</p>
          <p>商城价:￥58元</p>
        </a>

      </div>


    </div>


    <div class="tabbedPanels">
      <ul class="tabs">
        <li><a href="#panel01">商品详情</a></li>
        <li><a href="#panel02" class="active">累计评价</a></li>
        <li><a href="#panel03">商品推荐</a></li>
      </ul>

      <!--<div class="panelContainer">
        <div class="panel" id="panel01">
          <p class="sell">商品描述</p>
          <p>创意造型 浓浓文艺气息 闲暇时光 与好友分享</p>
          <p></p>
          <p class="sell">整体款式</p>
          <img src="../images/shopdetail/evaluate101.jpg">
          <img src="../images/shopdetail/evaluate102.jpg">
          <img src="../images/shopdetail/evaluate103.jpg">
          <img src="../images/shopdetail/evaluate104.jpg">
          <img src="../images/shopdetail/evaluate105.jpg">
          <img src="../images/shopdetail/evaluate106.jpg">
          <div class="clear"></div>
        </div>-->

        <div class="panel" id="panel02">
          <p class="sell">买家评价</p>
          <img src="../images/shopdetail/detail101.png">
          <p class="judge">全部评价(20)<span>晒图(13)</span></p>
          <div class="comments" v-for="comment in comms">
          <div class="judge01">
<!--            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>-->
            <div class="write">
              <p class="idname">{{comment.buyer_name}}</p>
              <p class="0001">{{comment.content}}</p>
<!--              <p class="which">颜色:创意胡子</p>-->
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail105.jpg" width="40px" height="40px">

            </div>
          </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">席***2</p>
              <p>质量很好，快递也很快，拆包裹很艰难～～～包得太好了，没有碎。厚度也可以。值得购买！</p>
              <p class="which">颜色:熊猫套装</p>
              <img src="../images/shopdetail/detail106.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail107.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">怒***4</p>
              <p>特别好，必须赞👍，质量好，很漂亮，快递也好快的。还挺优惠。看图吧。</p>
              <p class="which">颜色:熊猫套装</p>
              <img src="../images/shopdetail/detail108.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail109.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail110.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">毛***字</p>
              <p>很精致，用起来很满意，做工也非常的细致，用着很满意哦，非常值得购买</p>
              <p class="which">颜色:创意胡子</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">轻***4</p>
              <p>店家服务太贴心了，没有破碎，包装非常严实</p>
              <p class="which">颜色:铁塔套装</p>
              <img src="../images/shopdetail/detail106.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail107.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">里***2</p>
              <p>不错，很可爱包装很好，赶快下手吧</p>
              <p class="which">颜色:四色小猫</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">啥***2</p>
              <p>一直想要咖啡杯，这次总算拿到手了。很不错的陶瓷杯。图案也很可爱。实物与图一样。</p>
              <p class="which">颜色:熊猫套装</p>
              <img src="../images/shopdetail/detail108.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail110.jpg" width="40px" height="40px">
            </div>
          </div>



          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">胡***2</p>
              <p>宝贝很实惠 拆包装的时候很惊讶 竟然包了四层！完好无损</p>
              <p class="which">颜色:四色小猫</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">落***1</p>
              <p>杯子很可爱！就是有两三个杯子后面的小图案有一丢丢斜下来，不过没多大关系，其他的还好。有一点真的特别特别好的就是😂包裹的非常非常非常严实，简直就是里三层外三层！杯子完好无损，赠送的刷子也包装的很好😂让我第一眼以为那是一个棉花糖hhh</p>
              <p class="which">颜色:创意胡子</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail105.jpg" width="40px" height="40px">

            </div>
          </div>
          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">轻***4</p>
              <p>店家服务太贴心了，没有破碎，包装非常严实</p>
              <p class="which">颜色:铁塔套装</p>
              <img src="../images/shopdetail/detail106.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail107.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">里***2</p>
              <p>不错，很可爱包装很好，赶快下手吧</p>
              <p class="which">颜色:四色小猫</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
            </div>
          </div>
          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">怒***4</p>
              <p>特别好，必须赞👍，质量好，很漂亮，快递也好快的。还挺优惠。看图吧。</p>
              <p class="which">颜色:熊猫套装</p>
              <img src="../images/shopdetail/detail108.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail109.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail110.jpg" width="40px" height="40px">
            </div>
          </div>
          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">里***2</p>
              <p>不错，很可爱包装很好，赶快下手吧</p>
              <p class="which">颜色:四色小猫</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">啥***2</p>
              <p>一直想要咖啡杯，这次总算拿到手了。很不错的陶瓷杯。图案也很可爱。实物与图一样。</p>
              <p class="which">颜色:熊猫套装</p>
              <img src="../images/shopdetail/detail108.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail110.jpg" width="40px" height="40px">
            </div>
          </div>
          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">毛***字</p>
              <p>很精致，用起来很满意，做工也非常的细致，用着很满意哦，非常值得购买</p>
              <p class="which">颜色:创意胡子</p>
              <img src="../images/shopdetail/detail103.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail104.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="judge01">
            <div class="idimg"><img src="../images/shopdetail/detail102.png"></div>
            <div class="write">
              <p class="idname">轻***4</p>
              <p>店家服务太贴心了，没有破碎，包装非常严实</p>
              <p class="which">颜色:铁塔套装</p>
              <img src="../images/shopdetail/detail106.jpg" width="40px" height="40px">
              <img src="../images/shopdetail/detail107.jpg" width="40px" height="40px">
            </div>
          </div>

          <div class="clear"></div>
        </div>

      </div>

    </div>

  </div>
  <!-----商品详情评价部结束分------->
</template>

<script>
    export default {
        name: "detail",
        data(){
          return{
            spuId:this.$route.params.spuId,
            spuName:"",
            stock:"",
            image:"",
            address:"",
            storename:"",
            skus:[],
            props:[],
            comms:[],
          }
        },
        created() {
          // this.spuId=this.$router.params.spuId,
          let url = "http://10.214.213.43:9000/product/productInfo?spuId="+this.spuId;
          // let url = "http://10.214.213.43:9000/product/productInfo?spuId=31e725b7-7553-11e9-adc4-b88687e76eb9";
          fetch(url,{
            method : "GET",
            mode : "cors",
            credentials:"include",
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res =>res.json()).then(res=>{
            if(res.code === 200)
            {
              this.skus = res.data.product.spec_catalog;
              this.product=res.data.product;
              this.spuName=res.data.product.product_name;
              this.stock=res.data.product.volume;
              this.image=res.data.product.gos_keys[0];
              this.address=res.data.product.delivery_address;
              this.storename=res.data.product.store.store_name;
            }
            else
            {

            }
          })

          let url2="http://10.214.213.43:9000/service-comment/getComments?spu_id=31e725b7-7553-11e9-adc4-b88687e76eb9";
          fetch(url2,{
            method:"GET",
            mode:"cors",
            credentials:"include",
            headers:{
              'Content-Type':'application/json'
            }

          }).then(res =>res.json()).then(res=>{
            if(res.code ===200)
            {
              this.comms=res.data.comments;
            }
            else
            {

            }
          })

        },

      methods:{
        goCart:function () {
          this.$router.push({path:'/cart'})
        }
      },
      // mounted(){
      //     this.spuId=this.$router.query.spuId;
      // }

    }

</script>

<style scoped>
  *{
    margin:0; padding:0;
  }
  body{
    font-size:12px; color:#333;
    margin:0; padding:0;
  }
  a{
    text-decoration:none;
    color:#333;
    font-size:12px;
  }
  ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,form,p{
    padding:0; margin:0;
    list-style:none;
  }
  img{ border:0px;}
  .clear{
    clear:both;
  }

  /*header*/
  .header{
    height:184px;
    background:url(../images/index_img/backmenuimg.jpg) repeat;
    margin:0 auto;
  }
  .header .top{
    height:32px;
    background:url(../images/index_img/header_bg.jpg) repeat-x;
    margin:0 auto;
  }
  .header .top1{
    width:340px;
    height:31px;
    float:right;
  }
  .header .top a {
    height:31px;
    line-height:31px;
    float:left;
    margin:0 2px;
    color:#7f7d7c;
  }
  .header .top a:hover{
    color:#900;

  }
  .header .top a img{
    height:23px;
    margin:4px 2px 2px 0 ;
    float:left;
  }
  /*logo_search*/
  .header .logobg{
    height:111px;
    background:url(../images/index_img/backlogoimg01.jpg)  center no-repeat;
  }
  .header .center{
    width:1200px;
    margin:0 auto;
    height:112px;
    position:relative;
  }
  .header .center .logo{
    margin-top:19px;
    margin-left:120px;
    float:left;
  }
  #searchForm{
    position:absolute;
    top:30px;
    right:100px;
    width:350px;
    padding:3px;
    background:#9EFF3E;
  }
  #search_btn{
    width:90px;
    height:36px;
    background-color:transparent;
    border:none;
    font-size:18px;
    font-weight:bold;
    color:#FFF;
    cursor:pointer;/*设置光标*/
  }
  /*导航部分*/
  .header .bottom{
    width:1200px; height:39px;
    margin:0 auto;
    line-height:39px;
    background-image:url(../images/index_img/backmenuimg.jpg);
    padding:0;
    position:relative;
  }
  .header .bottom .nav{
    position:absolute;
    top:0px;
    width:990px; height:39px;
    margin:0 auto;
    margin-left:210px;
    float:left;
    display:inline;
  }
  .header .bottom .nav a{
    width:100px; height:39px;
    line-height:39px;
    color:#fff;
    margin:0 10px;
    font-size:16px;
    font-weight:bold;
    float:left;
    text-align:center;
  }
  .header .bottom .nav a.now{
    width:100px; height:39px;
    background:#9ada62;
  }
  .header .bottom .nav a:hover{
    width:100px; height:39px;
    background:#9ada62;
  }
  .header .bottom .menu{
    width:206px;
    height:39px;
    position:absolute;
    top:0;
    left:0;
    background-image:url(../images/index_img/backmenuimg.jpg);

  }
  .header .bottom .menu a{
    color:#fff;
    font-size:16px;
    font-weight:bold;
    line-height:39px;
    padding-left:20px;
  }
  /*商品详情部分*/
  .shopdetails{
    width:1200px;
    height:700px;
    margin:0 auto;
    margin-top:20px;
    position:relative;

  }
  /*放大镜*/
  #leftbox{
    width:400px;
    z-index:999;
    position:absolute;
  }
  #showbox { background:#eee;}
  #showbox span {
    background:url(../images/shopdetail/whitebg.png) repeat;
  }
  #showsum {
    left:25px;
    margin-top:10px;
  }
  #showsum span {
    border:1px solid #ddd;
  }
  #showsum span.sel {
    border:1px solid #f60;
  }

  .showpage {
    width:400px;
    position:relative;
  }
  .showpage a {
    display:block; width:15px;
    border:1px solid #ddd;
    height:60px; line-height:60px;
    background:#eee;
    text-align:center;
    font-size:18px;
    position:absolute;
    left:0; top:-62px;
    text-decoration:none;
    color:#999;}
  .showpage a#shownext {
    left:auto; right:0;
  }
  .showpage a:hover {
    background:#ccc;
    color:#777;}

  /*中间*/

  .centerbox{
    width:580px;
    height:575px;
    position:absolute;
    top:0px;
    left:420px;
    z-index:1;
  }
  .centerbox .imgname{
    font-size:24px;
    color:#000;
    font-weight:bold;
    width:580px;
    height:40px;
    font-family:Microsoft YaHei,arial;
    margin-bottom:10px;
  }
  .centerbox p,.centerbox samp{
    width:580px;
    height:33px;
    font-size:12px;
    line-height:33px;
    color:#666;
    font-family:"微软雅黑";
    padding-left:10px;

  }
  .centerbox .Aprice, .price, .youhui{
    background:rgba(232,232,232,0.5);
  }
  .centerbox .Aprice samp{
    font-size:14px;
    text-decoration:line-through;
    font-family:"华文仿宋";
  }
  .centerbox .price samp{
    color:#D00;
    font-size:20px;
    font-weight:bold;
  }
  .centerbox .youhui samp{
    color:#000;
    font-weight:100;
  }
  .centerbox .kefu{
    margin-top:10px;
    margin-left:10px;
    width:150px;
    background-image:url(../images/shopdetail/tell03.png);
    background-position:right;
    background-repeat:no-repeat;
  }
  .centerbox ul{
    margin-left:10px;
    margin-top:15px;
  }
  .centerbox ul li{
    float:left;
    width:50px;
    height:50px;
    margin-left:10px;
  }
  .centerbox .kuanshi{
    color:#666;
  }
  .centerbox .shopimg{
    width:49px;height:49px;
  }
  .centerbox .shopimg img{
    margin:2px;
  }
  .centerbox .now{
    background-color:#F90;
  }
  .centerbox .chima{
       width:110px;
       height:20px;
       margin-left:10px;
       margin-top:10px;
     }

  .centerbox .kucun{
    width:110px;
    height:40px;
    margin-left:10px;
    margin-top:10px;
  }

  .centerbox .buy{
    margin-left:30px;
    margin-top:25px;
  }
  .centerbox .buy a{

    display:block;
    width:200px;
    height:50px;
    color:#000;
    border:1px solid #ccc;
    float:left;
    font-size:16px;
    font-weight:bold;
    font-family:Microsoft YaHei,arial;
    margin-left:10px;
    background-color:#fff;
    text-align:center;
    line-height:50px;
  }
  .centerbox .fenx{
    width:200px;
    margin-left:50px;
    margin-top:20px;
  }
  .centerbox .fuwu{
    width:500px;
    height:35px;
    margin-left:10px;
    background-image:url(../images/shopdetail/tell08.png);
    background-position:right;
    background-repeat:no-repeat;
    margin-top:10px;
  }
  .centerbox .pay{
    width:200px;
    height:35px;
    margin-left:10px;
    background-image:url(../images/shopdetail/tell09.png);
    background-position:right;
    background-repeat:no-repeat;
    margin-top:10px;
  }
  #firstbuy{
    background-color:#f00;
    color:#fff;
  }
  /*右边*/
  .rightbox{
    width:150px;
    height:632px;
    position:absolute;
    top:0;
    right:0;
    border-left:1px solid #ccc;
  }
  .rightbox .name{
    height:30px;width:150px;
    color:#666;
    font-size:16px;
    line-height:30px;
    text-align:left;
    font-family:"黑体";
  }
  .rightbox img{
    margin-left:20px;
  }
  .rightbox p{
    width:150px;
    height:20px;
    font-size:14px;
    text-align:center;
    line-height:20px;
  }
  /*下边商品评价及其他*/
  .evaluate{
    width:1200px;
    height:4000px;
    margin:0 auto;
    position:relative;
  }
  .classify{
    width:198px;height:1500px;
  }
  .classify .shopim {
    width:198px;height:210px;
    border:1px solid #ccc;

  }
  .classify .shopim .name{
    height:55px;width:198px;
    background:rgba(232,232,232,0.5);
    color:#000;
    font-size:14px;
    font-weight:bold;
    line-height:55px;
    text-align:center;

  }
  .classify .shopim .name img{
    margin-left:0;
    margin-bottom:-8px;
  }
  .classify .shopim img{
    margin-left:21px;
    margin-top:15px;
  }
  .classify .shopim .sc{
    float:left;
    width:67px;
    height:20px;
    border:1px solid #CCC;
    margin-left:20px;
    margin-top:10px;
    text-align:center;
    line-height:20px;

  }
  .classify .shopim .sc a{
    color:#666;
  }
  .classify .shopfl{
    width:198px;height:400px;
    border:1px solid #ccc;
    margin-top:30px;
  }
  .classify .shopfl ul li{
    width:198px;
    height:40px;
  }
  .classify .shopfl ul{
    margin-top:15px;
  }
  .classify .shopfl ul li a{
    width:150px;
    height:40px;
    font-size:12px;
    font-family:"黑体";
    margin-left:20px;
    color:#666;
    line-height:40px;
  }
  .classify .shopfl ul li a:hover{
    color:#9F3;
    font-size:16px;
  }
  .classify .shopfl .name{
    height:40px;width:198px;
    background:rgba(232,232,232,0.5);
    color:#000;
    font-size:16px;
    font-weight:bold;
    line-height:40px;
    text-align:center;

  }
  .classify .shopsee{
    width:198px;height:3330px;
    border:1px solid #ccc;
    margin-top:20px;
  }
  .classify .shopsee .name{
    height:40px;width:198px;
    background:rgba(232,232,232,0.5);
    color:#000;
    font-size:16px;
    font-weight:bold;
    line-height:40px;
    text-align:center;

  }
  .classify .shopsee a{
    width:170px;margin:0;
    margin-top:10px;
    margin-left:14px;
    border:0;

  }
  .classify .shopsee img{
    margin-top:10px;
  }

  .classify .shopsee .ex01 p{
    margin-top:0;
    width:170px;height:20px;
    margin-left:14px;
    line-height:20px;
    font-size:14px;
  }

  .search{
    width:168px; height:22px;
    background:url(../images/shopdetail/search_bg_24.gif) no-repeat;
    margin:15px 15px;
    float:left;
    display:inline;

  }
  .search .left{
    width:92px; height:22px;
    line-height:31px;
    background:url(../images/shopdetail/sea_bg.gif) no-repeat;
    border:none;
    float:left;

  }
  .search .right{
    width:68px; height:22px;
    float:left;
    background:url(../images/shopdetail/search.png) no-repeat;
    border:none;
  }
  /*tab部分*/
  .tabbedPanels {
    position:absolute;
    top:0;
    right:0;
    width: 980px;
    margin:10px auto;
    border:1px;
    solid-color:#000000;
  }

  .tabbedPanels .tabs{
    width:950px;
    height:50px;
    border-bottom:2px solid #000;
    margin-bottom:20px;
  }
  .tabbedPanels .tabs li{
    float:left;
  }
  .tabbedPanels .tabs li a{
    width:100px;
    height:40px;
    margin-bottom:10px;
    font-size:16px;
    font-weight:bold;
    margin-left:50px;
    text-decoration:none;
    color:#000;
    line-height:40px;
    text-align:center;
  }

  .tabs li a.active{
    border-bottom:3px solid #F30;

  }
  .panelContainer{
    width:950px;
    margin:0 auto;
    margin-top:10px;
  }
  .panel .sell{
    font-weight:bold;
    font-size:20px;
    color:#000;
    text-decoration:underline;}
  .panel p{
    margin-bottom:20px;
  }
  .panel img{
    margin-left:10px;
  }
  .panel .judge{
    font-size:14px;
    font-weight:bold;
    color:#000;

  }
  .panel .judge span{
    font-size:14px;
    margin-left:15px;
  }
  .panel .judge01{
    height:200px;
    position:relative;
  }
  .panel .judge01 .idimg{
    width:80px;
  }
  .panel .judge01 .write{
    position:absolute;
    top:20px;
    left:80px;
  }
  .panel .judge01 .write .which{
    color:#666;
    font-size:12px;
  }

  .panel .com{
    width:720px;
  }
  .panel .com .ex01{
    width:218px;
    margin-left:10px;
    margin-right:10px;
    margin-top:30px;
    border:solid 1px #c4c4c4;
    float:left;
  }
  .panel .com figure{
    width:218px;
    margin-left:3px;
    margin-top:3px;
    position:relative;
  }
  .panel .com img{
    margin:0;
  }
  .panel .com figcaption{
    position:absolute;
    bottom:3px;
    width:212px;
    height:40px;
    background:rgba(0,0,0,0.4);
    line-height:40px;
    text-align:center;
    font-size:12px;
    color:#fff;
  }
  .panel .com a:hover figure figcaption{
    display:block;
    width:212px;
    height:193px;
    line-height:193px;
    text-align:center;
    font-size:12px;
    color:#fff;
  }

  .panel .ex01 p{
    height:40px;
    line-height:40px;
    text-align:center;
    font-size:13px;
    margin-bottom:0;
    text-decoration:none;
    color:#836e5d;
  }
  .panel .ex01 .bottom{
    height:20px;
    line-height:20px;
    margin-bottom:5px;
    margin-top:0;
  }
  .panel .ex01 .bottom samp{
    width:146px;
    text-align:left;
    padding-left:10px;
    color:#5d9b1e;
    font-size:12px;
    float:left;
  }
  .panel .ex01 .bottom input{
    width:50px; height:20px;
    background:#78ab00;
    color:#fff;
    float:left;
    margin-left:0px;
    border:none;
    text-align:center;
  }



  /* bottom_页脚部分*/
  .backf{
    margin-top:20px;
    border-top:1px solid #ccc;
  }
  #footer{
    width:1200px;
    margin:0 auto;



  }
  #footer ul{
    float:left;
    margin-left:30px;

    width:200px;
    text-decoration:none;

  }
  #footer .sy{
    text-align:center;
    font-size:16px;
    color:#333;
    font-weight:bold;
  }
  #footer ul li{
    width:180px;
    padding:5px;
  }
  #footer ul li a,#footer ul li a:visited{
    font-size:12px;
    color:#000;
    margin-left:60px;
    text-decoration:none;

  }
  #footer ul li a:hover{
    color:#F36;
  }
  .foot{
    border-top:1px solid #333;
    background:#000;
    padding:10px;
  }

  .foot p{
    width: 1200px;
    color: #f0f0f0;
    margin:0 auto;
    line-height:1.5em;
    text-align:center;
  }
</style>
