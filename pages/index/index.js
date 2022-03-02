// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
		bannerList: [
			{
				title: '难说再见',
				tip: '回看马上过去的2021，有太多的不舍',
				src: '../../assets/images/2021.jpeg'
			},
			{
				title: '满心期待',
				tip: '展望即将到来的2022，期待总是让人激动不已',
				src: '../../assets/images/2021.jpeg'
			}
		],
		gridList: [
			{
				id: 22,
				name: 'JavaSrcipt基础',
				src: '../../assets/images/1.png'
			},
			{
				id: 23,
				name: 'HTML与CSS',
				src: '../../assets/images/2.png'
			},
			{
				id: 24,
				name: 'Vue',
				src: '../../assets/images/3.png'
			},
			{
				id: 25,
				name: 'React',
				src: '../../assets/images/4.png'
			},
			{
				id: 26,
				name: 'Angular',
				src: '../../assets/images/5.png'
			},
			{
				id: 27,
				name: '算法',
				src: '../../assets/images/6.png'
			},
			{
				id: 28,
				name: '前端工程化',
				src: '../../assets/images/7.png'
			},
			{
				id: 29,
				name: 'HTTP与前端安全',
				src: '../../assets/images/8.png'
			},
			{
				id: 30,
				name: '微信与小程序相关',
				src: '../../assets/images/9.png'
			},
			{
				id: 31,
				name: '前端状态管理',
				src: '../../assets/images/10.png'
			},
			{
				id: 32,
				name: '性能优化',
				src: '../../assets/images/11.png'
			},
			{
				id: 33,
				name: '工具开发与使用',
				src: '../../assets/images/12.png'
			},
			{
				id: 34,
				name: '实战与Coding',
				src: '../../assets/images/13.png'
			},
			{
				id: 35,
				name: 'HR与工资',
				src: '../../assets/images/14.png'
			},
			{
				id: 36,
				name: '其他',
				src: '../../assets/images/15.png'
			}
		]
	},
	onLoad (options) {
		// request(url.getModuleList).then(res => {
		// 	console.log(res)
		// 	this.setData({gridList: res});
		// })
	},
	onShow () {
		wx.showTabBar();
	},
	onGridClick (grid) {
		wx.navigateTo({
		  	url: `/pages/list/index?moduleId=${grid.target.dataset.id}`,
		})
	}
});
