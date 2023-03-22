// index.js
// const app = getApp()
const request = require('../../../assets/api/request')
const url = require('../../../assets/api/url')

Page({
	data: {
		questionList: []
	},
	onLoad (options) {
		if (!options.moduleId) return;
		// request(url.questionList, { moduleId: options.moduleId }).then(data => {
		// 	wx.setNavigationBarTitle({
		// 		title: data.moduleName,
		//   	});
		// 	this.setData({questionList: data.list})
		// })
	},
	onItemClick (obj) {
		wx.navigateTo({
		  	url: `/mainPackage/pages/detail/index?questionId=${obj.target.dataset.id}`,
		})
	}
});
