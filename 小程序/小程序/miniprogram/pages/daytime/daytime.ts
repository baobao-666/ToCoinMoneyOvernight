interface iptType {
  detail: {
    value: string
  }
}

Page({
  data: {
    start: '',
    end: '',
    differenceday: 0,
    flag: true
  },
  onShow() {
    this.initial()
  },
  startchang(e: iptType) {
    let { value } = e.detail;
    this.setData({
      start: value,
      flag: false
    })
  },
  endchang(e: iptType) {
    let { value } = e.detail;
    this.setData({
      end: value
    })
  },
  calculate() {
    let { start, end } = this.data;
    let mystart: number = new Date(start).getTime();
    let myend: number = new Date(end).getTime();
    if (mystart < myend) {
      let sum: number = myend - mystart;
      this.setData({
        differenceday: Math.ceil(sum / 1000 / 60 / 60 / 24) 
      })
    }

  },
  initial() {
    this.setData({
      end: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    })
  }
})