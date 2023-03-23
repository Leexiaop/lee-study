// components/tableList/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: []
        },
        leftText: {
            type: String,
            value: ''
        },
        rightText: {
            type: String,
            value: ''
        },
        isLink: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onItemClick (item) {
            this.triggerEvent('onItemClick', item?.currentTarget?.dataset?.item)
        },
        onItemOperate(event) {
            const { position, instance } = event.detail;
            instance.close();
            this.triggerEvent('onItemOperate', {position, ...event.currentTarget.dataset.item})
        }
    }
})
