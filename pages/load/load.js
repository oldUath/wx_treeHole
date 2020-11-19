// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //跳转到下一个页面
  next:function(){
    console.log('userInfo',getApp().globalData.userInfo);
    wx.redirectTo({
      url: '/pages/login/login'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    // 加载中的样式
    wx.showLoading({
      title: '加载中',
    });
    
    // 计时器清除加载样式
    setTimeout(function(){
      wx.hideLoading({
        complete: (res) => {},
      })
    },600);
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })

          // 查看是否授权
          wx.getSetting({
            success (res){
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: function(res) {
                    // 将获取的全局信息存入到全局变量中
                    getApp().globalData.userInfo = res.userInfo;
                    console.log('11', res.userInfo)
                    that.next();
                  }
                })
              }
            }
          })

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },
  bindGetUserInfo (e) {
    getApp().globalData.userInfo = e.detail.rawData;
    console.log(e.detail.rawData )
    if(e.detail.rawData== undefined){

    }else{
      this.next();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})