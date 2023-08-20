// pages/list/index.js
const request = require('../../assets/api/request')
const url = require('../../assets/api/url')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options: '',
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const {path} = options;
        request(url.getModuleList, {path}).then(res => {
            if (res && res.length) {
                const arr = res.map(item => {
                    return {
                        name: item,
                        rotate: Math.floor((Math.random() - 0.1) * 15),
                        background: Math.round(Math.random())?'hotpink' : '#fff',
                        margin: Math.floor((Math.random() - 0.1) * 160),
                    }
                })
                this.setData({list: arr, options})
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
        return {
            title: '前端练功房',
            path: '/pages/index/index',
            imageUrl: '/assets/images/logo.png'
        }
    },

    onItemClick(obj) {
        wx.navigateTo({
            url: `/pages/detail/index?path=${this.data.options.path}&title=${obj.currentTarget.dataset.obj.name}`,
        })
    }
})