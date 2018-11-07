<template>
    <section class="app-login login-view">
       <form  @submit.prevent = "login">
           <div class="form-group" >
               <input type="text" v-model = "phone" class="form-control" placeholder="输入手机号">
               <span class="sms-code" v-if = "isCodeShow" @click = "sendCode">
                   <i class="sms-code-row" ></i>
                   <i class="sms-code-tex" >{{isResend ? '重发('+resendTime+'s)' : '发送验证码'}}</i>
                </span>
                <div class="input-bg" ></div>
            </div>
            <div class="form-group" >
                <input v-model = "code" type="password" class="form-control" placeholder="输入验证码" >
                <div class="input-bg" ></div>
            </div>
            <button type="submit" class="center-block submit" >登录</button>
        </form>
    </section>
</template>

<script>
export default {
    data () {
        return { 
            isCodeShow: false,
            phone: '18335832151',
            isResend: false,
            resendTime: 60,
            code: ''
        }
    },
    methods: {
        async sendCode () {
            if ( !this.isResend ) {// 发送验证码
                // ajax 如过成功
                let res = await this.$http({
                    url: '/mz/v4/api/code',
                    method: 'POST',
                    data: {
                        mobile: this.phone,
                        type: "2"
                    }
                }, true)
                if ( res.data.status === 0 ) { // 验证码发送成功
                    this.authCode()
                }
                
            }
        },
        async login () {
            let res = await this.$http({
                url: '/mz/v4/api/login',
                method: 'POST',
                data: {
                    // "2f3ee20be6a12d25c541a3d1dfe2f839"
                    loginType: 1,
                    password: this.code,
                    username: this.phone
                }
            }, true)
            if ( res.data.status === 0 ) { // 验证码发送成功
                
                // 存储
                localStorage.setItem('userInfo', JSON.stringify(res.data.data.data))
                for (const key in res.data.data.data) {
                    this.$cookies.set(key, res.data.data.data[key])
                }

                this.$router.replace({name: 'user-info'})
            }
        },
        authCode () { // 验证码处理
            this.isResend = true
            this.timer = setInterval(() => {
                this.resendTime --
                if ( this.resendTime === 0 ) {
                    clearInterval(this.timer)
                    this.isResend = false
                    this.resendTime = 60
                }
            },1000)
        }
    },
    watch: {
        phone: {
            immediate: true,
            handler (val) {
                let result = /^1[34578]\d{9}$/.test(this.phone.trim())
                this.isCodeShow =result
            }
        }
    }
};
</script>

<style lang="scss" >

.app-login {
    .form-control {
        padding: .16rem .32rem;
    }
    
}
.login-view .submit, .bind-view .submit {
   margin-left: auto;margin-right: auto; 
   display: block;    
}
    .login-view,
.bind-view {
  position: absolute;
  min-height: 100%;
  width: 100%;
  background-color: #f6f6f6;
}
.login-view input:-webkit-autofill,
.bind-view input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #f6f6f6 inset;
}
.login-view input:focus,
.bind-view input:focus {
  outline: none;
  box-shadow: none;
}
.login-view .setting-tips,
.bind-view .setting-tips {
  padding: 10px 31px 0;
}
.login-view form,
.bind-view form {
  padding: 0px 31px 0px 31px;
}
.login-view form .form-group,
.bind-view form .form-group {
  margin: 30px 0 0;
  position: relative;
}
.login-view form .form-group .input-bg,
.bind-view form .form-group .input-bg {
  position: absolute;
  top: 20px;
  height: 12px;
  width: 100%;
  border: solid #c4c4c4;
  border-width: 0 1px 1px 1px;
}
.login-view form .sms-code,
.bind-view form .sms-code {
  width: 95px;
  position: absolute;
  right: 5px;
  top: -5px;
  background-color: #29a097;
  color: #fff;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
.login-view form .sms-code .sms-code-row,
.bind-view form .sms-code .sms-code-row {
  left: -6px;
  position: absolute;
  top: 8px;
  content: '';
  width: 0;
  height: 0;
  border-top: solid 6px transparent;
  border-bottom: solid 6px transparent;
  border-right: solid 6px #29a097;
  display: block;
}
.login-view form .sms-code .sms-code-tex,
.bind-view form .sms-code .sms-code-tex {
  font-style: normal;
}
.login-view input.form-control,
.bind-view input.form-control {
  border: none;
  background-color: #f6f6f6;
  border-radius: 0px;
  box-shadow: none;
  outline: none;
}
.login-view .captcha,
.bind-view .captcha {
  display: none;
}
.login-view .captcha .code,
.bind-view .captcha .code {
  display: inline-block;
  width: 50%;
}
.login-view .captcha img,
.bind-view .captcha img {
  vertical-align: top;
  float: right;
  margin-right: 5px;
}
.login-view .captcha.active,
.bind-view .captcha.active {
  display: block;
}
.login-view .submit,
.bind-view .submit {
  width: 163px;
  background-color: #fe8233;
  color: #fff;
  border: none;
  border-radius: 36px;
  margin-top: 45px;
  padding: 8px 12px;
  font-size: 15px;
  outline: none;
}
.login-view .submit:focus,
.bind-view .submit:focus {
  outline: none;
  border: none;
}
.login-view .submit.hover,
.bind-view .submit.hover {
  background-color: #e47630;
}
.login-view .wechat-form,
.bind-view .wechat-form,
.login-view .m-qq-browser-form,
.bind-view .m-qq-browser-form {
  text-align: center;
  margin-top: 60px;
}
.login-view .wechat-form button.disabled,
.bind-view .wechat-form button.disabled,
.login-view .m-qq-browser-form button.disabled,
.bind-view .m-qq-browser-form button.disabled {
  background-color: #ccc;
}
.login-view .wechat-form p,
.bind-view .wechat-form p,
.login-view .m-qq-browser-form p,
.bind-view .m-qq-browser-form p {
  padding: 10px 0;
  color: #999;
  font-size: 10px;
}
.login-view .success-view p,
.bind-view .success-view p {
  text-align: center;
  opacity: 0.7;
  font-weight: normal;
}
.login-view .success-view p.bind-mobile,
.bind-view .success-view p.bind-mobile {
  font-size: 18px;
  opacity: 1;
  padding: 20px 0 10px;
}
.login-view .success-view a,
.bind-view .success-view a {
  display: block;
  text-align: center;
  text-decoration: none;
}
.login-view .success-view div,
.bind-view .success-view div {
  position: relative;
  height: 240px;
  text-align: center;
  width: 100%;
}
.login-view .success-view div:before,
.bind-view .success-view div:before {
  font-size: 190px;
  font-family: 'IconFont';
  content: '\E64C';
  color: #e5e5e5;
}
.login-view .success-view div i,
.bind-view .success-view div i {
  position: absolute;
  margin-left: -119px;
  top: 105px;
  font-size: 50px;
  color: #00c3d1;
}
.other-login .title {
  border-top: 1px solid #d6d6d6;
}
.other-login .title span {
  margin-top: -10px;
  color: #c4c4c4;
  background-color: #f6f6f6;
  width: 85px;
}
.other-login ul {
  margin-top: 45px;
  text-align: center;
}
.wrong-msg {
  display: block;
  height: 16px;
  color: #fe8233;
  padding-left: 8px;
}
.login-debug {
  text-align: center;
  margin-top: 10px;
}
.login-debug button {
  background-color: #ffd0b2;
}

</style>

