<template>
    <div>
      <head>
        <title>信息管理系统</title>
      </head>
      <body>
      <form id="submitForm" name="submitForm" action="" method="post">
        <input type="hidden" name="allIDCheck" value="" id="allIDCheck"/>
        <input type="hidden" name="fangyuanEntity.fyXqName" value="" id="fyXqName"/>
        <div id="container">
          <div class="ui_content">
            <div class="ui_text_indent">
              <div id="box_border">
                <div id="box_top">搜索</div>
                <div id="box_center">
                  spu分类
                  <select name="fangyuanEntity.fyXqCode" id="fyXq" class="ui_select01" onchange="getFyDhListByFyXqCode();">
                    <option value=""
                    >--请选择--</option>
                    <option value="6">服装类</option>
                    <option value="77">？</option>
                    <option value="83">？</option>
                  </select>

                  栋号
                  <select name="fangyuanEntity.fyDhCode" id="fyDh" class="ui_select01">
                    <option value="">--请选择--</option>
                  </select>
                  户型
                  <select name="fangyuanEntity.fyHxCode" id="fyHx" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="76">一室一厅一卫</option>
                    <option value="10">两室一厅一卫</option>
                    <option value="14">三室一厅一卫</option>
                    <option value="71">三室两厅一卫</option>
                  </select>
                  状态
                  <select name="fangyuanEntity.fyStatus" id="fyStatus" class="ui_select01">
                    <option value="">--请选择--</option>
                    <option value="26">在建</option>
                    <option value="25">建成待租</option>
                    <option value="13">已配租</option>
                    <option value="12">已租赁</option>
                    <option value="24">腾退待租</option>
                    <option value="23">欠费</option>
                    <option value="27">其他</option>
                  </select>

                  座落&nbsp;&nbsp;<input type="text" id="fyZldz" name="fangyuanEntity.fyZldz" class="ui_input_txt02" />
                </div>
                <div id="box_bottom">
                  <input type="button" value="查询" class="ui_input_btn01" onclick="search();" />
                  <input type="button" value="新增" class="ui_input_btn01" onclick="window.location.href='./addcom'" />
                  <input type="button" value="删除" class="ui_input_btn01" onclick="batchDel();" />
                  <input type="button" value="导入" class="ui_input_btn01" id="importBtn" />
                  <input type="button" value="导出" class="ui_input_btn01" onclick="exportExcel();" />
                </div>
              </div>
            </div>
          </div>
          <div class="ui_content">
            <div class="ui_tb">
              <table class="table" cellspacing="0" cellpadding="0" width="100%" align="center" border="0">
                <tr>
                  <th width="30"><input type="checkbox" id="all" onclick="selectOrClearAllCheckbox(this);" />
                  </th>
                  <th>位置</th>
                  <th>房源</th>
                  <th>房源面积</th>
                  <th>计租面积</th>
                  <th>户型</th>
                  <th>建筑结构</th>
                  <th>租赁性质</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>

                <tr>
                  <td><input type="checkbox" name="IDCheck" value="14458619251417" class="acb" /></td>
                  <td>城中区</td>
                  <td>瑞景河畔16号楼6-161</td>
                  <td>65.97㎡</td>
                  <td>65.97㎡</td>
                  <td>一室一厅一卫</td>
                  <td>混凝土</td>
                  <td>公租房</td>
                  <td>已配租</td>
                  <td>
                    <a href="house_edit.html?fyID=14458619251417" class="edit">编辑</a>
                    <a href="javascript:del('14458619251417');">删除</a>
                  </td>
                </tr>

              </table>
            </div>
            <div class="ui_tb_h30">
              <div class="ui_flt" style="height: 30px; line-height: 30px;">
                共有
                <span class="ui_txt_bold04">90</span>
                条记录，当前第
                <span class="ui_txt_bold04">1
						/
						9</span>
                页
              </div>
              <div class="ui_frt">
                <!--    如果是第一页，则只显示下一页、尾页 -->

                <input type="button" value="首页" class="ui_input_btn01" />
                <input type="button" value="上一页" class="ui_input_btn01" />
                <input type="button" value="下一页" class="ui_input_btn01"
                       onclick="jumpNormalPage(2);" />
                <input type="button" value="尾页" class="ui_input_btn01"
                       onclick="jumpNormalPage(9);" />



                <!--     如果是最后一页，则只显示首页、上一页 -->

                转到第<input type="text" id="jumpNumTxt" class="ui_input_txt01" />页
                <input type="button" class="ui_input_btn01" value="跳转" onclick="jumpInputPage(9);" />
              </div>
            </div>
          </div>
        </div>
      </form>
      </body>
    </div>
