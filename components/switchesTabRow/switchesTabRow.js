// components/swichesTabRow/swichesTabRow.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    switches:{
      type: Array,
      value: ['选项一', '选项二', '选项三', '选项四',  '选项五', '选项六' ]
    },
    top:{
      type: String
    },
    cellWidth:{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },
  attached: function () {
    var switches = this.data.switches;
    var tmp = []
    for (var i = 0; i < switches.length;i++){
      if (i == 0){
        tmp.push({ 'name': switches[i], 'select': true})
      } else {
        tmp.push({ 'name': switches[i], 'select': false})
      }
      this.setData({
        switches: tmp
      })
    }
   },
  /**
   * 组件的方法列表
   */
  methods: {
    select:function(e){
      var index = e.target.dataset.select_id
      var switches = this.data.switches;
      for (var i = 0; i < switches.length; i++) {
        if (i == index) {
          switches[i]['select'] = true
         
        } else {
          switches[i]['select'] = false
        }
        this.setData({
          switches: switches
        })
      }
      this.triggerEvent('selected', { 'selectDetail': e.detail, 'selectTarget': e.target})
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