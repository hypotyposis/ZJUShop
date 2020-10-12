<template>
    <div>
      <body>
      <form id="submitForm" name="submitForm" action="/xngzf/archives/initFangyuan.action" method="post">
        <input type="hidden" name="fyID" value="14458625716623" id="fyID"/>
        <div id="container">
          <div id="nav_links">
            <div id="page_close">
              <a href="javascript:parent.$.fancybox.close();">
              </a>
            </div>
          </div>
          <div class="ui_content">
            <table  cellspacing="0" cellpadding="0" width="100%" align="left" border="0">
              <tr>
                <td class="ui_text_rt" width="80">小区</td>
                <td class="ui_text_lt">
                  <select name="fangyuanEntity.fyXqCode" id="fyXq" class="ui_select01" onchange="getFyDhListByFyXqCode();">
                    <option value="">--请选择--</option>
                    <option value="6" selected="selected">瑞景河畔</option>
                    <option value="77">蔚蓝小区</option>
                    <option value="83">和盛园小区</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">栋号</td>
                <td class="ui_text_lt">
                  <select name="fangyuanEntity.fyDhCode" id="fyDh" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="16" selected="selected">瑞景河畔16号楼</option>
                    <option value="17">瑞景河畔17号楼</option>
                    <option value="69">瑞景河畔18号楼</option>
                    <option value="72">瑞景河畔20号楼</option>
                    <option value="73">瑞景河畔22号楼</option>
                    <option value="74">瑞景河畔23号楼</option>
                    <option value="75">瑞景河畔24号楼</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">层号</td>
                <td class="ui_text_lt">
                  <input type="text" id="fyCh" name="fangyuanEntity.fyCh" value="1"  class="ui_input_txt01"/>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">房号</td>
                <td class="ui_text_lt">
                  <input type="text" id="fyFh" name="fangyuanEntity.fyFh"  value="112" class="ui_input_txt01" onkeyup="checkFyFh();"/>室
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">房源面积</td>
                <td class="ui_text_lt">
                  <input type="text" id="fyZongMj" name="fangyuanEntity.fyZongMj"  value="67.47" class="ui_input_txt01"/>㎡
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">计租面积</td>
                <td class="ui_text_lt">
                  <input type="text" id="fyJizuMj" name="fangyuanEntity.fyJizuMj" value="67.47" class="ui_input_txt01"/>㎡
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">户型</td>
                <td class="ui_text_lt">
                  <select name="fangyuanEntity.fyHxCode" id="submitForm_fangyuanEntity_fyHxCode" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="76" selected="selected">一室一厅一卫</option>
                    <option value="10">两室一厅一卫</option>
                    <option value="14">三室一厅一卫</option>
                    <option value="71">三室两厅一卫</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">建筑结构</td>
                <td class="ui_text_lt">
                  <select name="fangyuanEntity.fyJianzhuJiegou" id="submitForm_fangyuanEntity_fyJianzhuJiegou" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="38" selected="selected">混凝土</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">座落</td>
                <td class="ui_text_lt">
                  <input type="text" id="fyZldz" name="fangyuanEntity.fyZldz" value="瑞景河畔16号楼1-112" class="ui_input_txt02"/>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">位置</td>
                <td class="ui_text_lt">
                  <input type="text" id="fyPsdz" name="fangyuanEntity.fyPsdz" value="城中区" class="ui_input_txt02"/>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">性质</td>
                <td class="ui_text_lt">
                  <select name="fangyuanEntity.zulinXingzhi" id="submitForm_fangyuanEntity_zulinXingzhi" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="40" selected="selected">公租房</option>
                    <option value="41">廉租房</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="ui_text_rt">状态</td>
                <td class="ui_text_lt">
                  <select name="fangyuanEntity.fyStatus" id="submitForm_fangyuanEntity_fyStatus" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="26">在建</option>
                    <option value="25">建成待租</option>
                    <option value="13" selected="selected">已配租</option>
                    <option value="12">已租赁</option>
                    <option value="24">腾退待租</option>
                    <option value="23">欠费</option>
                    <option value="27">其他</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td class="ui_text_lt">
                  &nbsp;<input id="submitbutton" type="button" value="提交" class="ui_input_btn01"/>
                  &nbsp;<input id="cancelbutton" type="button" value="取消" class="ui_input_btn01"/>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </form>
      </body>
    </div>
