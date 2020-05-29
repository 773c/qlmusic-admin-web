<template>
  <div class="login_container">
    <el-card class="login_form_layout" shadow="always">
        <!--logo图标-->
        <div class="logo_box" align="center">
          <img src="@/assets/img/logo.png" alt="logo图标" height="78" width="78">
          <h3>巧了音乐</h3>
        </div>
        <br>

        <!--表单信息-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" autoComplete="on" class="demo-ruleForm" >
          <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm.account" placeholder="请输入账号"  autocomplete="on" class="login_input">
              <div class="login_user" slot="prefix">
                <img src="@/assets/img/login_user.png" width="22" height="22"/>
              </div>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :type="passRef.type" v-model="ruleForm.password" ref="passRef" placeholder="请输入密码" autocomplete="on"
                      class="login_input"
                      id="login_input_pass">
              <div class="login_pass" slot="prefix">
                <img src="@/assets/img/login_pass.png" width="18" height="18"/>
              </div>
              <div class="login_noSeePass" slot="suffix" @click="showPass()">
                <img src="@/assets/img/login_noSeePass.png" width="16" height="16"/>
              </div>
            </el-input>
          </el-form-item>
          <el-form-item label-width="4px">
            <el-button type="info" @click="loginHandler()" class="login_button">登录</el-button>
            <el-button type="info" @click="getTestAccount()" class="login_button">获取体验账号</el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        src:'@/assets/img/admin_background.jpg',
        ruleForm: {
          account: 'cjj',
          password: '123',
        },
        passRef: {
          type: 'password'
        },
        rules: {
          account: [
            {validator: validateAccount, trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      loginHandler() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$store.dispatch('Login', this.ruleForm).then(() => {
              this.$router.push("/")
            })
          } else {
            alert('error submit!');
            return false;
          }
        });
      },
      showPass() {
        if (this.passRef.type === 'password') {
          this.passRef.type = 'text'
        } else {
          this.passRef.type = 'password'
        }
      },
      getTestAccount(){
        this.$store.dispatch('Test').then(() => {
          alert("测试成功")
        })
      }
    }
  }

</script>

<style scoped>
  .login_container {
    background: url("../../assets/img/admin_background.jpg");
    height: 721px;
  }

  .login_form_layout{
    width: 380px;
    height: 380px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 140px auto;
    border-top: 8px solid #000;
  }

  .logo_box > h3 {
    color: #000;
  }

  .demo-ruleForm .login_input {
    width: 340px;
  }

  .demo-ruleForm .login_input .login_user {
    padding-top: 6px;
  }

  .demo-ruleForm .login_input .login_pass {
    padding-top: 4px;
    padding-left: 1px;
  }

  .demo-ruleForm .login_input .login_noSeePass {
    padding-top: 4px;
    padding-right: 3px;
    cursor: pointer;
  }

  .demo-ruleForm .login_button {
    width: 160px;
    background-color: #000;
  }

</style>

