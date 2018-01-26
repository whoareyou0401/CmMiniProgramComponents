//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  formSubmit:function(e){
    console.log(e)
  },
  onLoad: function (options) {
    // wx.navigateTo({
    //   url: '../rowCellDemo/rowCellDemo',
    // })
    // wx.connectSocket({
    //   url: 'wss://sharemsg.cn:12348/wss',
    //   data: {
    //     x: 'sdada',
    //     y: 'dsad'
    //   },
    //   header: {
    //     'content-type': 'application/json',
    //     'uid': wx.getStorageSync('token')
    //   },

    // })
    // wx.onSocketOpen(function (res) {
    //   console.log('WebSocket连接已打开！', res)
    //   wx.sendSocketMessage({
    //     data: 'jkhaskd'
    //   })
    // })
    // wx.onSocketError(function (res) {
    //   console.log('WebSocket连接打开失败，请检查！', res)
    // })
    // wx.onSocketMessage(function (res) {
    //   console.log(res)
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }  else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
