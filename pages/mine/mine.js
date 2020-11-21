// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yes:"#9DA0A5",
    no:"black",
    list:[
      {
        face_url:"/images/wx_add.png",
        name:"dong之一",
        time:"2020-5-9 20:50:22",
        content:"我叫董志洋基督教佛大祭司积分就是打开雷锋精神龙卷风立刻就的方法是是发",
        likenum:99
      },{
        face_url:"/images/wx_add.png",
        name:"111",
        time:"2020-5-9 20:52:22",
        content:"我叫董dfsdfsdf基督教佛大祭司积分就是打开雷锋精神龙卷风立刻就的方法是是发",
        likenum:55
      },{
        face_url:"/images/wx_add.png",
        name:"haiyang",
        time:"2020-8-9 20:50:22",
        content:`我dfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd司积分就是打开雷锋精神龙卷风立刻就的方法是是发`,
        likenum:93
      },{
        face_url:"/images/wx_zan1.png",
        name:"dong之一",
        time:"2020-5-9 20:50:22",
        content:"我叫董志洋基督教佛大祭司积分就是打开雷锋精神龙卷风立刻就的方法是是发",
        likenum:99
      },
    ]
  },


  first_select:function(e){
    wx.redirectTo({
      url: '/pages/square/square'
    })
  },
  second_select:function(e){
    wx.navigateTo({
      url: '/pages/commit/commit'
    })
  },
  three_select:function(e){
    wx.redirectTo({
      url: '/pages/mine/mine'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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