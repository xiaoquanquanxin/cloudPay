import Qs from 'qs';
import md5 from 'md5';
import { appId } from './constant';

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
    const appKey = appId;
    const _data = {};
    //  参数排序
    Object.keys(originData).sort().forEach(key => {
        _data[key] = originData[key];
    });
    //  组合md5
    const md5Data = Object.assign({}, _data, {
        timestamp,
        appKey,
    });
    // console.log(Qs.stringify(md5Data));
    const requestData = Qs.stringify(_data);
    return {
        auth: md5(Qs.stringify(md5Data)),
        timestamp,
        requestData,
    };
}

//  判断是微信端？
export function isWX(){
    const ua = navigator.userAgent.toLowerCase();
    const test = ua.match(/MicroMessenger/i);
    return !(test && test[0] === 'micromessenger');
}

//  倒计时
export function timeSurplus(countDown){
    const surplus = new Date(countDown).getTime() - new Date().getTime();
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