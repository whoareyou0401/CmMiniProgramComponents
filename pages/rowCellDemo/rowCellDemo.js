// pages/rowCellDemo/rowCellDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{ 'image': '../images/icon/rejected-order.png', 'title': '我的订单', 'content': '5个' },{ 'image': '../images/icon/phone.png', 'title': '手机号', 'content': ''},
      { 'image': '../images/icon/map.png', 'title': '我的地址', 'content': '' }],
    w_height:0
  },
  phone:function(){
    wx.makePhoneCall({
      phoneNumber: '13366026441' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          w_height: res.windowHeight
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