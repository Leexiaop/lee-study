// app.js

App({
	towxml:require('/towxml/index'),
	onLaunch() {
		wx.getSetting({
			success: (res) => {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: (userInfo) => {
							console.log(userInfo)
						}
					})
				}
			}
		})
		// // 展示本地存储能力
		// const logs = wx.getStorageSync('logs') || []
		// logs.unshift(Date.now())
		// wx.setStorageSync('logs', logs)

		// // 登录
		// wx.login({
		// 	success: res => {
		// 		// 发送 res.code 到后台换取 openId, sessionKey, unionId
		// 	}
		// })
	},
	globalData: {
		userInfo: null
	}
})
