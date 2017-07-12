const requestUrl = require('../../config').requestUrl
const duration = 2000

Page({
  data: {
    items: [],
    s: ''
  },
  onShow: function () {
    this.makeRequest()
  },
  onPullDownRefresh:function(){
    this.makeRequest()
    wx.stopPullDownRefresh()
  },
  logc: function () {
    wx.navigateTo({ url: 'logc/logc' })
  },
  bindKeyInput: function (e) {
    this.setData({
      s: e.detail.value
    })
    this.makeRequest()
  },
  makeRequest: function () {
    var self = this

    self.setData({
      loading: true
    })
    console.log('request url', requestUrl)
    wx.request({
      url: requestUrl + "log.miniapp",
      data: {
        s: this.data.s
      },
      success: function (result) {
        self.setData({
          items: result.data
        })
        console.log('request success', result)
      },

      fail: function ({errMsg}) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})
