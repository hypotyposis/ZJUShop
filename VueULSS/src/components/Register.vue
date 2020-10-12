<template>
  <div class="regPage">
    <div class="regTag">
      <el-form ref="regForm" :model="regForm" :rules="ruleList" label-width="80px" label-position="left">
        <el-form-item label="用户名" prop="regName">
          <el-input v-model="regForm.regName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="regPass">
          <el-input v-model="regForm.regPass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="regForm.checkPass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="id_card">
          <el-input v-model="regForm.id_card"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="realName">
          <el-input v-model="regForm.realName"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="regForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="regForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address" v-show="regForm.isSale">
          <el-input v-model="regForm.address"></el-input>
        </el-form-item>
        <el-form-item label="注册类型" prop="regType">
          <el-select v-model="regForm.regType" placeholder="请选择注册类型" value="" @change="showAdd" style="width:100%">
            <el-option label="我是卖家" value="1"></el-option>
            <el-option label="我是买家" value="2"></el-option>
          </el-select>
        </el-form-item>
        <div class="regBtn">
          <el-button class="useBtn" type="primary" @click="onReg('regForm')">注册</el-button>
          <el-button class="useBtn" @click="backLog">返回</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

  export default {
        name: "Register",
      data() {
        const validatePass = (rule, value, callback)=>{
          if(value===''){
            callback(new Error('请输入密码'));
          }else{
            if(this.regForm.checkPass !==''){
              this.$refs.regForm.validateField('checkPass');
            }
            callback();
          }
        };
        const validatePassAgain = (rule, value, callback)=>{
          if(value===''){
            callback(new Error('请再次输入密码'));
          }else if(value!==this.regForm.regPass){
            callback(new Error('两次输入密码不一致'));
          }else{
            callback();
          }
        };
        const checkID = (rule, value, callback)=>{
          if(value===''){
            callback(new Error('请输入身份证号'));
          }else if(value.length!==18){
            callback(new Error('身份证号有误请检查'));
          }else{
            callback();
          }
        };
        return {
          regForm: {
            regName: '',
            regType: '',
            regPass: '',
            checkPass: '',
            id_card: '',
            realName: '',
            email: '',
            phone: '',
            address: '',
            isSale: false
          },
          rules: {
            regName: [
              { required: true, message: '请输入用户名', trigger: 'blur'}
            ],
            regType: [
              { required: true, message: '请选择注册类型', trigger: 'change'}
            ],
            regPass: [
              { validator: validatePass, required: true, trigger: 'blur'}
            ],
            checkPass: [
              { validator: validatePassAgain,required: true,  trigger:'blur'}
            ],
            id_card: [
              { validator: checkID, required: true, trigger: 'blur'}
            ],
            realName: [
              { required: true, message: '请输入姓名', trigger: 'blur'}
            ],
            email: [
              { required: true, message: '请输入电子邮箱', trigger: 'blur'},
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            phone: [
              { required: true, message: '请输入电话号码', trigger:'blur'}
            ],
            address:[
              { required: true, message: '请输入地址', trigger: 'blur'}
            ]
          },
          rules2: {
            regName: [
              { required: true, message: '请输入用户名', trigger: 'blur'}
            ],
            regType: [
              { required: true, message: '请选择注册类型', trigger: 'change'}
            ],
            regPass: [
              { validator: validatePass, required: true, trigger: 'blur'}
            ],
            checkPass: [
              { validator: validatePassAgain,required: true,  trigger:'blur'}
            ],
            id_card: [
              { validator: checkID, required: true, trigger: 'blur'}
            ],
            realName: [
              { required: true, message: '请输入姓名', trigger: 'blur'}
            ],
            email: [
              { required: true, message: '请输入电子邮箱', trigger: 'blur'},
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            phone: [
              { required: true, message: '请输入电话号码', trigger:'blur'}
            ]
          }
        }
      },
      computed: {
         ruleList:function(){
           if(this.regForm.regType==='1'){
             return this.rules;
           }else{
             return this.rules2;
           }
         }
      },
      methods: {
        onReg(formName) {
          this.$refs[formName].validate((valid) =>{
            if(valid){
              let rtype=parseInt(this.regForm.regType);
              let data={};
              if(rtype===1) {
                data = {
                  type: rtype,
                  username: this.regForm.regName,
                  password: this.regForm.regPass,
                  id_card: this.regForm.id_card,
                  name: this.regForm.realName,
                  email: this.regForm.email,
                  phone: this.regForm.phone,
                  address:this.regForm.address
                }
              }
              else{
                data = {
                  type: rtype,
                  username: this.regForm.regName,
                  password: this.regForm.regPass,
                  id_card: this.regForm.id_card,
                  name: this.regForm.realName,
                  email: this.regForm.email,
                  phone: this.regForm.phone,
                  address:""
                }
              }
              console.log(data);
              let url = "http://10.214.213.43:9000/account/register";
              async function reg() {
                return await fetch(url, {
                  method: 'POST',
                  mode: 'cors',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                }).then(response => response.json());
              }
              reg().then(response=>{
                console.log(response.code);
                if(response.code === 200){
                  this.$notify({
                    title: '注册成功',
                    message:'返回登录',
                    type: 'success'
                  });
                  this.$router.replace({path:'/login'});
                }
                else if(response.code === 201){
                  this.$notify.error({
                    title: '用户名已存在',
                    message: '请重试'
                  });
                  this.$refs['regForm'].resetFields();
                }
                else{
                  this.$notify.error({
                    title: '注册失败',
                    message: response.data.detail
                  });
                }
              })
            }
            else{
              console.log('error');
              return false;
            }
          });
        },
        showAdd(){
          if(this.regForm.regType==='1')
            this.$set(this.regForm,'isSale',true);
          if(this.regForm.regType==='2')
            this.$set(this.regForm,'isSale',false);
        },
        backLog(){
          this.$router.replace({path:'/login'});
        }
      }
    }
</script>

<style scoped>
  .regPage{
    background-image: url("../assets/img/regImg.jpeg");
    background-size:100% 100%;
    height:700px;

  }
  .regTag{
    background-color: #cccccc;
    opacity:0.8;
    padding:3em;
    width:40%;
    position:relative;
    left:50px;
    top:50px;
  }
  .regBtn{
    text-align: center;
  }
  .useBtn{
    width:45%;
  }
</style>
