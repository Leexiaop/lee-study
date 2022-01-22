// index.js
const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')
Page({
	data: {
		question: {},
		answerList: [],
		isLoading: true,
		isShow: false,
		commitList: []
	},
	onLoad(options) {
		request(`${url.getQuestionDetail}/${options.questionId}`).then(res => {
			wx.setNavigationBarTitle({
				title: res.question,
			  })
			  this.setData({question: res})
			return request(url.getAnswerList, { questionId: options.questionId})
		}).then(res => {
			let data = res.map(item => {
				return {
					content: app.towxml(item.answer,'markdown', {
						theme: 'dark'
					})
				}
			})
			this.setData({answerList: data})
			this.setData({isLoading: false})
		})
	},
	onCommitClick () {
		this.setData({isShow: true})
	},
	onClose () {
		this.setData({isShow: false})
	},
	onShareAppMessage() {
		return {
			title: question.question,
			path: '/pages/detail/index',
			imageUrl: '/assets/images'
		}
	},
	showShareMenu () {}
});
