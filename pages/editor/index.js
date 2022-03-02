// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
		form: {
			moduleId: '',
			question: ''
		},
		moduleName: '',
		isActionShow: false,
		rule: {
			moduleId: {
				isRequired: false,
				message: ''
			},
			question: {
				isRequired: false,
				message: ''
			}
		},
		moduleList: []
	},
	onLoad () {
		wx.hideTabBar();
		request(url.getModuleList).then(res => {
			this.setData({moduleList: res})
		})
	},
	onModuleIdSelect () {
		this.setData({ isActionShow: true });
	},
	onSelect (event) {
		this.setData({
			'moduleName': event.detail.name,
			'form.moduleId': event.detail.id
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
	// getAnswer (event) {
	// 	this.setData({
	// 		'form.answer': event.detail
	// 	});
	// },
	onSubmitClick () {
		if (!this.data.form.moduleId) {
			this.setData({
				'rule.moduleId.isRequired': true,
				'rule.moduleId.message': '问题所属不能为空！'
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
		request(url.questionList, this.data.form, 'post').then(res => {
			this.onBackClick()
			this.setData({form: {
					moduleId: '',
					question: ''
				}
			})
		})
	},
	onBackClick () {
		wx.switchTab({
		  	url: '/pages/index/index'
		});
	}
});
