// platformPackage/component/menuManage/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onMenuAdd() {
            console.log(333)
            this.setData({show: true})
        },
        onItemOperate(e) {
            console.log(e, 444)
        }
    }
})
