// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 保存轮播图数据
    swiperList: [],
    // 保存九宫格的数据
    gridList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getGridList()
  },

  // 获取轮播图数据的方法
  getSwiperList() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method: 'GET',
      success: (res) => {
        // 需要使用箭头函数，否则会出现获取不到this.setData这个方法的错误
        this.setData({
          swiperList: res.data
        })
      }
    })
  },

  // 获取九宫格数据的方法
  getGridList() {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method: 'GET',
      success: (res) => {
        console.log(res);
        this.setData({
          gridList: res.data
        })
      }
    })
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