<template>
  <div>
  <div class="background">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
  </div>
  <div class="materialContainer" >
    <div class="box">
      <div class="title">登录</div>
      <div class="input">
        <label for="name">用户名</label>
        <input type="text" name="name" id="name">
        <span class="spin"></span>
      </div>
      <div class="input">
        <label for="pass">密码</label>
        <input type="password" name="pass" id="pass">
        <span class="spin"></span>
      </div>
      <div class="button login">
        <button>
          <span>登录</span>
          <i class="fa fa-check"></i>
        </button>
      </div>
      <a href="javascript:" class="pass-forgot">忘记密码？</a>
    </div>

    <div class="overbox">
      <div class="material-button alt-2">
        <span class="shape"></span>
      </div>
      <div class="title">注册</div>
      <div class="input">
        <label for="regname">用户名</label>
        <input type="text" name="regname" id="regname">
        <span class="spin"></span>
      </div>
      <div class="input">
        <label for="regpass">密码</label>
        <input type="password" name="regpass" id="regpass">
        <span class="spin"></span>
      </div>
      <div class="input">
        <label for="reregpass">确认密码</label>
        <input type="password" name="reregpass" id="reregpass">
        <span class="spin"></span>
      </div>
      <div class="button">
        <button>
          <span>注册</span>
        </button>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
  export default {
    name:'login',
    data(){
      return {
        imgSrc:require('../assets/bg.png')
      }
    }
  }
</script>
<style scoped>
  @import "../../static/css/style.css";
  .background{
    top:0;
    left: 0;
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
  }
</style>
