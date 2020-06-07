// pages/HelpCenter/HelpCenter.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions:[
      {
        topic:'topic',
        msg:'msg',
        ans:'ans'
      },{
        topic:'question1',
        msg:'content1',
        ans:'ans1'
      }
    ]
  },

  submit: function (e) {
    var topic = e.detail.value.topic;
    var msg = e.detail.value.msg;
    console.log(topic);
    console.log(msg);
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/get/getQues&Ans',
      data: {
        userName: app.globalData.userInfo.nickName,
      },
      success(res) {
        that.setData({
          questions:res.data
        })
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