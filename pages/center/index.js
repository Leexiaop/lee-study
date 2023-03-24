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
        if (e.target.dataset.type === '4') {
            wx.navigateTo({
                url: '/platformPackage/pages/manage/index',
            })
            return
        }
        if (e.target.dataset.type === '5') {
            wx.navigateTo({
                url: '/platformPackage/pages/monitor/index',
            })
            return
        }
        if (e.target.dataset.type === '6') {
            wx.navigateTo({
                url: '/renderPackage/pages/demo/index',
            })
            return
        }
		wx.navigateTo({
		  	url: `/pages/list/index?type=${e.target.dataset.type}`,
		})
	}
});
