let List = require('../../utils/img.js');

Page({
  data: {
    list: []
  },
  onShow() {
     this.initList()
  },
  initList() {
    this.setData({
      list: List
    })
  }
})