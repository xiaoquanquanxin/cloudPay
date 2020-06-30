import Qs from 'qs';
import md5 from 'md5';
import { appSecret } from './constant';

//  重置字体大小
export function remSet(win, doc, isWx){
    //  设备宽度
    let maxDeviceWidth;
    //  如果是微信端
    if (isWx) {
        maxDeviceWidth = 750;
    } else {
        //  pad
        maxDeviceWidth = 835;
    }
    const docEle = doc.documentElement,
        evt = 'onorientationchange' in window ? 'onorientationchange' : 'resize', //区分Mobile和PC以加载不同的事件
        fn = function (){
            var width = docEle.clientWidth;
            if (width < 320) {
                docEle.style.fontSize = 42.6667 + 'px';
            } else if (width > maxDeviceWidth) {
                docEle.style.fontSize = 100 + 'px';
            } else {
                docEle.style.fontSize = 100 * (width / maxDeviceWidth) + 'px';
            }
        };
    win.addEventListener(evt, fn, false);
    doc.addEventListener('DOMContentLoaded', fn, false);
}

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
    // return true;
    return (test && test[0] === 'micromessenger');
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
    //  解析出来的数据
    const data = JSON.parse(Qs.parse(search).data);
    //  优惠券
    data.haveCoupon = 0;
    //  终端类型 0 Android 1 iPhone 2 pad 3 微信
    data.terminalSource = isWX() ? 3 : 2;
    if (data.feeItems.length <= 5) {
        console.log('feeItems异常');
        props.toastToggle(true, '参数异常', () => {
            props.history.goBack();
        });
    }
    //  放到redux里
    props.setOrderConfirm(data);

    return data;
}