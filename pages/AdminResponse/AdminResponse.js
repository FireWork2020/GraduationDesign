// pages/HelpCenter/HelpCenter.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    topic:null,
    msg:null,
    ans:null
  },
  getAns:function(e){
    var that = this;
    that.setData({
      ans:e.detail.value
    })
  },
  submit: function (e) {
    console.log(this.data.topic);
    console.log(this.data.msg);
    console.log(this.data.ans);
    wx.request({
      url: 'http://localhost:8080/post/ansQues',
      method: 'POST',
      data: {
        id:this.data.id,
        ans:this.data.ans
      },
      success(res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    that.setData({
      id:options.id,
      topic:options.topic,
      msg:options.msg
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