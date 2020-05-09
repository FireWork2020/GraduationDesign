// pages/IntegrateHistory/IntegrateHistory.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    totalScore:404,
    kinds: [
      "可回收物",
      "厨余垃圾",
      "有害垃圾",
      "其它垃圾"
    ],
    msgs: [
      {
        num:0,
        date: '2020-04-02',
        remark: 1
      },
      {
        num:2,
        date: '2020-04-02',
        remark: 2
      },
      {
        num: 3,
        date: '2020-04-02',
        remark: 3
      },
      {
        num: 4,
        date: '2020-04-02',
        remark: 4
      }
    ]
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
      url: 'http://localhost:8080/get/integrateHistory',
      data: {
        userInfo: userInfo.nickName
      },
      success(res) {
        this.setData({
          integrateHistory: res
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