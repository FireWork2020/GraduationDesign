// pages/Notice/Notice.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [
      {
        userName: '张三',
        grade: 123
      },
      {
        userName: '李四',
        grade: 123
      }
    ],
    questions:[
      {
        id:1,
        userName:'NanFu',
        topic:'丢东西',
        msg:'丢了钥匙',
        ans:'找到了'
      }
    ],
    date: null
  },
  noticeDetail: function (options) {
    console.log(options.currentTarget.dataset.index);
  },
  response:function(event){
    console.log(event.currentTarget.dataset.index);
    var index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/AdminResponse/AdminResponse?id='+this.data.questions[index].id+'&topic='+this.data.questions[index].topic+'&msg='+this.data.questions[index].msg,
    })
  },
  toZero: function (options) {
    wx.request({
      url: 'http://localhost:8080/post/grateToZero',
      data: {
        userName: options.data.index
      },
      success(res) {
        console.log('结算完成')
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
      url: 'http://localhost:8080/get/getNotice',
      success(res) {
        that.setData({
          notice: res.data
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