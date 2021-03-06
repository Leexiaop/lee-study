// index.js
const app = getApp();

Page({
	data: {
		userInfo: {},
		hasUserInfo: false
	},
	onLoad () {
	},
	onShow () {
		wx.setNavigationBarTitle({
			title: app.globalData.hasUserInfo ? app.globalData.userInfo.nickName : `User_${Math.random().toString().slice(-9)}`
	  	});
		this.setData({
			hasUserInfo: app.globalData.hasUserInfo,
			userInfo: app.globalData.userInfo
		});
	},
	goLogin () {
		wx.navigateTo({
		  	url: '/pages/login/index'
		})
	},
	onItemClick (e) {
		wx.navigateTo({
		  	url: `/pages/list/index?type=${e.target.dataset.type}`,
		})
	}
});
