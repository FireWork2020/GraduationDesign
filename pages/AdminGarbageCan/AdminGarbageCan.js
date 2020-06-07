// pages/AdminGarbageCan/AdminGarbageCan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cans:[
    ],
    list1:[
      {
        id:1,
        location:1,
        number:1,
        state:1
      }
    ],
    list2:[],
    list3:[],
    location:[1,2,3],
    locationIndex:1,
    selectedFlag:[false,false,false]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/get/getCans',
      method:'GET',
      success(res) {
        that.setData({
          cans: res.data
        })
        console.log(res);
        var len1 = 0, len2 = 0, len3 = 0;
        var len = new Array(4);
        len[1] = 0,len[2] = 0,len[3] = 0;
        for (var i = 0; i < that.data.cans.length; i++) {
          console.log(that.data.cans[i].location)
          len[that.data.cans[i].location] += 1;
        }
        console.log(len);
        var list = that.data.cans;
        console.log(list);
        var l1 = new Array(len[1]);
        var l2 = new Array(len[2]);
        var l3 = new Array(len[3]);
        for (var i = 0; i < list.length; i++) {
          if (list[i].location == 1) {
            l1[len1++] = list[i];
          } else if (list[i].location == 2) {
            l2[len2++] = list[i];
          } else {
            l3[len3++] = list[i];
          }
        }
        console.log(l1);
        console.log(l2);
        console.log(l3);
        that.setData({
          list1: l1,
          list2: l2,
          list3: l3
        })
      }
    })
    
  },
  changeToggle: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index);
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } else {
      this.data.selectedFlag[index] = true;
    }

    this.setData({
      selectedFlag: this.data.selectedFlag
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