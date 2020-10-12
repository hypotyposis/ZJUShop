<template>
    <div>
      <el-form ref="changeForm" :model="changeForm" :rules="rules" label-position="left">
        <el-form-item label="用户名" prop="cName">
          <el-input v-model="changeForm.cName"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" prop="cType">
          <el-select v-model="changeForm.cType" placeholder="请选择用户类型" value="">
            <el-option label="卖家" value="1"></el-option>
            <el-option label="买家" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新密码" prop="cPass">
          <el-input v-model="changeForm.cPass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="chPass">
          <el-input v-model="changeForm.chPass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="cID">
          <el-input v-model="changeForm.cID"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="rName">
          <el-input v-model="changeForm.rName"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="cMail">
          <el-input v-model="changeForm.cMail"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="cPhone">
          <el-input v-model="changeForm.cPhone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onChange('changeForm')">提交</el-button>
          <el-button @click="backLog">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Change",
      data(){
        const valiPass = (rule, value, callback)=>{
          if(value===''){
            callback(new Error('请输入密码'));
          }else{
            if(this.changeForm.chPass !==''){
              this.$refs.regForm.validateField('chPass');
            }
            callback();
          }
        };
        const valiPassAgain = (rule, value, callback)=>{
          if(value===''){
            callback(new Error('请再次输入密码'));
          }else if(value!==this.changeForm.chPass){
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
        const checkPhone =(rule, value, callback)=>{
          if(value===''){
            callback(new Error('请输入电话号码'));
          }else if(Number.isNaN(value)){
            callback(new Error('电话号码必须为数字'));
          }else if(value.length!==11){
            callback(new Error('电话号码有误请检查'));
          }else{
            callback();
          }
        };
        return{
          changeForm: {
            cType:'',
            cName:'',
            cPass:'',
            chPass:'',
            cID:'',
            rName:'',
            cMail:'',
            cPhone:''
          },
          rules: {
            cName: [
              { required: true, message: '请输入用户名', trigger: 'blur'}
            ],
            cType: [
              { required: true, message: '请选择注册类型', trigger: 'change'}
            ],
            cPass: [
              { validator: valiPass, required: true, trigger: 'blur'}
            ],
            chPass: [
              { validator: valiPassAgain,required: true,  trigger:'blur'}
            ],
            cID: [
              { validator: checkID, required: true, trigger: 'blur'}
            ],
            rName: [
              { required: true, message: '请输入姓名', trigger: 'blur'}
            ],
            cMail: [
              { required: true, message: '请输入电子邮箱', trigger: 'blur'},
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            cPhone: [
              { validator: checkPhone, required: true, trigger:'blur'}
            ],
          }
        }
      },
      methods:{
        onChange(formName){
          this.$refs[formName].validate((valid) => {
            if(valid){
              let data={
                type:this.changeForm.cType,
                username:this.changeForm.cName,
                new_password:this.changeForm.cPass,
                id_card:this.changeForm.cID,
                name:this.changeForm.rName,
                email:this.changeForm.cMail,
                phone:this.changeForm.cPhone
              };
              console.log(data);
              let url='';
              async function change(){
                return await fetch(url,{
                  method:'POST',
                  mode: 'no-cors',
                  credentials: 'include',
                  headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                }).then(res => res.json())
              }
              change().then(res=>{
                if(res.data.code === 200){
                  this.$notify({
                    title: '密码找回成功',
                    message:'返回登录',
                    type: 'success'
                  });
                  this.$router.replace({path:'/login'});
                }
                if(res.data.code === 250){
                  this.$notify.error({
                    title: '找回失败',
                    message: '请重试'
                  });
                  this.$refs['changeForm'].resetFields();
                }
              })
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
