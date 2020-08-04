// pages/userPage/userPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myServ: [
      {
        url: "/icon/purchase.png",
        desc: "订单"
      }, {
        url: "/icon/collect.png",
        desc: "收藏"
      },
      {
        url: "/icon/coupon.png",
        desc: "券包"
      }, {
        url: "/icon/vip.png",
        desc: "会员卡"
      }
    ],
    otherServ: [
      {
        url: "/icon/business.png",
        desc: "商家中心"
      }, {
        url: "/icon/free.png",
        desc: "免费领券"
      },
      {
        url: "/icon/tax.png",
        desc: "个税计算器"
      }, {
        url: "/icon/opinion.png",
        desc: "意见反馈"
      }, {
        url: "/icon/rules.png",
        desc: "规则中心"
      }, {
        url: "/icon/gift.png",
        desc: "邀请有礼"
      }
    ]
  },

  // 我的服务按钮对应跳转

  myServ0() {
    wx.switchTab({
      url: '/pages/orderPage/orderPage'
    });
  },
  
  myServ1() {
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
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