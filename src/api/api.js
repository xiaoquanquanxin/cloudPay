import { request } from '../utils/request';

//  确认订单的信息，首页
export function requestConfirm(data){
    return request({
        method: 'post',
        url: '/syncAccount',
        data: {
            name: 1,
            age: 2,
            list: '试试',
            b: 32,
        },
    });
}

//  支付页
export function requestPaymentPage(data){
    return request({
        method: 'post',
        url: 'https://web-api.juejin.im/v3/web/wbbr/bgeda',
        data: {
            name: 1,
            age: 2,
            list: [32],
            b: 32,
        },
    });
}

//  获取二维码
export function requestGetQRCode(data){
    return request({
        method: 'post',
        url: 'https://web-api.juejin.im/v3/web/wbbr/bgeda',
        data: {
            name: 1,
            age: 2,
            list: [32],
            b: 32,
        },
    });
}

//  获取订单详情
export function requestGetOrderDetail(data){
    return request({
        method: 'post',
        url: 'https://web-api.juejin.im/v3/web/wbbr/bgeda',
        data: {
            name: 1,
            age: 2,
            list: [32],
            b: 32,
        },
    });
}

//  取消订单
export function requestCancelOrder(data){
    return request({
        method: 'post',
        url: 'https://web-api.juejin.im/v3/web/wbbr/bgeda',
        data: {
            name: 1,
            age: 2,
            list: [32],
            b: 32,
        },
    });
}

//  判断金额变更
export function requestJudgeAmountChange(data){
    return request({
        method: 'post',
        url: 'https://web-api.juejin.im/v3/web/wbbr/bgeda',
        data: {
            name: 1,
            age: 2,
            list: [32],
            b: 32,
        },
    });
}

