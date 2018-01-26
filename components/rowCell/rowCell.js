// components/rowCell/rowCell.js
Component({
  properties: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    containorStyle: {
      type: String
    },
    url:{
      type: String
    }
  },
  data: {
   
  },
  methods: {
    submitPhone: function (e) {
      this.triggerEvent('sendcode', e.detail.value)
    },
    submitPhoneCode: function (e) {
      this.triggerEvent('sendphonecode', e.detail)
    },
  }
})
