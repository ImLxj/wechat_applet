// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    count: 0,
    msg: '你好,'
  },
  // 事件处理函数
  btnTapHandler(e) {
    console.log(e);
  },
  // 使用this.setData(object)对 data 里面的数据进行修改
  countChange() {
    this.setData({
      count: this.data.count + 1
    })
  },
  // 传递参数,传递的参数存放到target对象里的dataset里面
  sendParamsBtn(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  // 监听文本框的输入事件, input输入的内容保存到了 detail对象了里面的value属性当中
  sendInputHandler(e) {
    // 将文本框输入的内容从新绑定到data的msg当中
    this.setData({
      mgs: e.detail.value
    })
  },

  onLoad() {

  },
  getUserProfile(e) {

  },
  getUserInfo(e) {}
})