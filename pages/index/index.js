// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    banner:[
      '../../images/index/banner1.png','../../images/index/banner1.png','../../images/index/banner1.png'
    ]
  },
  strategy: function(){
    wx.navigateTo({
      url: '/pages/strategy/strategy',
    })
  },
  experience: function(){
    wx.navigateTo({
      url: '/pages/experience/experience',
    })
  },
  study: function(){
    wx.navigateTo({
      url: '/pages/study/study',
    })
  },
  forum: function(){
    wx.navigateTo({
      url: '/pages/forum/forum',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})