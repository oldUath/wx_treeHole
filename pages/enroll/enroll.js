// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    phonenumber:"",
    password:"",
    passwordack:""
  },
// 获取到输入框的信息，并保存起来
  userNameInput:function(e){
    this.data.username=e.detail.value;
  },
  phoneNumberInput:function(e){
    this.data.phonenumber=e.detail.value;
  },
  passwordInput:function(e){
    this.data.password=e.detail.value;
  },
  passwordAck:function(e){
    this.data.passwordack=e.detail.value;
  },
//点击跳转到登录页面（也是注册的上一页）
  sigin:function(e){
    console.log(this.data)
    wx.navigateBack({
      // delta的值控制返回到上面第几个页面
      delta: 1
    })
  },
  
//校验输入的信息，有误就做出提示
  regist:function(e){
    var that = this;
    // 验证电话号的正则表达式
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(that.data.username == ''){
      wx.showModal({
        title: '提示!',
        content: '请输入用户名！',
        showCancel:false,
        success (res) { }
      });
    }else if(that.data.phonenumber.length == ''){
      wx.showModal({
        title: '提示!',
        content: '手机号不能为空',
        showCancel:false,
        success (res) { }
      });
    }else if(that.data.phonenumber.length != 11){
      wx.showModal({
        title: '提示!',
        content: '手机号长度有误！请重新输入',
        showCancel:false,
        success (res) { }
      });
    }else if( !myreg.test(that.data.phonenumber)){
      wx.showModal({
        title: '提示!',
        content: '请输入正确的号码',
        showCancel:false,
        success (res) { }
      });
    }else if(that.data.password == ''){
      wx.showModal({
        title: '提示!',
        content: '请输入密码',
        showCancel:false,
        success (res) { }
      });
    }else if(that.data.passwordack == ''){
      wx.showModal({
        title: '提示!',
        content: '请输入确认密码！',
        showCancel:false,
        success (res) { }
      });
    }else if(that.data.password != that.data.passwordack){
      wx.showModal({
        title: '提示!',
        content: '请输入确认密码！',
        showCancel:false,
        success (res) { }
      });
    }else{
      console.log('注册成功')
    }


  },
})