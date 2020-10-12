<template>
  <div class="app-search">
<!--    <p>{{this.key}}</p>-->
    <div v-if="items.length == 0" class="noneResult">
      <h1>该分类下暂无商品</h1>
    </div>
    <div class="itemShow" v-else>
      <h3>该分类下的商品：</h3>
      <el-row :gutter="10">
        <el-col :span="6" v-for="(item,index) in items" :key="index">
          <el-card :body-style="{padding:'0'}">
            <router-link v-bind:to="'/product/'+item.spu_id">
              <div class="imgCtr" ><img v-bind:src="item.gos_keys[0]" alt="itemImg" class="itemImg"/></div>
              <div class="prodName">{{item.product_name}}</div>
            </router-link>
            <span class="storeName">{{item.store.store_name}}</span>
          </el-card>
        </el-col>
      </el-row>
      <div class="pager">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "catalog",
      data () {
        return {
          key:"",
          items:[],
          currentPage:1,
          pageSize:10,
          total:0
        }
      },
      methods:{
        searchItem:function(){
          let url="http://10.214.213.43:9000/product/catalog?type="+this.key+"&page="+this.currentPage+"&size="+this.pageSize;
          console.log(url);
          fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(res => res.json()).then(res=>{
            if(res.code===200){
              this.items=res.data.products;
              this.total=res.data.total;
            }else{
              console.log("error");
            }
          })
        },
        handleSizeChange:function(size){
          this.pageSize=size;
          this.searchItem();
        },
        handleCurrentChange:function(currentPage){
          this.currentPage=currentPage;
          this.searchItem();
        }
      },
      mounted(){
        this.key = this.$route.query.words;
        this.searchItem();
      }
    }
</script>


<style scoped>
  .noneResult h1{
    text-align: center;
    margin:50px;
  }
  .itemShow h3{
    text-align: center;
    font-size:20px;
  }
  .imgCtr{
    width:100%;
    margin:0;
    padding:0;
    height:250px;
    overflow: hidden;
  }

  .itemImg{
    width:100%;
  }
  .pager{
    margin:30px;
    text-align: center;
  }
  a .prodName{
    text-align:center;
    padding:10px;
    font-weight: bold;
    font-size:15px;
  }
  a{
    text-decoration: none;
    color:orangered;
  }
</style>
