// index.js
// const app = getApp()

Page({
	data: {
		form: {
			typeName: '',
			typeId: '',
			question: '',
			answer: ''
		},
		isActionShow: false,
		rule: {
			typeId: {
				isRequired: false,
				message: ''
			},
			question: {
				isRequired: false,
				message: ''
			}
		},
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
	onLoad () {
		wx.hideTabBar();
	},
	onTypeIdSelect () {
		this.setData({ isActionShow: true });
	},
	onSelect (event) {
		this.setData({
			'form.typeName': event.detail.name,
			'form.typeId': event.detail.id
		});
	},
	onClose () {
		this.setData({ isActionShow: false });
	},
	getQuestion (event) {
		this.setData({
			'form.question': event.detail
		});
	},
	getAnswer (event) {
		this.setData({
			'form.answer': event.detail
		});
	},
	onSubmitClick () {
		if (!this.data.form.typeId) {
			this.setData({
				'rule.typeId.isRequired': true,
				'rule.typeId.message': '问题所属不能为空！'
			});
			return;
		}
		if (!this.data.form.question) {
			this.setData({
				'rule.question.isRequired': true,
				'rule.question.message': '问题内容不能为空！'
			});
			return;
		}
		console.log(this.data.form);
	},
	onBackClick () {
		wx.switchTab({
		  	url: '/pages/index/index'
		});
	}
});
