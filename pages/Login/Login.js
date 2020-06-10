// pages/Login/Login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:'',
    password:''
  },
  navToAdmin:function(){
    wx.navigateTo({
      url: '/pages/Admin/Admin',
    })
  },
  bindGetUserInfo:function(e){
    app.globalData.userInfo = e.detail.userInfo;
    var username = app.globalData.userInfo.nickName;
    console.log(username);
    wx.request({
      url: 'http://localhost:8080/post/login',
      method:'POST',
      data:{
        userName:username
      },
      success(res){
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500
        })
      }
    })
    wx.switchTab({
      url: '/pages/Home/Home'
    })
  },
  login: function (){
    wx.login({
      success:function(res){
        var code = res.code;
        if(code){
          console.log("用户登录凭证:"+code);
          wx.request({
            url: 'http://127.0.0.1:8080/login/getOpenId',
            data:{code:code},
            success:function(res){
              console.log("获取到openid："+res);
            }
          })
        }else{
          console.log("获取登录凭证失败:"+res.errMsg);
        }
      }
    })
  },
  passwordLogin:function(){
    var account = this.data.account;
    var password = this.data.password;
    console.log(account);
    console.log(password);
    if(account == 'admin' && password == '123456'){
      wx.switchTab({
        url: '/pages/Admin/Admin',
      })
    }
    wx.navigateTo({
      url: '/pages/Admin/Admin',
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