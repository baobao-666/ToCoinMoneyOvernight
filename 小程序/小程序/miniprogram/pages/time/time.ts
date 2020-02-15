
interface timeChang {
  detail: {
    value: string
  }
}

Page({
  data: {
    year: "2000",
    mouth: "00",
    arr: [],
    mytimes: 0
  },
  chagtime(event: timeChang) {
    let { value } = event.detail
    this.setData({
      year: value.split("-")[0],
      mouth: value.split("-")[1]
    })
    this.settime()
  },
  clear(){
      this.setData({
        year: "",
        mouth: "",
        arr:[],
        mytimes: 0
      })
  },
  onShow() {
    this.settime()
  },
  settime() {
    console.log
    let { year, mouth } = this.data;
    let oldtime: number = mouth === "00" ? new Date(year).getTime() : new Date(`${year}-${mouth}`).getTime();
    let newtime: number = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`).getTime();
    if (newtime > oldtime) {
      let arr: number = newtime - oldtime;
      let sums: number = Math.ceil(arr / (1000 * 60 * 60 * 24 * 31))
      this.setData({
        mytimes: sums
      })
    }
  }
})