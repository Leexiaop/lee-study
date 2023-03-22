// app.js
// const request = require('./assets/api/request')
// const url = require('./assets/api/url')
App({
	towxml:require('/towxml/index'),
	onLaunch() {
		this.globalData.userInfo = wx.getStorageSync('userInfo')
		this.globalData.hasUserInfo = !!wx.getStorageSync('hasUserInfo')
	},
	globalData: {
		userInfo: null,
		hasUserInfo: false
	}
})
