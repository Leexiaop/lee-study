// index.js
const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')
Page({
	data: {
		answer: [],
		isLoading: true,
		isCommitShow: false,
		isShareShow: false,
		shareOptions: [
			{ name: '微信', icon: 'wechat', openType: 'share' },
			{ name: '微博', icon: 'weibo' },
			{ name: '复制链接', icon: 'link' },
			{ name: '分享海报', icon: 'poster' },
			{ name: '二维码', icon: 'qrcode' },
		],
		commitList: []
	},
	onLoad(options) {
		request(url.getAnswer, { questionId: options.questionId}).then(res => {
			if (res) {
				res.content = app.towxml(res.answer,'markdown', {
					theme: 'dark'
				});
				this.setData({answer: res, isLoading: false});
			};
		});
	},
	onCommitClick () {
		this.setData({isCommitShow: true})
	},
	onClose () {
		this.setData({isCommitShow: false})
	},
	onShareAppMessage() {
		return {
			title: 'dddd',
			path: '/pages/detail/index',
			imageUrl: '/assets/images'
		}
	},
	onShareClick () {
		this.setData({isShareShow: true})
	} 
});
