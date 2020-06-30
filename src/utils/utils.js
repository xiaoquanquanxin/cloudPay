import Qs from 'qs';
import md5 from 'md5';
import { appSecret } from './constant';

//  重置字体大小
export function remSet(win, doc, isWx){
    /*
 * html 头部最早执行的js片段 用于rem计算等
 */
    (window.onresize = function (){
        return;
        let maxLimitW;
        //  如果是微信端
        if (isWx) {
            maxLimitW = 750;
        } else {
            //  pad
            maxLimitW = 835;
        }

        const remCount = 7.5;
        const clientW = document.documentElement.clientWidth;
        let hasReadyInit;
        var initFontSize = Math.min(maxLimitW, clientW) / remCount;
        document.documentElement.style.fontSize = initFontSize + 'px';

        // 修正系统设置了字号之后，支持动态字体的APP会强制调整网页font-size，导致rem方式的适配乱版问题 @2017.8
        if (clientW >= maxLimitW) return;
        if (hasReadyInit) return; //已经注册过ready修正事件了
        document.addEventListener('DOMContentLoaded', function (){
            var remFixDom = document.createElement('div');
            remFixDom.style.cssText = 'width:100%;height:1rem;opacity:0;position:absolute;z-index:-9999;';
            document.body.appendChild(remFixDom);
            var render = window.getComputedStyle(remFixDom);
            var rRate = (render.width.slice(0, -2) / render.height.slice(0, -2)).toFixed(1);
            if (rRate != remCount) document.documentElement.style.fontSize = initFontSize * (rRate / remCount) + 'px';
            hasReadyInit = true;
        });

    })();

    //  设备宽度
    let maxDeviceWidth;
    let remCount;
    //  如果是微信端
    if (isWx) {
        maxDeviceWidth = 750;
        remCount = 7.5;
    } else {
        //  pad
        maxDeviceWidth = 835;
        remCount = 8.35;
    }
    const docEle = doc.documentElement;
    const docEleStyle = docEle.style;
    //  延迟
    let delay = null;
    const fn = () => {
        const width = docEle.clientWidth;
        const remFixDom = document.createElement('div');
        docEleStyle.fontSize = 100 * (width / maxDeviceWidth) + 'px';
        remFixDom.style.cssText = 'width:100%;height:1rem;opacity:1;position:absolute;z-index:+9999;top:0;left:0;background-color:#ff0';
        document.body.appendChild(remFixDom);
        requestAnimationFrame(() => {
            const render = window.getComputedStyle(remFixDom);
            const rRate = (render.width.slice(0, -2) / render.height.slice(0, -2)).toFixed(1);
            if (rRate / remCount !== 1) {
                docEleStyle.fontSize = parseInt(docEleStyle.fontSize) * rRate / remCount + 'px';
            }
            document.body.removeChild(remFixDom);
        });
    };

    const fn1 = (e) => {
        if (delay !== null) {
            return;
        }
        delay = setTimeout(() => {
            fn();
            clearTimeout(delay);
            delay = null;
        }, 16);
    };

    win.addEventListener('resize', fn1, false);
    doc.addEventListener('DOMContentLoaded', fn, false);
}

remSet(window, document, isWX());

/**
 *
 * 所有参数按照字母unicode编码排序，用&符号拼接
 * 后面+时间戳+appkey
 * 再md5处理下。
 * 放在header里。
 * header还有时间戳。
 * header的数据type是form表单
 *
 * */
export function requestEndorse(originData){
    const timestamp = new Date().getTime();
    const _data = {};
    //  参数排序
    Object.keys(originData).sort().forEach(key => {
        _data[key] = originData[key];
    });
    //  组合md5
    const md5Data = Object.assign({}, _data);
    const str = Qs.stringify(md5Data, { encode: false }) + '&' + timestamp + '&' + appSecret;
    // console.log(str);
    // console.log(md5(str));
    const requestData = Qs.stringify(_data);
    return {
        auth: md5(str),
        timestamp,
        requestData,
    };
}

//  判断是微信端？
export function isWX(){
    const ua = navigator.userAgent.toLowerCase();
    const test = ua.match(/MicroMessenger/i);
    return true;
//    return (test && test[0] === 'micromessenger');
}

//  倒计时
export function timeSurplus(countDown){
    const surplus = new Date(countDown).getTime() + 15 * 60 * 1000 - new Date().getTime();
    //  秒
    return Math.trunc(surplus / 1000);
}

//  将时间戳转为展示时间
export function standardTime(timeStamp){
    const minutes = Math.trunc(timeStamp / 60);
    const seconds = timeStamp % 60;
    return `${fillUpWithZero(minutes)}分${fillUpWithZero(seconds)}秒`;
}

//  补充零
function fillUpWithZero(n){
    return n > 9 ? n : '0' + n;
}

//  空函数
export function emptyFunction(){}

//  解析 确认订单 的 参数
export function analyticOrderConfirmParameter(props){
    const search = decodeURIComponent(props.history.location.search.slice(1));
    if (search === '') {
        console.log('search为空');
        props.toastToggle(true, '参数异常', () => {
            props.history.goBack();
        });
        return {};
    }
//    console.log(Qs.parse(search));
    //  解析出来的数据
    const data = JSON.parse(Qs.parse(search).data);
    if (data.feeItems.length <= 5) {
        console.log('feeItems异常');
        props.toastToggle(true, '参数异常', () => {
            props.history.goBack();
        });
    }
    //  放到redux里
    props.setOrderConfirm(data);
    return data;
    //  优惠券
    //  data.haveCoupon = 0;
    //  终端类型 0 Android 1 iPhone 2 pad 3 微信
    //  data.terminalSource = isWX() ? 3 : 2;
}

//  解析pad端支付参数
export function analyticFeesPaidParameter(props){
    // console.log('👵OrderDetail',);
    const state = Qs.parse(props.history.location.search.slice(1));
    const { setFeesPaid } = props;
    //  20200628105714726
    //  15712852037
    //  设置
    setFeesPaid({
        phoneNum: state.phoneNum,
        orderNo: state.orderNo,
    });
    return state;
}

(function (){
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        // Webkit中此取消方法的名字变了
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element){
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function (){
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id){
            clearTimeout(id);
        };
    }
}());
