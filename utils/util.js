module.exports = {
	localStorage: (name) => {
		return new Promise(() => {
			wx.getStorage(option)
		})
	}
}
