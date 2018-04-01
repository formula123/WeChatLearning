//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../Resources/Images/swiper_2.jpg',
      '../../Resources/Images/swiper_3.jpg',
      '../../Resources/Images/swiper_1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  
  }
})
