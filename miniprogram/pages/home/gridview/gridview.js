// pages/home/gridview/gridview.js 
var api = require('../../../api/api.js')
const { imageHost } = api
var id = ''
var imgUrl1 = [
  `${imageHost}Z1802250033_072.jpg`,
  `${imageHost}Z1802250033_009.jpg`,
  `${imageHost}Z1802250033_013.jpg`,
  `${imageHost}Z1802250033_014.jpg`,
  `${imageHost}Z1802250033_017.jpg`,
  `${imageHost}Z1802250033_020.jpg`,
  `${imageHost}Z1802250033_021.jpg`,
  `${imageHost}Z1802250033_070.jpg`,
  `${imageHost}Z1802250033_082.jpg`
]
var imgUrl2 = [
  `${imageHost}Z1802250033_024.jpg`,
  `${imageHost}Z1802250033_027.jpg`,
  `${imageHost}Z1802250033_033.jpg`,
  `${imageHost}Z1802250033_038.jpg`,
  `${imageHost}Z1802250033_039.jpg`,
  `${imageHost}Z1802250033_040.jpg`
]
var imgUrl3 = [
  `${imageHost}Z1802250033_046.jpg`,
  `${imageHost}Z1802250033_053.jpg`,
  `${imageHost}Z1802250033_058.jpg`,
  `${imageHost}Z1802250033_060.jpg`,
  `${imageHost}Z1802250033_061.jpg`,
  `${imageHost}Z1802250033_064.jpg`  
]
var imgUrl4 = [
  `${imageHost}Z1802250033_129.jpg`,
  `${imageHost}Z1802250033_130.jpg`,
  `${imageHost}Z1802250033_131.jpg`,
  `${imageHost}Z1802250033_133.jpg`,
  `${imageHost}Z1802250033_137.jpg`,
  `${imageHost}Z1802250033_140.jpg`,
  `${imageHost}Z1802250033_145.jpg`
]
var imgUrl5 = [
  `${imageHost}Z1802250033_098.jpg`,
  `${imageHost}Z1802250033_108.jpg`,
  `${imageHost}Z1802250033_114.jpg`,
  `${imageHost}Z1802250033_115.jpg`,
  `${imageHost}Z1802250033_121.jpg`,
  `${imageHost}Z1802250033_122.jpg`
]
var imgUrl6 = [
  `${imageHost}Z1802250033_074.jpg`,
  `${imageHost}Z1802250033_075.jpg`,
  `${imageHost}Z1802250033_076.jpg`,
  `${imageHost}Z1802250033_079.jpg`
]
var imgUrl7 = [
  `${imageHost}Z1802250033_084.jpg`,
  `${imageHost}Z1802250033_086.jpg`,
  `${imageHost}Z1802250033_087.jpg`,
  `${imageHost}Z1802250033_092.jpg`,
  `${imageHost}Z1802250033_094.jpg`
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[]
  },
  /** 
   * 预览图片
   */
  previewImage: function(e) {
    var current = e.target.dataset.src;
    if (id == '欧洲风情') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl1 // 需要预览的图片http链接列表
      })
    } else if (id == '教堂'){
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl2 // 需要预览的图片http链接列表
      })
    } else if (id == '小清新') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl3 // 需要预览的图片http链接列表
      })
    } else if (id == '中国风') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl4 // 需要预览的图片http链接列表
      })
    } else if (id == '韩国风') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl5 // 需要预览的图片http链接列表
      })
    } else if (id == '游艇') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl6 // 需要预览的图片http链接列表
      })
    } else if (id == '夜景') {
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: imgUrl7 // 需要预览的图片http链接列表
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    id = options.id
    console.log('options.id:' + options.id)
    if (id == '欧洲风情') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_072.jpg`,
            desc: '喜欢是解你的衣扣'
          },
          {
          imgUrl: `${imageHost}Z1802250033_009.jpg`,
          desc: '爱是解你的风情'
          },
          {
            imgUrl: `${imageHost}Z1802250033_013.jpg`,
            desc: '对世界而言你只是一个人'
          },
          {
            imgUrl: `${imageHost}Z1802250033_014.jpg`,
            desc: '对于我而言你是整个世界'
          },
          {
            imgUrl: `${imageHost}Z1802250033_017.jpg`,
            desc: '幸福时光，爱在进行中！'
          },
          {
            imgUrl: `${imageHost}Z1802250033_020.jpg`,
            desc: '风雨同舟，白头偕老！'
          },
          {
            imgUrl: `${imageHost}Z1802250033_021.jpg`,
            desc: '喜欢是“想靠近”'
          },
          {
            imgUrl: `${imageHost}Z1802250033_022.jpg`,
            desc: '爱是“离不开”'
          },
          {
            imgUrl: `${imageHost}Z1802250033_070.jpg`,
            desc: '一屋两人三餐四季'
          },
          {
            imgUrl: `${imageHost}Z1802250033_082.jpg`,
            desc: '所有的爱都是冒险，那就心甘情愿'
          }

        ]
      });
    } else if (id == '教堂') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_024.jpg`,
            desc: '那件层层叠叠轻纱弥漫，缀满软缎织就的玫瑰和宝石拼镶的婚纱，是对爱情的期盼，是对幸福的憧憬'
          },
          {
            imgUrl: `${imageHost}Z1802250033_027.jpg`,
            desc: '曾经哭过笑过，因为恋爱最痴傻，如今西服婚纱，把你迎娶到家，从此天涯携手在一起，开心相伴不分离，愿真爱永远伴着你我，走过人生波折坎坷'
          },
          {
            imgUrl: `${imageHost}Z1802250033_033.jpg`,
            desc: '那一件薄薄的婚纱，承载着我们许多的梦想和希望'
          },
          {
            imgUrl: `${imageHost}Z1802250033_038.jpg`,
            desc: '橱窗前，婚纱膨胀着莹洁而纯净的光，这些附着在新娘身上的物什，仿佛生来就沾染了贵族气息，隐隐含着不可一世的傲慢与神圣'
          },
          {
            imgUrl: `${imageHost}Z1802250033_039.jpg`,
            desc: '今夜，我枕着甜甜的期盼入梦梦中，这份期盼依着夜色与飘逸的雪花共舞而越发盈峦!我仿佛看到，在雪花斑斓的光影中，你带着如雪一样洁白的婚纱越过千山万水深情款款的向我走来'
          },
          {
            imgUrl: `${imageHost}Z1802250033_040.jpg`,
            desc: '无数次想像自己为了最爱的人穿上婚纱的曼妙与美丽一定有着被幸福晕红了如苹果般的脸宠，一定有着被爱陶醉了如星子般的眼眸……'
          }

        ]
      });
    } else if (id == '小清新') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_046.jpg`,
            desc: '不在一起就不在一起吧'
          },
          {
            imgUrl: `${imageHost}Z1802250033_053.jpg`,
            desc: '反正一辈子也没多长'
          },
          {
            imgUrl: `${imageHost}Z1802250033_058.jpg`,
            desc: '说不出来为什么爱你'
          },
          {
            imgUrl: `${imageHost}Z1802250033_060.jpg`,
            desc: '你就是我不爱别人的理由'
          },
          {
            imgUrl: `${imageHost}Z1802250033_061.jpg`,
            desc: '哭着吃过饭的人'
          },
          {
            imgUrl: `${imageHost}Z1802250033_064.jpg`,
            desc: '是能够走下去的'
          }

        ]
      });
    } else if (id == '中国风') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_129.jpg`,
            desc: '不敢和你对视'
          },
          {
            imgUrl: `${imageHost}Z1802250033_130.jpg`,
            desc: '我怕自己的每个眼神，都像是在表白'
          },
          {
            imgUrl: `${imageHost}Z1802250033_131.jpg`,
            desc: '“我最近吃素”'
          },
          {
            imgUrl: `${imageHost}Z1802250033_133.jpg`,
            desc: '“为什么吃素？”'
          },
          {
            imgUrl: `${imageHost}Z1802250033_137.jpg`,
            desc: '“因为你是我的菜”'
          },
          {
            imgUrl: `${imageHost}Z1802250033_140.jpg`,
            desc: '“你知道我是干大事的男人吗？”'
          },
          {
            imgUrl: `${imageHost}Z1802250033_145.jpg`,
            desc: '“什么大事？”“你就是我的大事。'
          }
        ]
      });
    } else if (id == '韩国风') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_098.jpg`,
            desc: '我们慢慢来，余生请指教'
          },
          {
            imgUrl: `${imageHost}Z1802250033_108.jpg`,
            desc: '人生很长'
          },
          {
            imgUrl: `${imageHost}Z1802250033_114.jpg`,
            desc: '独自一人也能走完'
          },
          {
            imgUrl: `${imageHost}Z1802250033_115.jpg`,
            desc: '但如果多了你的陪伴'
          },
          {
            imgUrl: `${imageHost}Z1802250033_121.jpg`,
            desc: '将是想想都觉得美好的事情'
          },
          {
            imgUrl: `${imageHost}Z1802250033_122.jpg`,
            desc: '百岁之好，一言为定'
          }
        ]
      });
    } else if (id == '游艇') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_074.jpg`,
            desc: '一生一世一双人'
          },
          {
            imgUrl: `${imageHost}Z1802250033_075.jpg`,
            desc: '喜欢我暗恋我的都散了吧，有主了有主了'
          },
          {
            imgUrl: `${imageHost}Z1802250033_076.jpg`,
            desc: '从今以后就一起建设社会主义了！'
          },
          {
            imgUrl: `${imageHost}Z1802250033_079.jpg`,
            desc: '喏，就是这个人打乱了我孤独终老的计划'
          }
        ]
      });
    } else if (id == '夜景') {
      that.setData({
        imgUrls: [
          {
            imgUrl: `${imageHost}Z1802250033_086.jpg`,
            desc: '望与你一夫一妻一儿一女一猫一狗一生一世'
          },
          {
            imgUrl: `${imageHost}Z1802250033_087.jpg`,
            desc: '我想要带你去浪漫的土耳其然后一起去东京和巴黎。'
          },
          {
            imgUrl: `${imageHost}Z1802250033_092.jpg`,
            desc: '一整个宇宙，换一颗红豆'
          },
          {
            imgUrl: `${imageHost}Z1802250033_094.jpg`,
            desc: '2012年2月14日开始相恋，中间虽然有各种坎坷，但还是坚持下来了。今天终于结束了漫长的爱情长跑，愿我们以后互相包容，理解，创建一个美满家庭。'
          }
        ]
      });
    } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})