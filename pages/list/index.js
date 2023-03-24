// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
		questionList: [{title: '33333', id: 2}]
	},
	onLoad (options) {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
		if (!options.moduleId) return;
		// request(url.questionList, { moduleId: options.moduleId }).then(data => {
		// 	wx.setNavigationBarTitle({
		// 		title: data.moduleName,
		//   	});
		// 	this.setData({questionList: data.list})
		// })
    },
    onShareAppMessage() {
        return {
            title: '前端练功房',
            path: '/pages/index/index',
            imageUrl: '/assets/images/logo.png'
        }
    },
	onItemClick (obj) {
		wx.navigateTo({
		  	url: `/pages/detail/index?questionId=${obj.detail.id}`,
		})
	}
});
