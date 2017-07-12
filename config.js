/**
 * 小程序配置文件
 */

// 主机改成ESAP的host,小程序后台需要设置合法域名,
var host = "io.erp8.net"

var config = {

    // 下面的地址配合云端 Server 工作
    host,

    // 登录ES
    loginUrl: `https://${host}/login`,

    // esap数据API
    requestUrl: `https://${host}/api/`,

    // ES表单新建接口
    esUrl: `https://${host}/es/`,

    // 用code换取openId
    openIdUrl: `https://${host}/openid`,

    // 测试的信道服务接口
    tunnelUrl: `https://${host}/tunnel`,

    // 生成支付订单的接口
    paymentUrl: `https://${host}/payment`,

    // 发送模板消息接口
    templateMessageUrl: `https://${host}/templateMessage`,

    // 上传文件接口
    uploadFileUrl: `https://${host}/api/upload`,

    // 下载示例图片接口
    downloadExampleUrl: `https://${host}/static/weapp.jpg`
};

module.exports = config
