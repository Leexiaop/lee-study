// index.js
// const app = getApp()

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
		]
	},
	onLoad () {
		wx.setNavigationBarTitle({
		  	title: `User_${Math.random().toString().slice(-9)}`
		})
	},
	onItemClick () {
		console.log("click")
	}
});
