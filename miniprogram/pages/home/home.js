var api = require('../../api/api.js')
var app = getApp()
const {imageHost} = api

Page({
  data: {
    imgUrls: [
      {
        imgUrl: `${imageHost}Z1802250033_012.jpg`,
        type: '欧洲风情'
      },
      {
        imgUrl: `${imageHost}Z1802250033_037.jpg`,
        type: '教堂'
      },
      {
        imgUrl: `${imageHost}Z1802250033_063.jpg`,
        type: '小清新'
      },
      {
        imgUrl: `${imageHost}Z1802250033_145.jpg`,
        type: '中国风'
      },
      {
        imgUrl: `${imageHost}Z1802250033_116.jpg`,
        type: '韩国风'
      },
      {
        imgUrl: `${imageHost}Z1802250033_077.jpg`,
        type: '游艇'
      },
      {
        imgUrl: `${imageHost}Z1802250033_093.jpg`,
        type: '夜景'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2600,
    duration: 1200,
    userInfo: {},
    isPlayingMusic: true,
    swiperHeight:0,
    music_url: imageHost+'music/later.mp3',
    imageHost
  },
  //生命周期函数--监听页面加载
  onLoad: function() {
    var that = this;
    wx.showLoading('loading')
    wx.playBackgroundAudio({
      dataUrl: this.data.music_url,
      title: '',
      coverImgUrl: ''
    })

  },
  onReady: function () {
    wx.hideLoading();
  },
  onShareAppMessage: function () {
    var that = this;
    //console.log(that.data);
    return {
      title: '诚意邀请你参加我们的婚礼',
      imageUrl: `${imageHost}/logo.jpg`,
      path: "pages/index/index",
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  // 每条List点击事件
  jump: function(e) {
    let id = e.currentTarget.dataset.id
    console.debug(id)
    console.log("id:", id)
    wx.navigateTo({
      url: 'gridview/gridview?id=' + id,
    })
  },
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth-20; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      swiperHeight: swiperH//设置高度
    })
  },
  play: function(event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      console.log('this.data.music_url', this.data.music_url)
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }
})