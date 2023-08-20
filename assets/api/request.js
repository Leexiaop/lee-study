module.exports = (url, data = {}, method = 'get') => {
    const header= {
        token: wx.getStorageSync('token')
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: data,
            enableCache: true,
            enableHttp2: true,
            enableQuic: true,
            header: header,
            method: method,
            timeout: 0,
            success: (result) => {
                const { data } = result?.data
                resolve(data)
            },
            fail: (res) => {
                wx.showToast({
                    title: res.errMsg,
                    icon: 'error'
                })
                reject(res)
            }
        })
    })
}