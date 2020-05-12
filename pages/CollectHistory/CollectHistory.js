// pages/CollectHistory/CollectHistory.js
var util = require('../../utils/util.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:null,
    category:[
      '可回收物',
      '厨余垃圾',
      '有害垃圾',
      '其它垃圾'
    ],
    userInfo:app.globalData.userInfo,
    collectHistory:[
      {
        type:3,
        date:'2020-04-02',
        collectcode:'123123'
      },
      {
        type: 1,
        date: '2020-04-02',
        collectcode: '232323'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userInfo = app.globalData.userInfo;
    var time = util.formatTime(new Date());
    this.setData({
      date:time
    });
    var that = this;
    wx.request({
      url: 'http://localhost:8080/get/collectHistory', 
      data: {
        userName: this.userInfo.nickName
      },
      success(res) {
        that.setData({
          collectHistory: res.data
        })
        console.log(res);
      }
    })
    console.log(this.collectHistory);
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