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

//  脚部信息
export function BasicFooter({ footerType }){
    let footerButtonLeft;
    let footerButtonRight;
    // console.log(footerType);
    switch (footerType) {
        case ROUTER_ORDER_CONFIRM:
            //  暂不办理
            footerButtonLeft = <NotDealWithBtn/>;
            //  确认支付以上费用
            footerButtonRight = <ConfirmPaymentBtn/>;
            break;
        case ROUTER_ORDER_DETAIL:
            // 取消订单
            footerButtonLeft = <CancelOrder/>;
            //  去支付
            footerButtonRight = <ToPayForBtn/>;
            break;
        case ROUTER_FEES_PAID:
            //  去支付
            footerButtonLeft = <ToPayForBtn/>;
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