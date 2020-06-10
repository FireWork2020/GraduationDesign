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
    cans:[],
    garbageCan:[],
    index: 0,
    collectCode:0,
    imgPath:'',
    userInfo:null,
    kindIndex:0,
    canIndex:0
  },
  selectChange1:function(e){
    console.log(e.detail.value);
    this.setData({
      kindIndex:e.detail.value
    })
  },
  selectChange2: function (e) {
    console.log(e.detail.value);
    this.setData({
      canIndex: e.detail.value
    })
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
    let that = this;
    wx.request({
      url: 'http://localhost:8080/throw/submitTask',
      method:'POST',
      data:{
        userName:app.globalData.userInfo.nickName,
        type:this.data.kindIndex,
        can:this.data.garbageCan[this.data.canIndex].id,
        collectCode:this.data.collectCode
      },
      success(res){
        console.log(res);
        that.setData({
          collectCode:0
        });
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        });
      },
      fail(res){
        console.log(res);
        that.setData({
          collectCode: 0
        });
        wx.showToast({
          title: '失败',
          duration:1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.userInfo = app.globalData.userInfo;
    let that = this;
    wx.request({
      url: 'http://localhost:8080/get/getCans',
      method:'GET',
      success(res) {
        console.log('返回值'+res);
        that.setData({
          garbageCan:res.data
        });
        var arr = new Array(that.data.garbageCan.length);
        console.log('garbagecan:' + that.data.garbageCan);
        for (var i = 0; i < that.data.garbageCan.length; i++) {
          arr[i] = that.data.garbageCan[i].location + '-' + that.data.garbageCan[i].number;
        }
        that.setData({
          cans: arr
        })
        console.log(that.data.cans);
      },
      fail(res) {
        console.log(res);
        that.setData({
          collectCode: 0
        });
        wx.showToast({
          title: '失败',
          duration: 1500
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