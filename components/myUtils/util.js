const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function showMsg(msg, url) {
  wx.showModal({
    title: '提示',
    content: msg,
    success: function (res) {
      if (res.confirm && url != '') {
        wx.redirectTo({
          url: url
        })
      }
    }
  })
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function del(array, index) {
  var first = array.slice(0, index);
  var end = array.slice(index + 1, array.length)
  return first.concat(end)
}
function cmUploadImages(url, form_data, filePaths, successUp, failUp, i, length, uploadFileName) {
  if (filePaths.length == 0) {

    if (wx.canIUse('showToast')) {
      wx.showToast({
        title: '上传成功',
      })
    }
    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      })
    }, 1500);
    return;
  }
  wx.uploadFile({
    url: url,
    filePath: filePaths[i],
    name: uploadFileName,
    formData: form_data,
    success: (resp) => {
      if (wx.canIUse('showLoading')) {
        wx.hideLoading()
      }
      successUp++;
      if (successUp == length) {
        util.showMsgBack('上传成功')
      }
      var json_data = JSON.parse(resp.data);
      if (json_data.code == 0) {

      }
    },
    fail: (res) => {
      if (wx.canIUse('showLoading')) {
        wx.hideLoading()
      }
      failUp++;
    },
    complete: () => {
      i++;
      if (i == length) {
        if (wx.canIUse('showLoading')) {
          wx.hideLoading()
        }
        if (wx.canIUse('showToast')) {
          wx.showToast({
            title: '上传成功',
          })
        }
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          })
        }, 1500);
        return;
      }
      else {  //递归调用cmUploadImages函数
        cmUploadImages(url, form_data, filePaths, successUp, failUp, i, length, uploadFileName);
      }
    },
  });
}

module.exports = {
  formatTime: formatTime,
  cmUploadImages: cmUploadImages,
  del: del,
  showMsg: showMsg
}
