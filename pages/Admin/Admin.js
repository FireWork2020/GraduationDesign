// pages/Home/Home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectHistory: null,
    integrateHistory: null,
    smartHouses: null,
    notice: null,
    volunteerService: null
  },

  collectHistory: function (e) {
    wx.navigateTo({
      url: '/pages/AdminCollectHistory/AdminCollectHistory',
    })
  },
  integrateHistory:function(e){
    wx.navigateTo({
      url: '/pages/AdminIntegrateHistory/AdminIntegrateHistory',
    })
  },
  questionAndAns:function(e){
    wx.navigateTo({
      url: '/pages/AdminQuesAndAns/AdminQuesAndAns',
    })
  },
  notice: function (e) {
    wx.navigateTo({
      url: '/pages/AdminNotice/AdminNotice'
    })
  },
  volunteerService: function (e) {
    wx.navigateTo({
      url: '/pages/AdminVolunteer/AdminVolunteer'
    })
  },
  manageGarbageCan:function(e){
    wx.navigateTo({
      url: '/pages/AdminGarbageCan/AdminGarbageCan',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
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