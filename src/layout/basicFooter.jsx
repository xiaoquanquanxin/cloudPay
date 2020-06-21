import React from 'react';
import '../css/basic-footer.css';
import {
    NotDealWithBtn,
    ToPayForBtn,
    ConfirmPaymentBtn,
    CancelOrder,
} from '../components/footerBtn/footerBtn';
//  路由
import {
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
} from '../utils/constant';
import { isWX } from '../utils/utils';

//  是微信？
const isWx = isWX();

//  脚部信息
export function BasicFooter({ footerType }){
    let footerButtonLeft;
    let footerButtonRight;
    // console.log(footerType);
    switch (footerType) {
        case ROUTER_ORDER_CONFIRM:
            if (isWx) {
                footerButtonLeft = '去支付';
            } else {
                //  暂不办理
                footerButtonLeft = <NotDealWithBtn/>;
                //  确认支付以上费用
                footerButtonRight = <ConfirmPaymentBtn/>;
            }
            break;
        case ROUTER_FEES_PAID:
            if (isWx) {
                //  支付完成
                //  继续办理
                footerButtonLeft = '继续办理';
                //  查看订单
                footerButtonRight = '查看订单';
            } else {
                //  去支付
                footerButtonRight = <ToPayForBtn/>;
            }

            break;
        case ROUTER_ORDER_DETAIL:
            if (isWx) {
                footerButtonLeft = '取消订单\n ';
                footerButtonRight = '去支付';
            } else {
                // 取消订单
                footerButtonLeft = <CancelOrder/>;
                //  去支付
                footerButtonRight = <ToPayForBtn isFrom={ROUTER_ORDER_DETAIL}/>;
            }
            break;
        default:
            console.log(`错误的类型 footerType : ${footerType}`);
    }
    return (
        <footer className='basic-footer'>
            {footerButtonLeft}
            {footerButtonRight}
        </footer>
    );
}