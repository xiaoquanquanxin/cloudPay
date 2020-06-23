$.ajax({
    type: 'get',
    url: '/public/vipreg/js/jssdk.php',
    data: {
        url: url
    },
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'success_jsonpCallback',
    success: function (data){
        timestamp = data.timestamp;
        appId = data.appId;
        signature = data.signature;
        nonceStr = data.nonceStr;
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });

    },
    error: function (data){
        console.log(data);
    }

});

wx.ready(function (){

// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
// 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});

wx.error(function (res){
// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，
// 也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});

//点击按钮调起支付

$('.pay_btn').click(function (){
    var newopenid = getCookie('openid');
    $.ajax({
        url: '/user/chongzhi',
        data: {
            uid: params.uid,
            token: params.token,
            openid: newopenid,
        },
        dataType: 'JSON',
        type: 'post',
        success: function (data){
            var timestamp = data.jsapi.timeStamp;
            var nonceStr = data.jsapi.nonceStr;
            var package = data.jsapi.package;
            var paySign = data.jsapi.paySign;
            wx.chooseWXPay({
                appId: appId,
                timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
                package: package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: paySign, // 支付签名
                success: function (res){
                    //成功后的回调，一般支付成功后，都需要给后台发送收货人，支付金额等信息
                    var addid = getCookie('addid');
                    $.ajax({
                        url: '/ZeroBuy/userOrderPay',
                        data: {
                            uid: params.uid,
                            address_id: addid,
                            token: params.token
                        },
                        dataType: 'JSON',
                        type: 'post',
                        success: function (data){
                        },
                        error: function (data){
                        }
                    });
                    $('.chenggong').removeClass('cgnone');
                    $('.chenggong').addClass('cgblock');
                }
            });
        },
    });
});

/**************
 *
 * **************/

function onBridgeReady(){

    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        {

            'appId': 'wx2421b1c4370ec43b',     //公众号名称，由商户传入

            'timeStamp': '1395712654',         //时间戳，自1970年以来的秒数

            'nonceStr': 'e61463f8efa94090b1f366cccfbbb444', //随机串

            'package': 'prepay_id=u802345jgfjsdfgsdg888',

            'signType': 'MD5',         //微信签名方式：

            'paySign': '70EA570631E4BB79628FBCA90534C63FF7FADD89' //微信签名

        },

        function (res){

            if (res.err_msg == 'get_brand_wcpay_request:ok') {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。});}
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
    );
}
