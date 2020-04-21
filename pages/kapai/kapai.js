/**
 * @author: chris
 * Date     2020-04-21
 */
Page({
    data: {},
    onLoad: function () {
        let self = this
        wx.showLoading({title: '正在加载'})
        // 查看是否授权
        wx.getSetting({
           success: res => {
               if (!res.authSetting['scope.userInfo']) {
                   // 未登录
                   wx.redirectTo({
                       url: 'pages/login/login'
                   })
               }
           }
        })
        setTimeout(function () {
            wx.hideLoading()
            self.setData({
                hidden: false
            })
        },500)
    }
})