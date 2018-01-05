// components/selectImages/selectImages.js
var util = require('../myUtils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    iconImage:{
      type: String,
      value: '../images/selectImage/addImage.jpg'
    },
    containerStyle:{
      type: String
    },
    imageStyle:{
      type: String
    },
    deleteIconStyle:{
      type: String
    }
  },
  attached: function () {
    var img = this.data.iconImage
    this.setData({
      images: [img]
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    images:[],
    commit_images: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    deleteImage: function (e) {
      var that = this
      var index = parseInt(e.currentTarget.dataset.m_index);
      var images = this.data.images;
      var commit_images = this.data.commit_images
      var new_images = util.del(images, index)
      this.setData({
        images: new_images,
        commit_images: new_images.slice(0, (new_images.length - 1))
      })
      console.log('shjakhdjkh')
      this.triggerEvent('deleteimage', { 'images': that.data.commit_images, 'selectTarget': e.target })
    },
    selectImage: function (e) {
      var index = parseInt(e.currentTarget.dataset.imageid);
      
      if ((index + 1) == this.data.images.length) {
        var that = this;
        var commit_images = this.data.commit_images;
        if (commit_images.length>0){
          commit_images = util.del(commit_images, index)
        }
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], 
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            var tmps = commit_images.concat(tempFilePaths);
            that.setData({
              commit_images: tmps
            })
            tmps.push('../images/selectImage/addImage.jpg')
            that.setData({
              images: tmps
            })
            that.triggerEvent('selectimage', { 'images': util.del(that.data.commit_images, that.data.commit_images.length - 1), 'selectTarget': e.target })
          }
        })
      } else {
        var image = this.data.images[index]
        wx.previewImage({
          current: image, // 当前显示图片的http链接
          urls: this.data.images // 需要预览的图片http链接列表
        })
      }
      
    },
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
