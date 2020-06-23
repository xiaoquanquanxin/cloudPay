import { request } from '../utils/request';

//  支付页
export function requestFeesPaid(data){
    return request({
        method: 'post',
        url: '/property-api/prepayment/getPaymentInfo',
        data: data,
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
        url: '/property-api/prepayment/createAdvanceOrder',
        data,
    });
}

//  测试-查询专项预缴费项明细
export function __testPropertyApiPrepaymentQueryFeeitemDetails(data){
    return request({
        method: 'post',
        url: '/property-api/prepayment/queryFeeitemDetails',
        data: {
            cmdsId: '7e1905fdad244d02aaa84bd93b2decba',
            pmdsRoomId: 'e04c5fe7-5ac4-4d06-ad3a-071c6b970c0b',
            feeId: 4801
        },
    });
}

