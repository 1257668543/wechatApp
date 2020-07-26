// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actives:[
      {image: '/icon/food.png',
      activeName: '美食',
      color:'#f6c944'},
      {image: '/icon/cateyes.png',
        activeName: '电影/演出',
        color:'#eb4e27'},
      {image: '/icon/hotel.png',
        activeName: '酒店/民宿',
        color:'#985b3c'},
      {image: '/icon/fun.png',
        activeName: '休闲娱乐',
        color:'#57bd9a'},
      {image: '/icon/meituanwaimai.png',
        activeName: '外卖',
        color:'#f5c343'},
    ],
    moreActivies: [
      {image: '/icon/supermarket.png',
      title: '超市便利',
      color:'#f6c944'},
      {image: '/icon/visit.png',
      title: '周边游/旅游',
      color:'#f6c944'},
      {image: '/icon/car.png',
      title: '打车',
      color:'#f6c944'},
      {image: '/icon/run.png',
      title: '跑腿代购',
      color:'#f6c944'},
      {image: '/icon/bike.png',
      title: '骑车',
      color:'#f6c944'},
      {image: '/icon/train.png',
      title: '火车票',
      color:'#f6c944'},
      {image: '/icon/vegetable.png',
      title: '蔬菜水果',
      color:'#f6c944'},
      {image: '/icon/minsu.png',
      title: '民宿/公寓',
      color:'#f6c944'},
      {image: '/icon/hair.png',
      title: '丽人/美发',
      color:'#f6c944'},
    ],
    moreActivies1: [
      {image: '/icon/supermarket.png',
      title: '超市便利',
      color:'#f6c944'},
      {image: '/icon/visit.png',
      title: '周边游/旅游',
      color:'#f6c944'},
      {image: '/icon/car.png',
      title: '打车',
      color:'#f6c944'},
      {image: '/icon/run.png',
      title: '跑腿代购',
      color:'#f6c944'},
      {image: '/icon/bike.png',
      title: '骑车',
      color:'#f6c944'},
      {image: '/icon/train.png',
      title: '火车票',
      color:'#f6c944'},
      {image: '/icon/vegetable.png',
      title: '蔬菜水果',
      color:'#f6c944'},
      {image: '/icon/minsu.png',
      title: '民宿/公寓',
      color:'#f6c944'},
      {image: '/icon/hair.png',
      title: '丽人/美发',
      color:'#f6c944'},
    ],
    moreActivies2: [
      {image: '/icon/supermarket.png',
      title: '超市便利',
      color:'#f6c944'},
      {image: '/icon/visit.png',
      title: '周边游/旅游',
      color:'#f6c944'},
      {image: '/icon/car.png',
      title: '打车',
      color:'#f6c944'},
      {image: '/icon/run.png',
      title: '跑腿代购',
      color:'#f6c944'},
      {image: '/icon/bike.png',
      title: '骑车',
      color:'#f6c944'},
      {image: '/icon/train.png',
      title: '火车票',
      color:'#f6c944'},
      {image: '/icon/vegetable.png',
      title: '蔬菜水果',
      color:'#f6c944'},
      {image: '/icon/minsu.png',
      title: '民宿/公寓',
      color:'#f6c944'},
      {image: '/icon/hair.png',
      title: '丽人/美发',
      color:'#f6c944'},
      {image: '/icon/quan.png',
      title: '免费领券',
      color:'#f6c944'},
      {image: '/icon/parents.png',
      title: '亲子/乐园',
      color:'#f6c944'},
      {image: '/icon/ktv.png',
      title: 'KTV',
      color:'#f6c944'},
      {image: '/icon/sports.png',
      title: '游泳/健身',
      color:'#f6c944'},
      {image: '/icon/marry.png',
      title: '结婚/摄影',
      color:'#f6c944'},
      {image: '/icon/pass.png',
      title: '畅行码',
      color:'#f6c944'},
      {image: '/icon/more.png',
      title: '更多',
      color:'#f6c944'},
    ],
    banners: [
      {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1887077133,428528155&fm=26&gp=0.jpg'},
      {img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1120749596,2531063265&fm=11&gp=0.jpg'},
      {img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2411819467,2552031770&fm=26&gp=0.jpg'},
      {img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2533015720,3320616366&fm=26&gp=0.jpg'},
      {img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1986861299,3519515236&fm=26&gp=0.jpg'},
      {img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1653847011,3732062058&fm=26&gp=0.jpg'},
      {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3127462374,1578645209&fm=26&gp=0.jpg'},
      {img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2340940098,583321155&fm=26&gp=0.jpg'},
      {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=230566004,3595917731&fm=26&gp=0.jpg'},
    ],
    bottomShop:[
      {image:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1573848844,97076657&fm=26&gp=0.jpg',
        title:'香酥大鸡腿',
        price:99,
        prPrice:288,
        type:'美食团'
    },
    {image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3230719735,502661653&fm=26&gp=0.jpg',
        title:'蜗牛之家',
        price:0.5,
        prPrice:10000,
        type:'宠物团'
    }
    ],
    shopDec:[
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场的隔壁街的左转弯路口红绿灯处',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3180148121,1131524283&fm=26&gp=0.jpg',
      title:'聚味阁北京烤鸭',
      position:'地铁东城广场',
      price:18,
      sty:'北京菜',
      km:2.1,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
      {img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2088370063,1298854819&fm=26&gp=0.jpg',
      title:'CoCo都可 珍珠奶茶',
      position:'地铁东城广场',
      price:18,
      sty:'甜点饮品',
      km:4.5,
      num:500},
    ],

    isHide:true
  },

  explor(){
    let moreActivies = this.data.moreActivies2
    this.setData({
      moreActivies: moreActivies,
      isHide: false
    })
  },
  
  hide(){
    let moreActivies = this.data.moreActivies1
    this.setData({
      moreActivies: moreActivies,
      isHide: true
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