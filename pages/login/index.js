// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
		form: {
			phone: '',
			password: ''
		},
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		isShow: false,
		isHide: true,
		error: {
			phone: '',
			password: ''
		},
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	onLoad () {
		
		// wx.getSetting({
		// 	success (res){
		// 		console.log(res, 555)
		// 		if (res.authSetting['scope.userInfo']) {
		// 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称
		// 			wx.getUserInfo({
		// 				success: function(res) {
		// 					console.log(res.userInfo)
		// 				}
		// 			})
		// 		}
		// 	}
		// })
	},
	getLogin () {
		this.setData({isShow: true})
	},
	onOverlayClick () {
		this.setData({isShow: false})
	},
	bindGetUserInfo (e) {
		console.log(e.detail)
		wx.getUserProfile({
			desc: 'desc',
			success: function (params) {
				console.log(params)
			}
		})
	}
});