</template>

<script>
    export default {
        name: "addcom"
    }
</script>

<style scoped>
  #container {
    width: 96%;
    margin: 0 auto;
    overflow: hidden;
  }

  #nav_links {
    width: 100%;
    height: 58px;
    line-height: 70px;
    color: #8A8A8A;
    font-size: 14px;
    border-bottom: 1px solid #EDEDED;
  }

  #page_close{
    display: inline-block; float: right;
    height: 20px;
    line-height: 0px;
    margin-top: 26px;
  }

  #ui_isFlag a:link,#ui_isFlag a:visited,#ui_isFlag a:hover,#ui_isFlag a:active
  {
    list-style: none;
    text-decoration: none;
    color: #8A8A8A;
  }

  #ui_isFlag a:hover {
    list-style: none;
    text-decoration: underline;
    color: #8A8A8A;
  }

  .ui_content {
    margin-top: 5px;
    overflow: auto;
    clear: both;
  }
  body {
    margin: 0;
    font: normal 15px "Microsoft YaHei";
    color: #0C0C0C;
    font-size: 14px;
    line-height: 20px;
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Microsoft Yahei"
  }

  html,body,div,h1,ul,li,select,p,iframe,input,textarea {
    margin: 0;
    padding: 0;
  }

  a:link,a:visited,a:hover,a:active {
    list-style: none;
    text-decoration: none;
    color: #909090;
  }

  a:hover {
    list-style: none;
    text-decoration: underline;
    color: #1A5CC6;
  }


  .table tbody tr th {
    background: #044599 no-repeat;
    text-align: center;
    border-left: 1px solid #02397F;
    border-right: 1px solid #02397F;
    border-bottom: 1px solid #02397F;
    border-top: 1px solid #02397F;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    height: 37px;
  }

  .table tbody tr td {
    text-align: center;
    border-left: 1px solid #ECECEC;
    border-right: 1px solid #ECECEC;
    border-bottom: 1px solid #ECECEC;
    font-size: 15px;
    color: #909090;
    height: 37px;
  }


  .ui_text_lt {
    text-align: left;
  }

  .ui_text_rt {
    text-align: right;
  }


  .ui_select01 {
    width: 120px;
    height: 30px;
    margin: 2px 2px 2px 5px;
  }


  .ui_input_txt01 {
    width: 25px;
    height: 16px;
    margin: 1px 1px 1px 5px;
    outline: 0;
    padding: 5px;
    border: 1px solid;
    border-color: #C0C0C0 #D9D9D9 #D9D9D9;
    border-radius: 2px;
    background: #FFF;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 0
    rgba(255, 255, 255, 0.2);
    -webkit-transition: box-shadow, border-color .5s ease-in-out;
    -moz-transition: box-shadow, border-color .5s ease-in-out;
    -o-transition: box-shadow, border-color .5s ease-in-out;
  }

  .ui_input_txt02 {
    width: 150px;
    height: 18px;
    margin: 2px 2px 2px 5px;
    outline: 0;
    padding: 5px;
    border: 1px solid;
    border-color: #C0C0C0 #D9D9D9 #D9D9D9;
    border-radius: 2px;
    background: #FFF;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 0
    rgba(255, 255, 255, 0.2);
    -webkit-transition: box-shadow, border-color .5s ease-in-out;
    -moz-transition: box-shadow, border-color .5s ease-in-out;
    -o-transition: box-shadow, border-color .5s ease-in-out;
  }


  .ui_input_btn01 {
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-style: none;
    cursor: pointer;
    font-family: "Microsoft YaHei", "微软雅黑", "sans-serif";
    background: url('../images/commo/btn.jpg') 0px -1px no-repeat;
  }

  .ui_input_btn01:hover {
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-style: none;
    cursor: pointer;
    font-family: "Microsoft YaHei", "微软雅黑", "sans-serif";
    background: url('../images/commo/btn_hover.jpg') 0px 0px no-repeat;
    color: #fff;
  }
</style>