</template>

<script>
    export default {
        name: "commodity"
    }

    var userRole = '';

    /** 模糊查询来电用户  **/
    function search(){
      $("#submitForm").attr("action", "house_list.html?page=" + 1).submit();
    }

    /** 新增   **/
    function add(){
      $("#submitForm").attr("action", "/xngzf/archives/luruFangyuan.action").submit();
    }

    /** Excel导出  **/
    function exportExcel(){
      if( confirm('您确定要导出吗？') ){
        var fyXqCode = $("#fyXq").val();
        var fyXqName = $('#fyXq option:selected').text();
//	 		alert(fyXqCode);
        if(fyXqCode=="" || fyXqCode==null){
          $("#fyXqName").val("");
        }else{
//	 			alert(fyXqCode);
          $("#fyXqName").val(fyXqName);
        }
        $("#submitForm").attr("action", "/xngzf/archives/exportExcelFangyuan.action").submit();
      }
    }

    /** 删除 **/
    function del(fyID){
      // 非空判断
      if(fyID == '') return;
      if(confirm("您确定要删除吗？")){
        $("#submitForm").attr("action", "/xngzf/archives/delFangyuan.action?fyID=" + fyID).submit();
      }
    }

    /** 批量删除 **/
    function batchDel(){
      if($("input[name='IDCheck']:checked").size()<=0){
        art.dialog({icon:'error', title:'友情提示', drag:false, resize:false, content:'至少选择一条', ok:true,});
        return;
      }
      // 1）取出用户选中的checkbox放入字符串传给后台,form提交
      var allIDCheck = "";
      $("input[name='IDCheck']:checked").each(function(index, domEle){
        bjText = $(domEle).parent("td").parent("tr").last().children("td").last().prev().text();
// 			alert(bjText);
        // 用户选择的checkbox, 过滤掉“已审核”的，记住哦
        if($.trim(bjText)=="已审核"){
// 				$(domEle).removeAttr("checked");
          $(domEle).parent("td").parent("tr").css({color:"red"});
          $("#resultInfo").html("已审核的是不允许您删除的，请联系管理员删除！！！");
// 				return;
        }else{
          allIDCheck += $(domEle).val() + ",";
        }
      });
      // 截掉最后一个","
      if(allIDCheck.length>0) {
        allIDCheck = allIDCheck.substring(0, allIDCheck.length-1);
        // 赋给隐藏域
        $("#allIDCheck").val(allIDCheck);
        if(confirm("您确定要批量删除这些记录吗？")){
          // 提交form
          $("#submitForm").attr("action", "/xngzf/archives/batchDelFangyuan.action").submit();
        }
      }
    }

    /** 普通跳转 **/
    function jumpNormalPage(page){
      $("#submitForm").attr("action", "house_list.html?page=" + page).submit();
    }

    /** 输入页跳转 **/
    function jumpInputPage(totalPage){
      // 如果“跳转页数”不为空
      if($("#jumpNumTxt").val() != ''){
        var pageNum = parseInt($("#jumpNumTxt").val());
        // 如果跳转页数在不合理范围内，则置为1
        if(pageNum<1 | pageNum>totalPage){
          art.dialog({icon:'error', title:'友情提示', drag:false, resize:false, content:'请输入合适的页数，\n自动为您跳到首页', ok:true,});
          pageNum = 1;
        }
        $("#submitForm").attr("action", "house_list.html?page=" + pageNum).submit();
      }else{
        // “跳转页数”为空
        art.dialog({icon:'error', title:'友情提示', drag:false, resize:false, content:'请输入合适的页数，\n自动为您跳到首页', ok:true,});
        $("#submitForm").attr("action", "house_list.html?page=" + 1).submit();
      }
    }
</script>

<style scoped>
  .alt td{ background:black !important;}

  #fancybox-loading div {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 480px;
    background-image: url('../images/commo/fancybox.png');
  }

  #fancybox-left:hover span {
    left: 20px;
  }

  #fancybox-right:hover span {
    left: auto;
    right: 20px;
  }

  #fancybox-title-float-wrap td {
    border: none;
    white-space: nowrap;
  }

</style>
