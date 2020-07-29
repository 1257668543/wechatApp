// compeoent/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight: 0,
    statusBarHeight:0
  },

 
  lifetimes:{
    attached:function() {
      let statusBarHeight = wx.db.statusBarHeight
      let topHeight = wx.db.navbarHeight + wx.db.statusBarHeight
      this.setData({
        topHeight,
        statusBarHeight
      })
      console.log(statusBarHeight)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
