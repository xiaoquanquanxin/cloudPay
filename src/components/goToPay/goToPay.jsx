import React from 'react';
// import { request } from '../../utils/request';
import { appId } from '../../utils/constant';

//  去支付按钮
export class GoToPay extends React.Component {
    constructor(props){
        super(props);
        this.handlePayClick = this.handlePayClick.bind(this);
    }

    //  去支付按钮
    handlePayClick(){
        //  先调取创建订单接口，得到回调参数payJson
        const payJson = {
            timestamp: Math.trunc(new Date().getTime()),
            signType: 'SHA1',
            jsApiList: ['chooseWXPay'],
            appId: 'wx94c24d52e8352f8a',
            nonceStr: '09a5e2a11bea20817477e0b1dfe2cc21',
            signature: '472bc049f00da3326c8db3c0942af3f7e8ec4dc1',
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
                },
                function (res){
                    if (res.err_msg === 'get_brand_wcpay_request:ok') {
                        // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    }
                });
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

    render(){
        return (
            <button onClick={this.handlePayClick}>去支付</button>
        );
    }
}