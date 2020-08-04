// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomLineLeft:162,
    showList: [
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596553628419&di=f8b17d0036c6a862a96af3060c71934d&imgtype=0&src=http%3A%2F%2Fstc-new.8531.cn%2Fassets%2F20181004%2F1538608345744_5bb54cd9159bb839d07c79b9.jpeg",
        business: "走进天然氧吧，相约方塘农家！皖南川藏线&精品标准间",
        distance: "342.4km",
        stars: 0,
        price: false,
        num: 0,
        type: "民宿"
      },
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596553660417&di=4df37c27f98cc1d8dd9e0c8986cfbb7c&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FP-dzGR-ZfJicy95l3UTXe20tNcDGmFG5eTdF_ZUY7_zmNvxHXc5fTmTa-7OA_59gjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg",
        business: "IDO造型（红谷滩万达店）",
        distance: "3.7km",
        stars: 5,
        price: true,
        num: 247,
        type: "美发"
      },
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596553710379&di=7e061bb701e915ef07996c481104b151&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2F9qquJbJi3kt3EBoQctM52vL50x3fAcgpMTcPlWB4HCPt4TSU1KAULxz_8F_WZU2aTYGVDmosZWTLal1WbWRW3A.jpg",
        business: "TG hair salon（红谷滩万达店）",
        distance: "3.7km",
        stars: 5,
        price: true,
        num: 209,
        type: "美发"
      },
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596553740945&di=4d6e65c235d360e4818197c5ae4ba7b2&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw300h313%2F20180124%2Fa074-fyqwiqk0457995.jpg",
        business: "赫本造型（乐盈广场店）",
        distance: "2.9km",
        stars: 5,
        price: true,
        num: 121,
        type: "美发"
      },
      {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596553774414&di=fbd1e8d9027d816340eda1722c0eaee2&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FMuyODV3RjuM1GgXjzfrc0eUOMjhMFEqBW7BP96dwy59LEw4bJRr9m6L_LKNNFAG_TYGVDmosZWTLal1WbWRW3A.jpg",
        business: "秀阁造型",
        distance: "1.9km",
        stars: 5,
        price: false,
        num: 0,
        type: "美发"
      }
    ],
    businessList: [
      {
        url: "",
        business: "走进天然氧吧，相约方塘农家！皖南川藏线&精品标准间",
        distance: "342.4km",
        stars: 0,
        price: false,
        num: 0,
        type: "民宿"
      },
      {
        url: "",
        business: "IDO造型（红谷滩万达店）",
        distance: "3.7km",
        stars: 5,
        price: true,
        num: 247,
        type: "美发"
      },
      {
        url: "",
        business: "TG hair salon（红谷滩万达店）",
        distance: "3.7km",
        stars: 5,
        price: true,
        num: 209,
        type: "美发"
      },
      {
        url: "",
        business: "赫本造型（乐盈广场店）",
        distance: "2.9km",
        stars: 5,
        price: true,
        num: 121,
        type: "美发"
      },
      {
        url: "",
        business: "秀阁造型",
        distance: "1.9km",
        stars: 5,
        price: false,
        num: 0,
        type: "美发"
      }
    ],
    goodsList:[

    ]
  },

  business(){
    console.log('点击了商家')
    let businessList = this.data.businessList
    this.setData({
      showList: businessList,
      bottomLineLeft: 162
    })
  },
  goods(){
    console.log('点击了商品')
    let goodsList = this.data.goodsList
    this.setData({
      showList: goodsList,
      bottomLineLeft: 537
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