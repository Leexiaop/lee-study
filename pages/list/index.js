// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
        questionList: [],
        path: ''
	},
	onLoad (options) {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
		if (!options.moduleId || !options.menuId) return;
		request(url.getModuleList, options).then(res => {
			wx.setNavigationBarTitle({
				title: res.title
		  	});
			this.setData({
                questionList: res?.list,
                path: res.path
            })
		})
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
		  	url: `/pages/detail/index?path=${this.data.path}&title=${obj.detail.title}`,
		})
	}
});
