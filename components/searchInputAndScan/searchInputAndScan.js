// components/searchInputAndScan.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    placeHolderStr: {
      type: String,
      value: '请输入关键字',
    },
    value: {
      type: String
    }
  },
  data: {
    // 这里是一些组件内部数据
    // someData: {}
  },
  methods: {
    scan:function(e){
      this.triggerEvent('scan',e)
    },
    inputKeyWords: function (e) {
      var myEventDetail = e // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('inputkeywords', myEventDetail.detail)
    }
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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