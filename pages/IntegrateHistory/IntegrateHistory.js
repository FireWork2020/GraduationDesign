// pages/IntegrateHistory/IntegrateHistory.js
var util = require('../../utils/util.js');
const app = getApp();
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
    value:[1,2,3,4],
    dateLastCheck:null,
    user:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    var that = this;
    this.setData({
      date: time
    })
    this.userInfo = app.globalData.userInfo;
    console.log(this.userInfo);
    wx.request({
      url: 'http://localhost:8080/get/integrateHistory',
      data: {
        userName: this.userInfo.nickName
      },
      success(res) {
        that.setData({
          user: res.data
        });
        var total = 0;
        for(var i = 0 ;i < num.length;i++){
          total += (num[i] * value[i]);
        }
        that.setData({
          totalScore:total
        });
      }
    });

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