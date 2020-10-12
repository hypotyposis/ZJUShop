<template>
<div>
  <body>
  <div class="gifttop inewscomtop">
    <p><em>推荐商品</em></p>
  </div>

  <div class="runlist">
    <div class="movead">
      <a onmouseup="ISL_StopUp_1()" class="LeftBotton" onmousedown="ISL_GoUp_1()" onmouseout="ISL_StopUp_1()" href="/"></a>
      <div class=pcont id=ISL_Cont_1>
        <div class=ScrCont>
          <div id=List1_1>

            <div class="pl" v-for="(item,index) in items">
              <a href="#" class="picbox"@click="goDetail"><img :src=item.gos_keys[0] width="208" height="124"  class="" /></a>
<!--              <p class="aaa">{{item.gos_keys[0]}}</p>-->
              <p class="pl1"><a href="#" class="a1"@click="goDetail">{{item.product_name}}</a> <a class="a2" href="/"title="详情">[详情]</a></p>
              <p class="pl2">店铺：<span>{{item.store.store_name}}</span>  评价：<strong>五星</strong></p>
            </div>

            <div class="clear"></div>


          </div>
          <div id=List2_1></div></div></div><a onmouseup="ISL_StopDown_1()" class="RightBotton" onmousedown="ISL_GoDown_1()" onmouseout="ISL_StopDown_1()" href="/"></a>
    </div>
  </div>

  <div class="xu2">

  </div>

  <div class="contb">
    <div class="lipin">
      <div class="inewscomtop lipintop">
        <p><em>分类专区</em></p>
      </div>
      <div class="giftlist">
        <div v-for="(item, index) in cat">
        <ul>
          <li><p><a herf = "/detail" @click="catdetail(item.catalog_id)">{{item.catalog_value}}</a></p></li>
        </ul>
        </div>
      </div>

    </div>
    <div class="honor">
      <div class="inewscomtop lipintop">
        <p><em>限时抢购</em></p>
      </div>

      <div class="honorlist">
        <ul  >
          <li v-for="(item,index) in items2">
            <a href="#">
              <img :src=item.gos_keys[0] width="150" height="111" class="PicAuto" />
            </a>
            <p>
              <a href="#">{{item.product_name}}</a>
            </p>
          </li>

          <div class="clear"></div>
        </ul>
      </div>

    </div>
    <div class="clear"></div>
  </div>

  <div class="xu2">

  </div>

<!--  <div class="footnavbg">-->
<!--    <div class="frilink">-->
<!--      <p>友情链接：-->
<!--        <a href="#" target="_blank">浙江大学计算机学院</a>-->
<!--        <a href="#" title="百度" target="_blank">百度</a>-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->


  </body>
</div>
</template>

<script>
    export default {
      name: "Index",

      methods:{
        catdetail: function(key){
          this.$router.push({path:"/catalog",query:{words:key}});
          this.searchKey="";
          this.$router.go(0);
        }
      },
      data() {
          return {
            items:[],
            catalogs:[],
            items2:[],
            spuId:"31e725b7-7553-11e9-adc4-b88687e76eb9"
          }
        },

        created() {
          let url = "http://10.214.213.43:9000/product/random?size=4";
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
              this.items = res.data.spus;
              // this.spuId="31e725b7-7553-11e9-adc4-b88687e76eb9";
            }
            else
            {

            }
          })
          let url2 = "http://10.214.213.43:9000/product/random?size=10";
          fetch(url2,{
            method : "GET",
            mode : "cors",
            credentials:"include",
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res =>res.json()).then(res=>{
            if(res.code === 200)
            {
              this.items2 = res.data.spus;
            }
            else
            {

            }
          })

          let uurl = "http://10.214.213.43:9000/product/catalogInfo";
          fetch(uurl,{
            method : "GET",
            mode : "cors",
            credentials:"include",
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res =>res.json()).then(res=>{
            if(res.code === 200)
            {
              this.cat = res.data.catalogs;
            }
            else
            {

            }
          })
        },
      methods:{
        goDetail:function (spuId) {
          // this.$router.push({path:'/detail',query:{spuId:this.spuId}})
          this.$router.push('/detail/'+spuId);
        },
      }
    }

