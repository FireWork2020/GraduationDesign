// pages/Throw/Throw.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kinds:[
      "选择垃圾种类",
      "有害垃圾",
      "可回收垃圾",
      "厨余垃圾"
    ],
    index: 0,
    collectCode:0,
    imgPath:''
  },
  getCode:function(e){
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/get/getCode',
      success(res){
        console.log(res);
        that.setData({
          collectCode:res.data
        })
      }
    })
  },
  submit:function(e){
    wx.request({
      url: 'http://localhost:8080/submit/submitTask',
      data:{
        userName:app.globalData.userInfo.userName,
        type:index,
        collectCode:collectCode
      },
      success(res){
        console.log(res);
      }
    })
    // wx.uploadFile({
    //   url: 'http://localhost:8080/upload/uploadMission',
    //   filePath: imgPath,
    //   name: 'file',
    //   formData:{
    //     user:'',
    //     collectionCode:this.collectCode,
    //     kind:this.index
    //   }
    // })
  },
  uploadImg:function(e){
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        console.log(res.tempFilePaths);
        this.setData({
          imgPath:res.tempFilePath[0]
        })
      },
      fail:function(res){
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