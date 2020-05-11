// pages/Home/Home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:app.globalData.userInfo,
    collectHistory:null,
    integrateHistory:null,
    smartHouses:null,
    notice:null,
    volunteerService:null
  },

  collectHistory:function(e){
    wx.navigateTo({
      url: '/pages/CollectHistory/CollectHistory',
    })
  },
  integrateHistory: function (e) {
    wx.navigateTo({
      url: '/pages/IntegrateHistory/IntegrateHistory',
    })
  },
  helpCenter: function (e) {
    wx.navigateTo({
      url: '/pages/HelpCenter/HelpCenter',
    })
  },
  smartHouse: function (e) {
    wx.navigateTo({
      url: '/pages/SmartHouse/SmartHouse'
    })
  },
  notice: function (e) {
    wx.navigateTo({
      url: '/pages/Notice/Notice'
    })
  },
  volunteerService: function (e) {
    wx.navigateTo({
      url: '/pages/Volunteer/Volunteer'
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
    this.setData({
      'userInfo': this.app.globalData.userInfo
    })
    console.log(this.userInfo);
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