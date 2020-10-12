<template>
  <div class="loginPage">
    <div class="loginTag">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="登录类型" prop="utype">
          <el-select v-model="ruleForm.utype" placeholder="请选择登录类型" value="" style="width:100%">
            <el-option label="卖家" value="1"></el-option>
            <el-option label="买家" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="logBtn" style="width:100%">登录</el-button>
        <div class="reroute">
          <router-link to="/register">注册</router-link>
          <router-link to="/retrieve">找回密码</router-link>
        </div>
      </el-form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data() {
        return {
          ruleForm: {
            name: '',
            utype: '',
            pass: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            utype: [
              { required: true, message: '请选择登录类型', trigger: 'change' }
            ],
            pass: [
              { required: true, message: '请填写密码', trigger: 'blur' }
            ]
          }
        };
      },
      beforeRouteEnter:(to,from,next)=>{
          next(vm=>{
            vm.$store.dispatch("setUser",null);
          })
      },
      methods: {
        submitForm(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let username=this.ruleForm.name;
              let data = {
                type: parseInt(this.ruleForm.utype),
                username: username,
                password: this.ruleForm.pass
              };
              let url = "http://10.214.213.43:9000/account/login";

              async function log() {
                return await fetch(url, {
                  method: 'POST',
                  mode: 'cors',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                }).then(res => res.json())
              }
              log().then(res => {
                if (res.code === 200) {
                  sessionStorage.setItem('userToken', res.data.token);
                  sessionStorage.setItem('userName', username);
                  this.$store.dispatch("setUser",username);
                  this.$store.dispatch("setToken",res.data.token);
                  console.log(this.$store.state.isLogin);
                  this.$notify({
                    title: '登录成功',
                    type: 'success'
                  });
                  setTimeout(() => {
                    this.$router.replace({path: '/'})
                  }, 1500);
                } else{
                  this.$notify.error({
                    title: '登录失败',
                    message: res.data.detail
                  });
                  this.$store.dispatch("setUser",null);
                  this.resetForm('ruleForm');
                }
              }).catch(err => {
                console.log(err);
              })
            }
            else{
              console.log('error');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>
<style scoped>
  .loginPage{
    background-image:url("../assets/img/backimg.jpeg");
    background-size: 100% 100%;
    position:relative;
    height:600px;
  }
  .loginTag{
    padding:3em 3em 1em 3em;
    width:300px;
    background-color: whitesmoke;
    opacity: 0.8;
    left:58%;
    top:20%;
    position:relative;
  }
  .logBtn{
    margin-bottom: 20px;
    letter-spacing: 20px;
  }
  a{
    text-decoration: none;
    color: grey;
    font-size:14px;
  }
  .reroute{
    text-align: right;
  }
</style>
