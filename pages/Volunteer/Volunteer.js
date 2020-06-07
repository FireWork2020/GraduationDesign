// pages/Volunteer/Volunteer.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:[
      
    ]
  },

  apply:function(options){
    console.log(options);
    console.log(this.data.activity)
    var index = options.currentTarget.dataset.index;
    var that = this;
    console.log(index);
    var activityNum = this.data.activity[index].activitynum;
    console.log(activityNum);
    wx.request({
      url: 'http://localhost:8080/post/applyActivity',
      method:'POST',
      data:{
        userName: app.globalData.userInfo.nickName,
        activityNum:that.data.activity[index].activitynum
      },
      success(res) {
        wx.showToast({
          title: '报名成功',
          icon: 'success',
          duration: 1500
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/get/getVolunteerInfo',
      success(res) {
        that.setData({
          activity: res.data
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