# 微信小程序自定义导航栏

微信小程序中自带的导航栏因无法自定义而无法满足需求，所以需要自己封装一个导航栏，以实现不同的需求


# 注意

使用本组件前，先将使用本组件的页面的json配置
**navigationStyle**
设置为 **custom**

***

# 功能

双击标题返回顶部

随着页面上滑导航栏逐渐隐藏

~~通过插槽自定义导航栏~~

~~标题左侧加载动画效果~~

~~自定义标题内容及颜色~~

后续...

***

# 属性

**isEnableHeight**
是否开启最外层容器的高度 默认为true 设置为false后 页面将被导航栏遮盖住 

**isLeftVisable**
是否显示左侧返回按钮部分 默认为true

**isCenterVisable**
是否显示中间标题部分  默认为true

**background**
状态栏和导航栏的背景颜色 默认为 #ffffff  可以是十六进制也可以是字符串,例如red,blue

**loading**
是否开启标题左侧的加载动画 默认为false

**title**
标题文本

**titleSize**
标题文本字体大小 Number类型 默认为25rpx

**titleColor**
标题文本颜色

**homeRoute**
返回首页 

**注意：**

如果当前页面是页面栈的第一个，即无法再返回上一页

可以将首页的路由传进来，即可返回首页，此功能后续会完善

***


# slot
left  导航栏左侧返回按钮部分  需要将 **isLeftVisable** 设置为 false

center  导航栏中间标题部分   需要将 **isCenterVisable** 设置为false


***

# 后续
后续功能规划中 或者留言

***

# 备注

如果有帮助，给个star

```
	while(true) {
		console.log('谢谢')
	}
```

***

	

