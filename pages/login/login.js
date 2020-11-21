// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
  },
//验证输入
  userNameInput:function(e){
    this.data.username = e.detail.value;
  },
  passwordInput:function(e){
    this.data.password = e.detail.value;
  },
  //登录逻辑
  login:function(e){
    if( this.data.username == ''){
      wx.showModal({
        title: '提示!',
        content: '请输入用户名！',
        showCancel:false,
        success (res) { }
      });
    }else if(this.data.password == ''){
      wx.showModal({
        title: '提示!',
        content: '请输入密码！',
        showCancel:false,
        success (res) { }
      });
    }else if(this.data.username != getApp().globalData.user.username || this.data.password !=getApp().globalData.user.password  ){
      wx.showModal({
        title: '提示!',
        content: '请输入正确的用户名和密码',
        showCancel:false,
        success (res) { }
      });
    }else{
      console.log('登录成功')
    }

  },

  //进入注册页面
  toRegist:function(e){
    wx.redirectTo({
      url: '/pages/enroll/enroll'
    })
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})