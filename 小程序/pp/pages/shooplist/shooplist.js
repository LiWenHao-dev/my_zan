// pages/shooplist/shooplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageIndex:0,
    pageSize:7,
    hasMore:true
  },
  loadMore:function(){
    if (this.data.hasMore == false) { return; }
    wx.request({
      url: 'http://localhost:2500/zan_phone/productlist',
      data:{pageIndex:this.data.pageIndex},
      success:(res)=>{
        console.log(res.data);
        var pageCount = res.data.count;
        var pageIndex = this.data.pageIndex;
        console.log(pageIndex)
        var data = res.data.data;
        var flag = pageIndex < pageCount;
        this.setData({
          list:data,
          hasMore:flag
        })
      }
    })
    /*添加动画效果 */
    //1.显示加载动画
    wx.showLoading({
      title: "正在加载数据..."
    });
    //2.1秒后隐藏动画
    setTimeout(function () {
      wx.hideLoading();//隐藏动画
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    
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
    this.data.pageIndex--;
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {console.log(111);
    this.data.pageIndex++;
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})