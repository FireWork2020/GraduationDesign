// pages/Notice/Notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice:[
      {
        topic:'主题一',
        content:'第一个'
      },
      {
        topic:'主题二',
        content:'第二个'
      }
    ],
    date:null
  },
  noticeDetail:function(options){
    console.log(options.currentTarget.dataset.index);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    this.setData({
      date: time
    })
    wx.request({
      url: 'http://localhost:8080/get/smartHouse',
      success(res) {
        this.setData({
          notice: res
        })
        
      }
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