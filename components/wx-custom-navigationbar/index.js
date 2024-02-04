Component({
	options:{
		multipleSlots:true  // 开启多插槽
	},

	/**
	 * 组件的属性列表
	 */
	properties: {
		// 是否开启最外层容器的高度
		isEnableHeight:{
			type:Boolean,
			value:true
		},
		// 是否开启左侧保留返回箭头的插槽
		part:{
			type:Boolean,
			value:false
		},
		// 是否开启左侧不保留箭头的插槽
		left:{
			type:Boolean,
			value:false
		},
		// 是否开启中间部分插槽
		center:{
			type:Boolean,
			value:false
		},
		// 状态栏和导航栏的背景颜色
		background:{
			type:String,
			value:'#ffffff'
		},
		// 是否开启背景透明
		transparent:{
			type:Boolean,
			value:false
		},
		// 是否开启标题左侧加载效果
		loading:{
			type:Boolean,
			value:false
		},
		// 标题
		title:{
			type:String,
			value:'标题'
		},
		// 标题文本大小
		titleSize:{
			type:Number,
			value:28
		},
		// 标题颜色
		titleColor:{
			type:String,
			value:'#000000'
		},
		// 返回首页
		homeRoute:{
			type:String,
			value:''
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	lifetimes:{
		attached(){
			this.__getInformation()
		}
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		// 获取设备信息、胶囊信息 用来确定导航栏的高度等
		__getInformation(){
			const {statusBarHeight,platform} = wx.getSystemInfoSync()  // 获取状态栏的高度和系统设备
			const {top,height} = wx.getMenuButtonBoundingClientRect()  // 获取胶囊的位置信息
			const NavBarHeight = height + (top - statusBarHeight) * 2  // 导航栏的高度=胶囊高度+（胶囊top-状态栏高度）*2
			const NavBarCaseHeight = NavBarHeight + statusBarHeight    // 导航栏外面整个容器的高度
			this.setData({
				statusBarHeight,
				NavBarHeight,
				platform,
				NavBarCaseHeight
			})
			wx.setStorageSync('NavBarCaseHeight', NavBarCaseHeight)  // 将状态栏高度和自定义导航栏高度的和存到本地
		},

		// 页面后退
		__pageToBack(){
			wx.navigateBack({
				fail:(err) =>{
					wx.switchTab({
						url: this.data.homeRoute,
					})
				}
			})
		}
	}
})