const {miniProgram} = wx.getAccountInfoSync();
const url = miniProgram.envVersion === 'develop' ? 'http://127.0.0.1:3000' : 'http://ibadgers.cn/api/'


module.exports = {
    getMenuList: `${url}/menu`,
    getModuleList: `${url}/module`,
    getArticle: `${url}/article`
}