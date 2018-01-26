// components/CM-SearchInput/CM-SearchInput.js
Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
      top:{
        type: String,
        value: '0rpx'
      },
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
        // 这里是一个自定义方法
        inputKeyWords: function(e){
          var myEventDetail = e // detail对象，提供给事件监听函数
          var myEventOption = {} // 触发事件的选项
          this.triggerEvent('inputkeywords', myEventDetail.detail)
        }
    }
})
