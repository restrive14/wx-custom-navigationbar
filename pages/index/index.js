Page({
  data: {},
	onLoad() {},
	onPageScroll:function(e){
		// console.log(e,'e')
		const height = wx.getStorageSync('NavBarCaseHeight')
    if (e.scrollTop > height) {
      this.setData({
        transparent: true
      })
    } else {
      this.setData({
        transparent: false
      })
    }
	}
})
