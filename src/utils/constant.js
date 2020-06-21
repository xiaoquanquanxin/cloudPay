//  测试号的appId
import { isWX } from './utils';

export const appId = 'wx94c24d52e8352f8a';
//  测试号的appsecret
export const appsecret = 'bda7cc2271c7b62db7e2eb63d508de25';

/**
 * 路由
 * */
const routerList = [{
    //  微信路由
    roc: '/wxOrderConfirm',
    rod: '/wxOrderDetail',
    rfp: '/wxFeesPaid',
}, {
    //  浏览器路由
    roc: '/orderConfirm',
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
//  请用微信打开，浏览器为404
export const ROUTER_OPEN_WITH_WE_CHAT = '/404';