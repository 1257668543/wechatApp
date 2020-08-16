// miniprogram/pages/userPage/userPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userFunctions:[
      {title: '邀请好友', icon: "friends"},
      {title: '我的收藏', icon: "star"},
      {title: '我的评论', icon: "chat"},
      {title: '我的点赞', icon: "good-job"},
      {title: '浏览历史', icon: "underway"}
    ],
    aboutApp:[
      {title: '草稿箱', icon: "column"},
      {title: '用户反馈', icon: "smile"},
      {title: '设置', icon: "setting"}
    ],
    userProfile:[
      {name: '我的创作', num: 0},
      {name: '关注', num: 0},
      {name: '粉丝', num: 0},
      {name: '获赞', num: 0},
    ],
    feymanMoney: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})