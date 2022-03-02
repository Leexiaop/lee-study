// index.js
const app = getApp();
// const request = require('../../assets/api/request');
// const url = require('../../assets/api/url');

Page({
	data: {
		form: {
			phone: '',
			password: ''
		},
		error: {
			phone: '',
			password: ''
		},
		canIUseGetUserProfile: false
	},
	onLoad () {
		if (wx.getUserProfile) {
			this.setData({
			  canIUseGetUserProfile: true
			})
		}
	},
	getUserProfile(e) {
		// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
		// 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
		wx.getUserProfile({
			desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			success: (res) => {
				app.globalData.userInfo = res.userInfo;
				app.globalData.hasUserInfo = true;
				wx.setStorageSync('userInfo', res.userInfo);
				wx.setStorageSync('hasUserInfo', true);
				wx.navigateBack({
					delta: 1
				});
			}
		})
	  },
	  getUserInfo(e) {
		// 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
		app.globalData.userInfo = e.detail.userInfo;
		app.globalData.hasUserInfo = true;
		wx.setStorageSync('userInfo', res.userInfo);
		wx.setStorageSync('hasUserInfo', true);
		wx.navigateBack();
	}
});
