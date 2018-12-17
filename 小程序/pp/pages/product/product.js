// pages/product/product.js
Page({
  checkForm:function(event){
    //console.log(event.detail.value);
    var pno = event.detail.value.pno;
    var con = event.detail.value.con;
    var pnoreg=/^[a-z0-9]{6}$/i;
    var conreg=/^[0-9]{1,}(\.[0-9]{1,2})?$/
    if(!pnoreg.test(pno)){
      wx.showToast({
        title: '商品标号格式不正确',
        icon:"none",
        duration:1500
      });
      return ;
    }
    if(!conreg.test(con)){
      wx.showToast({
        title: '商品价格不正确',
        icon:"none",
        duration:1500
      })
    }
    wx.request({
      url: 'http://localhost:2500/postProduct',
      method: "POST",
      data: { pno: pno, con: con },
      header: {
        "Content-Type": "application/x-www-form-urlencode"
      },
      success: (res) => {
        if(res.data.code==1){
          wx.showToast({
            title: '添加成功',
            icon:"success",
            duration:1500
          })
        }else{
          wx.showToast({
            title: '添加失败',
            icon:"none",
            duration:1500
          })
        }
      }
    })
    //获取用户参数
    //创建正则验证
    //出错提示
    //发送ajax
    //获取返回数据
  },
  /**
   * 页面的初始数据
   */
  data: {

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