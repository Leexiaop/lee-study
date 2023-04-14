// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')
const color = require('../../utils/util')

Page({
	data: {
        asideList: [],
        isIn: true,
        navHeight: 0
	},
	onLoad () {
		request(url.getMenuList).then(res => {
			this.setData({
                asideList: res.map(item => {
                    return {
                        ...item,
                        color: color.color16()
                    }
                })
            });
        })
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
    },          
	onShow () {
        this.setData({isIn: true})
    },
    onShareAppMessage() {
        return {
            title: '前端练功房',
            path: '/pages/index/index',
            imageUrl: '/assets/images/logo.png'
        }
    },
	onGridClick (grid) {
        this.setData({
            isIn: false
        })
        setTimeout(() => {
            wx.navigateTo({
                url: `/pages/modules/index`,
          })
        }, 100)
    }
});
