// pages/orderpage/orderPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomLineLeft:43,
    showList: [
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-16 10:01",
        totalPrice: "总价：￥15",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-11 10:02",
        totalPrice: "总价：￥10.5",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "心灵鸡排",
        imgUrl: "/icon/business2.png",
        date: "下单时间：2020-06-05 18:56",
        totalPrice: "总价：￥27.9",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-11 10:02",
        totalPrice: "总价：￥10.5",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "心灵鸡排",
        imgUrl: "/icon/business2.png",
        date: "下单时间：2020-06-05 18:56",
        totalPrice: "总价：￥27.9",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },{
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-16 10:01",
        totalPrice: "总价：￥15",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      }
    ],
    allList: [
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-16 10:01",
        totalPrice: "总价：￥15",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-11 10:02",
        totalPrice: "总价：￥10.5",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "心灵鸡排",
        imgUrl: "/icon/business2.png",
        date: "下单时间：2020-06-05 18:56",
        totalPrice: "总价：￥27.9",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-11 10:02",
        totalPrice: "总价：￥10.5",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },
      {
        business: "心灵鸡排",
        imgUrl: "/icon/business2.png",
        date: "下单时间：2020-06-05 18:56",
        totalPrice: "总价：￥27.9",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      },{
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2020-06-16 10:01",
        totalPrice: "总价：￥15",
        status: "已完成",
        again: true,
        commit: false,
        refundStatus: false
      }
    ],
    unpaidList: [

    ],
    unusedList: [

    ],
    uncommitList: [
      {
        business: "风格美学工作室-男士洗剪吹",
        imgUrl: "/icon/business3.png",
        date: "有效期至：2019-08-04",
        num: 1,
        totalPrice: "总价：￥27.00",
        status: "待评价",
        again: false,
        commit: true,
        refundStatus: false
      },
      {
        business: "杰美造型-人气洗剪吹",
        imgUrl: "/icon/business4.png",
        date: "有效期至：2019-09-09",
        num: 1,
        totalPrice: "总价：￥38.00",
        status: "待评价",
        again: false,
        commit: true,
        refundStatus: false
      },
      {
        business: "慕佳精品西餐咖啡代金券",
        imgUrl: "/icon/business5.png",
        date: "有效期至：2019-08-04",
        num: 1,
        totalPrice: "总价：￥90",
        status: "待评价",
        again: false,
        commit: true,
        refundStatus: false
      }
    ],
    refundList: [
      {
        business: "华润万家",
        imgUrl: "/icon/business1.png",
        date: "下单时间：2019-04-10 12:59",
        num: 1,
        totalPrice: "总价：￥11.39",
        status: "退款成功",
        again: true,
        commit: false,
        refundStatus: true
      },
      {
        business: "叫了只炸鸡",
        imgUrl: "/icon/business6.png",
        date: "下单时间：2020-01-23 23:20",
        totalPrice: "总价：￥19.2",
        status: "退款成功",
        again: true,
        commit: false,
        refundStatus: true
      },
      {
        business: "华莱士",
        imgUrl: "/icon/business7.png",
        date: "下单时间：2018-06-16 19:23",
        totalPrice: "总价：￥47.38",
        status: "退款成功",
        again: true,
        commit: false,
        refundStatus: true
      }
    ]
  },

  all(){
    console.log('点击了全部订单')
    let allList = this.data.allList
    this.setData({
      showList: allList,
      bottomLineLeft: 43
    })
  },
  unpaid(){
    console.log('点击了待付款')
    let unpaidList = this.data.unpaidList
    this.setData({
      showList: unpaidList,
      bottomLineLeft: 192
    })
  },
  unused(){
    console.log('点击了待使用')
    let unusedList = this.data.unusedList
    this.setData({
      showList: unusedList,
      bottomLineLeft: 328
    })
  },
  uncommit(){
    console.log('点击了待评价')
    let uncommitList = this.data.uncommitList
    this.setData({
      showList: uncommitList,
      bottomLineLeft: 465
    })
  },
  refund(){
    console.log('点击了退款/售后')
    let refundList = this.data.refundList
    this.setData({
      showList: refundList,
      bottomLineLeft: 622
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