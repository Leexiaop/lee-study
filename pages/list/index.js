// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
		questionList: []
	},
	onLoad (options) {
		request(url.getStudyModuleList).then(res => {
			wx.setNavigationBarTitle({
				title: res?.find(r => r.id == options.moduleId).name,
		  	})
			return request(url.question, { moduleId: options.moduleId })
		}).then(data => {
			this.setData({questionList: data})
		})
	},
	onItemClick (obj) {
		wx.navigateTo({
		  	url: `/pages/detail/index?questionId=${obj.target.dataset.id}`,
		})
	}
});
