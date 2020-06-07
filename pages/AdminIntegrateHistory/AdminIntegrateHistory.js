// pages/Notice/Notice.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users:[
      {
        userName:'张三',
        score:123
      },
      {
        userName: '李四',
        score: 123
      }
    ],
    date: null
  },
  toZero:function(event){
    console.log(event);
    console.log(event.currentTarget.dataset.username);
    wx.request({
      url: 'http://localhost:8080/post/grateToZero',
      data:{
        userName:event.currentTarget.dataset.username
      },
      success(res){
        console.log('结算完成')
        wx.showToast({
          title: '结算完成',
          icon:'success',
          duration:2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    this.date = time;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/get/userInfo',
      success(res) {
        that.setData({
          users: res.data
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