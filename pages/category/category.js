Page({
  data: {
    tabbar: ["微信小程序", "PHP开发", "Python开发", "前端", "后端", "操作系统", "工具", "微信开发"],
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0 //tab标题的滚动条位置
  },
  goToDetail(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
    })
  },
  onLoad: function() {
    let that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        let calc = res.windowHeight; //顶部脱离文档流了(- res.windowWidth / 750 * 100);
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    let that = this;
    that.setData({
      currentTab: e.detail.current
    });
    that.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    let cur = e.currentTarget.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    let that = this;
    if (that.data.currentTab > 3) {
      that.setData({
        scrollLeft: 300
      })
    } else {
      that.setData({
        scrollLeft: 0
      })
    }
  },
})