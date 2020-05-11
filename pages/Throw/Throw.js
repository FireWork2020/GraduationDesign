// pages/Throw/Throw.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kinds:[
      "可回收物",
      "厨余垃圾",
      "有害垃圾",
      "其它垃圾"
    ],
    index: 0,
    collectCode:0,
    imgPath:'',
    userInfo:null
  },
  getCode:function(e){
    var that = this;
    wx.scanCode({
      success(res) {
        console.log(res)
        that.setData({
          collectCode: res.result
        })
      }
    })
  },
  submit:function(e){
    console.log(this.data.index);
    console.log(this.data.userInfo.nickName);
    console.log(this.data.collectCode);
    wx.request({
      url: 'http://localhost:8080/submit/submitTask',
      data:{
        userName:this.data.userInfo.nickName,
        type:this.data.index,
        collectCode:this.data.collectCode
      },
      success(res){
        console.log(res);
      }
    })
  },
  selectChange:function(e){
    console.log(e);
    this.setData({
      index:e.detail.value
    })
    wx.request({
      url: 'http://localhost:8080/get/getCollectCode',
      data:{
        index:this.index
      },
      success(res){
        this.setData({
          collectCode:res.collectCode
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      'userInfo':app.globalData.userInfo
    })
    console.log(userInfo);
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