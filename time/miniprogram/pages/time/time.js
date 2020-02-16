// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      start:"",
      end:"",
      sum:0,
      numDate:""
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
      let now = new Date();
    now = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDay()).padStart(2, '0')}` 
    this.setData({
        start:now,
        end:now,
        numDate:now
    },()=>{
      console.log(this.data.numDate)
    })
  },
  changeStart(e){
      console.log(e)
      this.setData({
          start:e.detail.value
      },()=>{
        this.getSum()
      })
  },
  changeEnd(e){
      this.setData({
        end:e.detail.value
      },()=>{
        this.getSum()
      })
  },
getSum (){
    let sum = + new Date(this.data.end)- (+ new Date(this.data.start))
    console.log(sum)
    this.setData({
      sum: Math.floor(sum / 1000 / 60 / 60 / 24) 
    })
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