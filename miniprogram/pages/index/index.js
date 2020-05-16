//index.js

const app = getApp()

var api = require('../../api/api.js')

Page({
  data: {
    remind: '加载中',
    imageHost: api.imageHost,
    angle: 0
  },
  onLoad: function () {

  },
  onReady: function () {
    var _this = this;
    setTimeout(function () {
      _this.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (_this.data.angle !== angle) {
        _this.setData({
          angle: angle
        });
      }
    });
  },
  //进入主页面
  goHome: function () {
    wx.switchTab({
      url: '../home/home'
    });
  },
  bindGetUserInfo: function (e) {
    this.goHome();
    console.log('bindGetUserInfo',e.detail.userInfo)
  }
})


