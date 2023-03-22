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
        if (e.target.dataset.type === '6') {
            wx.navigateTo({
                url: '/platformPackage/pages/platform/index',
            })
            return
        }
		wx.navigateTo({
		  	url: `/mainPackage/pages/list/index?type=${e.target.dataset.type}`,
		})
	}
});
