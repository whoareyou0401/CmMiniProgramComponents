// components/bindPhone/bindPhone.js
var util = require('../myUtils/util.js')
var micro_timer;
function countdown4micro(that, second) {
  var second = that.data.second
  if (second <= 0) {
    that.setData({
      send_btn_name: '获取验证码',
      second: second
    })
  } else {
    micro_timer = setTimeout(function () {
      that.setData({
        second: second - 1,
        send_btn_name: second + '秒后重发'
      });
      countdown4micro(that, second);
    }
      , 1000)
  }
}
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    top: {
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
    sending: 0,
    send_btn_name: '获取验证码',
    second: 120,
    show_phone: false,
    phone:''
  },
  methods: {
    // 这里是一个自定义方法
    submitPhone:function(e){
      var phone = e.detail.value.phone
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (phone.length == 0) {
        wx.showToast({
          title: '手机号不能为空',
        })
        return;
      }
      if (!myreg.test(phone) || phone.length != 11) {
        util.showMsg('手机号格式不正确', '');
        return;
      }
      if (e.detail.target.dataset.do == 0) {
        this.setData({
          sending: 1
        })
        countdown4micro(this, 120)
      }
      this.setData({
        phone: phone,
        show_phone: true
      })
      this.triggerEvent('sendcode', e.detail.value)
    },
    submitPhoneCode: function (e) {
      console.log(e)
      this.triggerEvent('sendphonecode', e.detail, { bubbles: true, composed: true })
    },
  }
})
