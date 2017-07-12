const requestUrl = require('../../../config').requestUrl
const esUrl = require('../../../config').esUrl
const uploadFileUrl = require('../../../config').uploadFileUrl
const duration = 2000

Page({
  data: {
    list:{},
    userInfo:{}   
  },
  onReady: function(){
    let me=this
    wx.getUserInfo({
      success: function (res) {
        me.setData({
          userInfo: res.userInfo
        })
      }
    })   
  },

  formSubmit: function (e) {    
    let that=this
    this.data.list = e.detail.value
    this.data.list['usr'] = this.data.userInfo

    console.log('form发生了submit事件，携带数据为：', JSON.stringify(this.data.list))
    wx.request({
      url: esUrl + "log.miniapp",
      data: that.data.list,
      method: "POST",
      success: function (result) {             
        console.log('request success', result)
        if (result.data.result){
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateBack() 
        } else{
          wx.showToast({
            title: '提交失败' + result.data.errmsg,            
            duration: 2000
          })
        }
      },

      fail: function ({errMsg}) {
        console.log('request fail', errMsg)   
      }
    })
  }  
})
