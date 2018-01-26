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
