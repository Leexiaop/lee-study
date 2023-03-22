// index.js
// const app = getApp()
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')

Page({
	data: {
        activeKey: 0,
        asideList: [
            {
                title: '前端面试',
                children: [
                    {
                        id: 22,
                        name: 'JavaSrcipt'
                    },
                    {
                        id: 23,
                        name: 'HTML与CSS'
                    },
                    {
                        id: 24,
                        name: 'Vue'
                    },
                    {
                        id: 25,
                        name: 'React'
                    },
                    {
                        id: 26,
                        name: 'Angular'
                    },
                    {
                        id: 27,
                        name: '算法'
                    },
                    {
                        id: 28,
                        name: '前端工程化'
                    },
                    {
                        id: 29,
                        name: 'HTTP与安全'
                    },
                    {
                        id: 30,
                        name: '微信与小程序'
                    },
                    {
                        id: 31,
                        name: '状态管理'
                    },
                    {
                        id: 32,
                        name: '性能优化'
                    },
                    {
                        id: 33,
                        name: '工具开发与使用'
                    },
                    {
                        id: 34,
                        name: '实战与Coding'
                    },
                    {
                        id: 35,
                        name: 'HR与工资'
                    },
                    {
                        id: 36,
                        name: '其他'
                    }
                ]
            },
            {
                title: '渲染相关',
                children: [
                    {
                        id: 1,
                        name: 'webGL'
                    },
                    {
                        id: 2,
                        name: 'webGPU'
                    },
                    {
                        id: 3,
                        name: 'OpenGL'
                    },
                    {
                        id: 4,
                        name: 'ThreeJS'
                    },
                    {
                        id: 5,
                        name: 'cesiumJS'
                    },
                    {
                        id: 6,
                        name: '着色器原理'
                    },
                    {
                        id: 7,
                        name: 'Blender建模'
                    },
                    {
                        id: 8,
                        name: 'ThreeJS案例'
                    }
                ]
            },
            {
                title: '源码分析',
                children: [
                    {
                        id: 8,
                        name: 'VUE2.x'
                    },
                    {
                        id: 9,
                        name: 'VUE3.x'
                    },
                    {
                        id: 10,
                        name: 'React'
                    },
                    {
                        id: 11,
                        name: 'Lodash'
                    }
                ]
            },
            {
                title: '服务和部署',
                children: [
                    {
                        id: 12,
                        name: 'go语言'
                    },
                    {
                        id: 13,
                        name: '数据库'
                    },
                    {
                        id: 14,
                        name: '前端项目部署'
                    },
                    {
                        id: 14,
                        name: 'go项目部署'
                    },
                    {
                        id: 15,
                        name: 'k8s'
                    },
                    {
                        id: 16,
                        name: 'Docker'
                    }
                ]
            },
            {
                title: '地图相关',
                children: [
                    {
                        id: 17,
                        name: 'Gis'
                    },
                    {
                        id: 18,
                        name: 'OpenLayers'
                    },
                    {
                        id: 19,
                        name: 'LeafletJS'
                    },
                    {
                        id: 20,
                        name: 'MapServer'
                    },
                    {
                        id: 21,
                        name: 'MapProxy'
                    },
                    {
                        id: 37,
                        name: '国内地图接口'
                    }
                ]
            }
        ],
        grideList: []
	},
	onLoad (options) {
		// request(url.getModuleList).then(res => {
		// 	console.log(res)
		// 	this.setData({gridList: res});
        // })
        this.setData({grideList: this.data.asideList[this.data.activeKey].children})
	},
	onShow () {

	},
	onGridClick (grid) {
		wx.navigateTo({
		  	url: `/mainPackage/pages/list/index?moduleId=${grid.target.dataset.id}`,
		})
    },
    onSideBarClick (item) {
        this.setData({
            activeKey: item.detail,
            grideList: this.data.asideList[item.detail].children
        })
    }
});
