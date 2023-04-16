// index.js
// const app = getApp()
const moment = require('moment');
Page({
	data: {
        list: [
            {
                title: '面试和学习永无止境',
                descList: ['前端面试', '三维开发', '服务端与项目部署', 'HTTP和安全', '地图学习', '...'],
                background: 'yellow'
            },
            {
                title: '公司真题一网打尽',
                descList: ['字节跳动', '阿里巴巴', '腾讯', '华为', '美团', '...'],
                background: 'hotpink'
            },
            {
                title: '三维案例因有尽有',
                descList: ['ThreeJs', 'CesuimJS', 'BabylonJS', 'WebGPU', 'WebGL', '...'],
                background: 'chartreuse'
            },
            {
                title: '资源下载',
                descList: ['React', 'Vue2.x', 'Vue3.x', 'GLSL', 'WebGL', '...'],
                background: 'white'
            },
            {
                title: '机构面试题汇总',
                descList: ['前锋', '黑马', '爪哇', '...'],
                background: 'mediumturquoise'
            }
        ],
        isIn: true,
        isFixed: false,
        timer: ''
	},
	onLoad () {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        })
    },          
	onShow () {
        this.setData({
            isIn: true,
            isFixed: false
        })
    },
    onReachBottom (e) {
        this.setData({isFixed: true})
    },
    onShareAppMessage() {
        return {
            title: '前端练功房',
            path: '/pages/index/index',
            imageUrl: '/assets/images/logo.png'
        }
    },
	onGridClick () {
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
