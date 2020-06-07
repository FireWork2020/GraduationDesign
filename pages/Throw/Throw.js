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
    garbageCan:[
      {
        id:1,
        location:1,
        number:1,
        state:1
      },
      {
        id: 2,
        location: 2,
        number: 1,
        state: 1
      },
      {
        id: 3,
        location: 3,
        number: 1,
        state: 1
      }
    ],
    index: 0,
    collectCode:0,
    imgPath:'',
    userInfo:null,
    kindIndex:0,
    canIndex:0
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
      success(res) {
        console.log(res);
        that.setData({
          garbageCan:res.data
        });
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        });
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
    var arr = new Array(this.data.garbageCan.length);
    for (var i = 0; i < this.data.garbageCan.length; i++) {
      arr[i] = this.data.garbageCan[i].location + '-' + this.data.garbageCan[i].number;
    }
    this.setData({
      cans: arr
    })
    console.log(this.data.cans);
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