</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote
  { margin: 0; padding: 0;/* overflow-x: hidden;*/ font-size: 12px; }
  html button::-moz-focus-inner{ border-color:transparent!important; }
  input, button, textarea,select, optgroup, option { font-family: inherit; font-size: 100%; font-style: inherit; font-weight: inherit;}
  ul, li, dl, dt, dd, ol { display: block; list-style: none; }
  fieldset, img { border: 0; }
  iframe { background-image: none; }
  hr{ border:0 #ccc solid; border-top-width: 1px; clear: both; height: 0; }
  h1,h2,h3,h4,h5,h6,margin {margin:0;padding:0;}
  .clear { clear:both; }
  .input 输入{ line-height: 15px; height: 15px; border: 1px solid #999999; padding: 2px; }
  .checkbox 复选框{ line-height:13px; height: 13px; width:13px; padding:0px; margin: 0px; }
  .indent 缩进 { text-indent: 24px;}

  a {text-decoration:none;}
  a:hover {text-decoration:none;}
  center {padding:25px 0;}

  .fenlei
  {
    font:14px/36px 微软雅黑
  }



  body {}

  .ul_change_a2 li{display: -moz-inline-stack;display:inline-block;*display:inline;*zoom:1;}
  .ul_change_a2 span{display: -moz-inline-stack;display:inline-block;*display:inline;*zoom:1;font-size:0.8em;width:24px;height:20px;margin-right:2px;border:0px solid #999;background:url(images/dian1.png) no-repeat;filter:alpha(opacity=85);opacity:0.85;cursor:hand;cursor:pointer;}

  .nav ul {padding-top:12px;}
  .nav ul li {width:100px;height:36px;float:left;margin-right:11px;}
  .nav ul li a {display:block;width:100px;height:36px;background:none;text-align:center;font:14px/36px 微软雅黑;text-shadow:0 0 2px #999;color:#ff5000;}
  .nav ul li a:hover {background:url(images/navhober_03.png) no-repeat;color:#f3d49d;}

  .ul_change_a22 li{display: -moz-inline-stack;display:inline-block;*display:inline;*zoom:1;}
  .ul_change_a22 span{display: -moz-inline-stack;display:inline-block;*display:inline;*zoom:1;font-size:12px;margin-left:2px;border:0px solid #999;background:#000;filter:alpha(opacity=7);opacity:0.7;cursor:hand;cursor:pointer;padding:3px 10px;color:#fff;}

  .contatop a {background:#c18282;font:12px/14px 宋体;color:#fff;top:38px;left:168px;position:absolute;padding:0 1px;}
  .contatop a:hover {background:#fff;color:#c18282;}
  .inewscomtop {height:30px;width:600px;background:url(images/bgxie_24.png) bottom repeat-x;}
  .inewscomtop p {float:left;width:125px;height:30px;background:url(images/yuan_23.png) no-repeat;display:inline;}
  .inewscomtop p em {padding-left:30px;font:normal bold 20px/28px 微软雅黑;color:#fff;}
  .inewscomtop span {float:right;font:14px/30px 微软雅黑;color:#0c0c0c;}
  .inewscomtop span a {background:#fff;color:#000000;padding: 0 2px;}
  .inewscomtop span a:hover {background:none;color:#000000;}
  .news1st b {display:block;width:160px;height:100px;padding:4px;border:solid 1px #e8c2c1;border-radius:4px;float:left;}
  .news1right h2 {font:bold 14px/26px 宋体;color:#dd5553;padding:0 0 2px 0;}
  .news1right h2 a {color:#dd5553;}
  .news1right h2 a:hover {color:#f00;}
  .news1right p {font:12px/26px 宋体;color:#666;}
  .inewslist ul {}
  .inewslist ul li {width:600px;height:38px;}
  .inewslist ul li p {float:left;display:inline;background:url(images/ico1.jpg) left center no-repeat;margin:0 0 0 15px;font:12px/38px 宋体;padding:0 0 0 25px;}
  .inewslist ul li p a {color:#333333;}
  .inewslist ul li p a:hover {color:#dd5453;}
  .inewslist ul li span {float:right;font:12px/38px 宋体;color:#666666;padding-right:15px;}
  .gifttop {width:980px;height:30px;margin:40px auto 0;}
  .runlist {width:980px;height:270px;margin:30px auto 0;}

  .movead {zoom:1; width:1002px; margin:0 auto;position:relative;z-index:11}
  .movead .pcont { float:left;  width:912px;height:325px; overflow:hidden; margin:0 6px 0 5px; padding:0px 6px 0 0;}
  .movead .ScrCont {width: 32766px; zoom: 1}
  .movead #List1_1 {FLOAT: left}
  .movead #List2_1 {FLOAT: left}
  .movead .LeftBotton { background:url(images/leftarr.png) no-repeat center; float: left; width: 26px; height:181px;}
  .movead .RightBotton {background:url(images/rightarr.png) no-repeat center; float: left; width: 26px; height:181px;}
  .movead .pl  {width:210px;height:305px;margin:0 10px;}
  .movead .pl img {display: block; CURSOR: pointer; width:208px; height:208px; float:left;border:1px solid #dbdbdb;border-radius:3px;padding:0px;}
  .picbox {display:block;width:208px;height:208px;display:block;}
  .movead .pl {float:left; width:210px; height:275px;overflow:hidden;}
  .pl1 {background:url(images/ico2_44.jpg) left center no-repeat;font:12px/22px 宋体;margin:0 0 0 7px;padding:0 0 0 15px;margin-top:6px;}
  .pl1 .a1 {color:#666;}
  .pl1 .a2 {color:#ff1e00;}
  .pl1 a:hover {color:#ff1e00;}
  .pl2 {font:12px/20px 宋体;color:#854239;padding:0 0 0 22px;}
  .pl2 span {color:#555;}
  .pl2 strong {color:#ff1e00;}
  .xu2 {width:980px;height:19px;background:url(images/xu2_54.jpg) repeat-x;margin:29px auto 40px;}
  .contb {width:980px;height:285px;margin:0 auto;}
  .lipin {width:165px;height:285px;float:left;padding-right:25px;border-right:solid 1px #e5e5e5;}
  .lipintop {width:100%;}
  .lipintop span {padding-right:120px;}
  .giftlist {width:455px;padding-left:10px;padding-top:10px;}
  .giftlist ul {}
  .giftlist ul li {height:39px;}
  .giftlist ul li p {float:left;display:inline;background:url(images/ico2_58.jpg) left center no-repeat;font:12px/39px 宋体;padding:0 0 0 15px;}
  .giftlist ul li p a {color:#888;}
  .giftlist ul li p a:hover {color:#ff1e00;}
  .giftlist li span {float:right;font:12px/39px 宋体;color:#999;}
  .honor {float:right;width:765px;}
  .honorlist {width:765px;overflow:hidden;height:255px;}
  .honorlist ul {width:800px;padding-top:18px;}
  .honorlist ul li {width:150px;margin-right:8px;margin-bottom:12px;height:111px;float:left;position:relative;}
  .honorlist ul li p {position:absolute;bottom:0;left:0;background:#000;filter:alpha(opacity = 60); opacity:0.6;text-align:center;font:14px/28px 宋体;width:150px;}
  .honorlist ul li p a {color:#fff;}
  .honorlist ul li p a:hover {color:#ff1e00;}
  .frilink p {font:12px/65px 宋体;color:#a60604;padding:0 15px;}
  .frilink p a {color:#a60604;margin:0 5px;}
  .frilink a:hover {color:#ff1e00;}
  .footer p {font:12px/12px 宋体;color:#fce1a5;}
  .footnav2 a {color:#fce1a5;margin-right:23px;}
  .footnav2 a:hover {color:#ff0;}
  .footer a {color:#fce1a5;}
  .footer a:hover {color:#ff0;}

  .slcomtop b {float:right;width:38px;height:16px;display:block;float:right;margin-top:14px;overflow:hidden;}
  .sidenav ul {}
  .sidenav ul li {text-align:center;font:14px/33px 宋体;min-height:33px;_height:33px;margin-bottom:10px;}
  .sidenav ul li a {color:#424242;text-align:center;font:14px/33px 宋体;height:33px;margin-bottom:10px;display:block;width:245px;background:url(images/sidenav.jpg) no-repeat;}
  .sidenav ul li a:hover {color:#fff;background:url(images/sidenavhover_03.jpg) no-repeat;}

  .sidenav ul li dl {width:245px;height:auto;padding:0 0;background:url(../assets/img/logo.png) #ebeaea top repeat-x;border-bottom:solid 1px #b3b3b2;display:none;}
  .sidenav ul li dl dd {width:245px;height:36px;padding:0;text-align:center;background:none;}
  .sidenav ul li dl dd a {color:#cc534c;background:none;}
  .sidenav ul li dl dd a:hover {color:#555;background:none;}
  .snlist ul {}
  .snlist ul li {height:34px;border-bottom:dashed 1px #ccc;}
  .snlist ul li p {background:url(images/ico2_58.jpg) left center no-repeat;font:12px/34px 宋体;padding:0 0 0 15px;}
  .snlist ul li p a {color:#888;}
  .snlist ul li p a:hover {color:#dc5554;}

  .conta3 a {background:#c18282;font:12px/14px 宋体;color:#fff;top:38px;left:150px;position:absolute;padding:0 1px;display:block;}
  .conta3 a:hover {background:#fff;color:#c18282;}

  .srtop i {font:normal normal 12px/14px 宋体;display:block;float:right;margin-top:16px;padding:0 1px;color:#fff;background:#cd534b;}
  .srtop a {color:#fff;}
  .srtop a:hover {color:#ff0;}
  .piclist ul {}
  .piclist ul li {width:210px;height:155px;float:left;margin-right:21px;margin-top:20px;}
  .picboxer img {display:block;border:solid 0px #ccc;border-radius:3px;}
  .picname a {margin-left:25px;font:12px/25px 宋体;color:#555;}
  .picname a:hover {color:#f00;}
  .pic_wor ul {}
  .pic_wor ul li {width:700px;min-height:125px;_height:125px;margin:20px 0 0;}
  .pic_wor ul li b {display:block;width:200px;height:115px;float:left;padding:4px;border:solid 1px #dbdada;border-radius:5px;}
  .picwoR h2 {font:normal normal 12px/23px 宋体;background:url(images/ico4.jpg) #ffdedc left center no-repeat;height:23px;border:solid 1px #eeb9b6;}
  .picwoR h2 a {margin-left:16px;color:#880c0c;}
  .picwoR h2 a:hover {color:#ff0000;}
  .picwoR h2 span {float:right;padding-right:10px;}
  .picwoR p {font:12px/28px 宋体;color:#666;padding-top:10px;}
  .newslist ul {}
  .newslist ul li {width:700px;height:26px;border:solid 1px #fff;}
  .newslist ul li p {float:left;display:inline;font:14px/26px 宋体;color:#757575;padding:0 0 0 12px;margin:0 0 0 17px;background:url(images/ico6_33.jpg) left center no-repeat;}
  .newslist ul li p a {color:#666;}
  .newslist ul li span {float:right;font:14px/26px 宋体;color:#666;padding-right:10px;}

  .title h2 {font:normal 18px/24px 微软雅黑;text-align:center;padding:20px 0 11px 0;color:#aa0000;border-bottom:solid 0px #b9c3d0;}
  .title h4 {font:normal 12px/14px 宋体;text-align:center;padding:8px 0 15px;color:#888888;}

  .pa em {float:left;padding:0 10px;font-style:normal;margin-right:10px;}
  .paging a {color:#555555;}
  .paging a:hover {color:#cc534c;text-decoration:none;}


  .select select{margin:5px auto;width:100px;}
  .searchBar span{ float:right; margin-top:6px;}
  .searchBar span a{ color:#666; margin-right:8px;}
  .searchBar span a:hover{ color:#ef9b11;}
  .searchBar .text input{width:214px; padding-top:3px; height:17px; border:1px solid #b7d1eb;}
  div.selectbox-wrapper ul li {text-align:center;padding-right:3px;padding-bottom:3px;width:90px;cursor:pointer;line-height: 20px;padding-top: 3px;font-size:14px;font-family:'微软雅黑';color:#666;}

  /* page
  -----------------------------------------------------------------------------------------------------*/
  .pager-taglib span{ float:left;}
  .pager-taglib a { line-height:27px; width:26px; height:27px; display:block; float:left; color:#666666}
  .pager-taglib a:hover { width:26px; height:27px; display:block; color:#801e13; }

  /* book
  -----------------------------------------------------------------------------------------------------*/

  .message li{ width:500px;height:40px; float:left; margin:0px; padding:0px; sor:pointer;}
  .message li input{ height:20px; line-height:20px; width:150px; border:1px solid #ccc;}
  .message li.contentb textarea{ width:370px; height:120px;}
  .message li p.message_yzminput input{ width:80px;}

  /* hr */
  .hr td{ border:1px #CCC solid;}
  .hr a{ color:#333;}
  .hr a:hover{ color:#de0303;}
  .rightcon h1{margin:0;font:18px/50px '微软雅黑';width:100%;text-align:center;color:#2e2e2e;}

  *:focus {outline: none;}

  .newimg
  {
    max-width: 208px;
    max-height:208px;
  }
</style>
