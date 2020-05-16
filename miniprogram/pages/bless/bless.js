var api = require('../../api/api.js')
const app = getApp()
const {imageHost} = api

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    chatList: [],
    zanLog: [],
    lineHeight: 24,
    functionShow: false,
    emojiShow: false,
    comment: '',
    focus: false,
    cursor: 0,
    _keyboardShow: false,
    emojiSource: imageHost +'common/emoji-sprite.png',
    parsedComment: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const emojiInstance = this.selectComponent('.mp-emoji')
    this.emojiNames = emojiInstance.getEmojiNames()
    this.parseEmoji = emojiInstance.parseEmoji

    wx.getUserInfo({
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
    this.getPraiseList()
    this.getCommentList()
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '获取 openid 失败，请检查是否有部署 login 云函数',
        })
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getPraiseList(),
    this.getCommentList()
  },
  // 获取评论列表
  getCommentList: function () {
    const db = wx.cloud.database()
    db.collection('bless-list').get({
      success: res => {
        this.setData({
          chatList: res.data
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
      }
    })
  },
  // 获取赞列表
  getPraiseList: function () {
    const db = wx.cloud.database()
    db.collection('zan-list').get({
      success: res => {
        wx.hideToast()
        this.setData({
          zanLog: res.data
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
      }
    })
  },
  loadMoreFriends: function (e) {
    wx.navigateTo({
      url: 'blessDetail/blessDetail'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '诚意邀请你参加我们的婚礼',
      imageUrl: `${imageHost}/logo.jpg`,
      path: "pages/splash/splash",
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
  zan: function (event) {
    const { nickName, avatarUrl } = this.data.userInfo;
    const db = wx.cloud.database()
    db.collection('zan-list').where({
      _openid: app.globalData.openId
    }).get({
      success: res => {
        console.log(res)
        if(res && res.data.length === 0) {
          db.collection('zan-list').add({
            data: { nickName, avatarUrl, 'openId': app.globalData.openId },
            success: res => {
              wx.showToast({
                title: '留言成功',
              })
              this.getPraiseList()
            },
            fail: err => {
              wx.showToast({
                icon: 'none',
                title: '新增记录失败'
              })
            }
          })
        }else{
          wx.showToast({
            icon: 'none',
            title: '您已送过幸福！'
          })
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
    
  },
  foo: function () {
    const {nickName, avatarUrl} = this.data.userInfo;
    const {chatList, parsedComment} = this.data;
    const db = wx.cloud.database()
    const addObj = { nickName, avatarUrl, 'comment': parsedComment, 'openId': app.globalData.openId, time: new Date().toLocaleString() }
    db.collection('bless-list').add({
      data: addObj,
      success: res => {
        this.setData({
          chatList: [...chatList, addObj]
        })
        wx.showToast({
          title: '留言成功',
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
      }
    })
  },

  //表情操作方法
  onkeyboardHeightChange(e) {
    const {height} = e.detail
    console.log(height)
    this.setData({
      keyboardHeight: height - 56
    })
  },

  hideAllPanel() {
    this.setData({
      functionShow: false,
      emojiShow: false
    })
  },
  showEmoji() {
    this.setData({
      functionShow: false,
      emojiShow: this.data._keyboardShow || !this.data.emojiShow
    })
  },
  showFunction() {
    this.setData({
      functionShow: this.data._keyboardShow || !this.data.functionShow,
      emojiShow: false
    })
  },
  chooseImage() {},
  onFocus() {
    this.data._keyboardShow = true
    this.hideAllPanel()
  },
  onBlur(e) {
    this.data._keyboardShow = false
    this.data.cursor = e.detail.cursor || 0
  },
  onInput(e) {
    const value = e.detail.value
    this.data.comment = value
  },
  onConfirm() {
    this.onsend()
  },
  insertEmoji(evt) {
    const emotionName = evt.detail.emotionName
    const { cursor, comment } = this.data
    const newComment =
      comment.slice(0, cursor) + emotionName + comment.slice(cursor)
    this.setData({
      comment: newComment,
      cursor: cursor + emotionName.length
    })
  },
  onsend() {
    const comment = this.data.comment
    if(comment.trim() === '') {
      wx.showToast({
        icon: 'none',
        title: '您还没有填写内容'
      })
      return
    }
    const parsedComment = this.parseEmoji(this.data.comment)
    this.setData({
      parsedComment,
      comment: ''
    },()=>{
      this.hideAllPanel()
      this.foo()
    })
  },
  deleteEmoji: function() {
    const pos = this.data.cursor
    const comment = this.data.comment
    let result = '',
      cursor = 0

    let emojiLen = 6
    let startPos = pos - emojiLen
    if (startPos < 0) {
      startPos = 0
      emojiLen = pos
    }
    const str = comment.slice(startPos, pos)
    const matchs = str.match(/\[([\u4e00-\u9fa5\w]+)\]$/g)
    // 删除表情
    if (matchs) {
      const rawName = matchs[0]
      const left = emojiLen - rawName.length
      if (this.emojiNames.indexOf(rawName) >= 0) {
        const replace = str.replace(rawName, '')
        result = comment.slice(0, startPos) + replace + comment.slice(pos)
        cursor = startPos + left
      }
      // 删除字符
    } else {
      let endPos = pos - 1
      if (endPos < 0) endPos = 0
      const prefix = comment.slice(0, endPos)
      const suffix = comment.slice(pos)
      result = prefix + suffix
      cursor = endPos
    }
    this.setData({
      comment: result,
      cursor: cursor
    })
  }
})