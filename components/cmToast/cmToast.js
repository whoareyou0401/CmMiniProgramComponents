// components/cmToast/cmToast.js
var util = require('../myUtils/util.js')

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: 'title设置显示内容'
    },
    iconUrl: {
      type: String,
      value: '',
    },
    confirmText:{
      type: String,
      value:'confirmText属性值'
    }
  },
  data: {
    
  },
  methods: {
    // 这里是一个自定义方法
    confirm: function (e) {
      this.triggerEvent('confirm', e.detail)
    },
  }
})