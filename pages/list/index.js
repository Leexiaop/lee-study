// index.js
// const app = getApp()

Page({
	data: {
		dataList: [
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看世界那么大，我想去看看,世界那么大，我想去看看世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			},
			{
				id: 1,
				title: '世界那么大，我想去看看'
			}
		],
		gridList: [
			{
				id: 0,
				name: 'JavaSrcipt基础',
				src: '../../images/web.jpeg'
			},
			{
				id: 1,
				name: 'HTML与CSS',
				src: '../../images/web.jpeg'
			},
			{
				id: 2,
				name: 'Vue',
				src: '../../images/web.jpeg'
			},
			{
				id: 3,
				name: 'React',
				src: '../../images/web.jpeg'
			},
			{
				id: 4,
				name: 'Angular',
				src: '../../images/web.jpeg'
			},
			{
				id: 5,
				name: '算法',
				src: '../../images/web.jpeg'
			},
			{
				id: 6,
				name: '前端工程化',
				src: '../../images/web.jpeg'
			},
			{
				id: 7,
				name: 'HTTP与前端安全',
				src: '../../images/web.jpeg'
			},
			{
				id: 8,
				name: '微信与小程序相关',
				src: '../../images/web.jpeg'
			},
			{
				id: 9,
				name: '前端状态管理',
				src: '../../images/web.jpeg'
			},
			{
				id: 10,
				name: '性能优化',
				src: '../../images/web.jpeg'
			},
			{
				id: 11,
				name: '工具开发与使用',
				src: '../../images/web.jpeg'
			},
			{
				id: 12,
				name: '实战与Coding',
				src: '../../images/web.jpeg'
			},
			{
				id: 13,
				name: 'HR与工资',
				src: '../../images/web.jpeg'
			}
		]
	},
	onLoad (options) {
		const obj = this.data.gridList.find(grid => grid.id == options.type);
		wx.setNavigationBarTitle({
		  	title: obj.name,
		})
	},
	onItemClick (obj) {
		wx.navigateTo({
		  	url: `/pages/detail/index?id=${obj.target.dataset.id}`,
		})
	}
});
