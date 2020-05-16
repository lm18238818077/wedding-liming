Page({
  data: {
    markers: [{
      id: 0,
      latitude: 36.767645,
      longitude: 112.705698,
      width: 50,
      height: 50,
      title:'男方家'
    }]
  },
  markertap(e) {
    wx.openLocation({
      latitude: 36.761085,
      longitude: 112.699267,
      scale: 18,
      name: '小明家',
      address: '山西省长治市沁县定昌镇范家道'
    })
  },
  controltap(e) {
    console.log(e.controlId)
  }
})