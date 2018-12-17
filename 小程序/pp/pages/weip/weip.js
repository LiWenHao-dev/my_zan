// pages/exam03/exam03.js
Page({
  handletapjumppinjie:function(){
    wx.reLaunch({
      url: '/pages/pinjie/pinjie',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    img:[],
    src:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getImageList:function(){
    wx.request({
      url: 'http://localhost:2500/index/getIndexcarousel',
      success: (res) => {
        this.setData({ img: res.data })
      },
      fail(res) {
        console.log(1);
        console.log(res);
      }
    })
  },
  selectVideo:function(){
    wx.chooseVideo({
      sourceType:["album","camear"],
      maxDuration:60,
      camera:["front","back"],
      success:(res)=>{
        var path=res.tempFilePath;
        this.setData({src:path})
      }
    })
  },
  onLoad: function (options) {
    this.getImageList();
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