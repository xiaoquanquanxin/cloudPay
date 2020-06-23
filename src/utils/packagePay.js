import { appId } from './constant';

//  微信支付
export function packagePay(callbackFn){
    //  先调取创建订单接口，得到回调参数payJson
    const payJson = {
        timestamp: Math.trunc(new Date().getTime()),
        appId: 'wx2421b1c4370ec43b',     //公众号名称，由商户传入
        nonceStr: 'e61463f8efa94090b1f366cccfbbb444', //随机串
        package: 'prepay_id=u802345jgfjsdfgsdg888',
        signType: 'MD5',         //微信签名方式：
        paySign: '70EA570631E4BB79628FBCA90534C63FF7FADD89' //微信签名
    };

    function onBridgeReady(){
        window.WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
                appId,
                // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                timeStamp: payJson.timestamp,
                // 支付签名随机串，不长于 32 位
                nonceStr: payJson.nonceStr,
                // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                package: payJson.package,
                // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                signType: payJson.signType,
                // 支付签名
                paySign: payJson.paySign,
                //  total_fee
            },
            callbackFn);
    }

    if (typeof WeixinJSBridge == 'undefined') {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}