// components/NavBar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        back: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navHeight: 0
    },
    lifetimes: {
        ready () {
            const {top, height} = wx.getMenuButtonBoundingClientRect()
            wx.getSystemInfo({
                success: (res) => {
                    const {statusBarHeight} = res
                    const margin = top - statusBarHeight
                    this.setData({navHeight: (height + statusBarHeight + (margin * 2))})
                }
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onBackClick() {
            wx.navigateBack(-1)
        }
    }
})
