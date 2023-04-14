// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
        moduleList: [],
        activeModule: -1,
        contentList: [],
        isIn: true
	},
	onLoad (options) {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
		request(url.getMenuList).then(res => {
			this.setData({
                moduleList: res,
                contentList: res,
            })
		})
    },
    show () {
        this.setData({isIn: true})
    },
    onShareAppMessage() {
        return {
            title: '前端练功房',
            path: '/pages/index/index',
            imageUrl: '/assets/images/logo.png'
        }
    },
    onModuleClick (modules) {
        this.setData({
            activeModule: modules.currentTarget.dataset.index,
            contentList: modules.currentTarget.dataset.index < 0 ? this.data.moduleList : this.data.moduleList[modules.currentTarget.dataset.index]?.children
        })
    },
	onItemClick (obj) {
		wx.navigateTo({
		  	url: `/pages/detail/index?path=${this.data.path}&title=${obj.detail.title}`,
		})
	}
});
