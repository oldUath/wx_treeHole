// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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