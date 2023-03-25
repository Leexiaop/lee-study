// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
        activeKey: 0,
        asideList: [],
        grideList: [],
        menuId: 0
	},
	onLoad (options) {
		request(url.getMenuList).then(res => {
			this.setData({
                asideList: res,
                grideList: res[this.data.activeKey]?.children,
                menuId: res[this.data.activeKey]?.activeId
            });
        })
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
    },          
	onShow () {

    },
    onShareAppMessage() {
        return {
            title: '前端练功房',
            path: '/pages/index/index',
            imageUrl: '/assets/images/logo.png'
        }
    },
	onGridClick (grid) {
		wx.navigateTo({
		  	url: `/pages/list/index?moduleId=${grid.target.dataset.id}&menuId=${this.data.menuId}`,
		})
    },
    onNavClick (item) {
        this.setData({
            activeKey: item.detail.index,
            grideList: this.data.asideList[item.detail.index]?.children,
            menuId: this.data.asideList[item.detail.index]?.activeId
        })
    }
});
