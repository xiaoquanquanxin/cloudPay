//  测试号的appId
import { isWX } from './utils';

export const appId = 'wx94c24d52e8352f8a';

//  ap使用
export const appKey = '2b2b6d213622c1cf977774c2dcac1c3b';
export const appSecret = '63634dfc87ec7891aa9e8710ced51011';

/**
 * 路由
 * */
const routerList = [{
    //  微信路由
    roc: '/wxOrderConfirm',
    rod: '/wxOrderDetail',
    rfp: '/wxPaySuccess',
}, {
    //  浏览器路由
    rod: '/orderDetail',
    rfp: '/feesPaid',
}];
//  路由对象
const routerItem = isWX() ? routerList[0] : routerList[1];
//  确认订单
export const ROUTER_ORDER_CONFIRM = routerItem.roc;
//  订单详情
export const ROUTER_ORDER_DETAIL = routerItem.rod;
//  费用支付
export const ROUTER_FEES_PAID = routerItem.rfp;
//  支付成功给
export const ROUTER_PAY_SUCCESS = routerItem.rfp;
//  请用微信打开，浏览器为404
export const ROUTER_OPEN_WITH_WE_CHAT = '/404';

//  数据来源
export const ROUTER_ORIGIN_PAGE = '/origin';
