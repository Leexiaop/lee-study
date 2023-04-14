module.exports = {
	localStorage: (name) => {
		return new Promise(() => {
			wx.getStorage(option)
		})
    },
    //十六进制颜色随机
    color16: () => {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    } 
}
