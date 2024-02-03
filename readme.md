# 微信小程序自定义导航栏

# 注意
	使用本组件前，先将使用本组件的页面的json配置 navigationStyle 设置为 custom

# 功能
	双击标题返回顶部
	随着页面上滑导航栏逐渐隐藏
	通过插槽自定义导航栏    已实现
	标题左侧加载动画效果
	自定义标题及颜色  已实现
	后续...

# 属性
	是否开启最外层容器的高度 默认为true 设置为false后 页面将被导航栏遮盖住 
	isEnableHeight

	是否显示左侧返回按钮部分 默认为true
	isLeftVisable

	是否显示中间标题部分  默认为true
	isCenterVisable

	状态栏和导航栏的背景颜色 默认为 #ffffff 
	background

	标题
	title

	标题颜色
	titleColor

	返回首页 
	注意：如果当前页面是页面栈的第一个，即无法再返回上一页，可以将首页的路由传进来，即可返回首页，此功能后续会完善
	homeRoute


# slot
	left  导航栏左侧返回按钮部分  需要将isLeftVisable设置为false
	center  导航栏中间标题部分   需要将isCenterVisable设置为false

# 后续
  后续功能规划中 或者留言

# 备注
  前端菜鸟，工作中遇到了自定义导航栏的封装
	所以想把这个组件单独封装一下，顺便完善完善
	经验不足，敬请谅解
	如果有帮助，给个star
	while(true){
		console.log('谢谢')
	}

	

