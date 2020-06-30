import React from 'react';
import '@css/basic-footer.less';
import {
    NotDealWithBtn,
    ToPayForBtn,
    ConfirmPaymentBtn,
    CancelOrder,

} from '@components/footerBtn/footerBtn';
//  路由
import {
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
} from '@utils/constant';
import { isWX } from '@utils/utils';

//  是微信？
const iswx = isWX();

//  脚部信息
export function BasicFooter({ footerType }){
    let footerButtonLeft;
    let footerButtonRight;
    // console.log(footerType);
    switch (footerType) {
        case ROUTER_ORDER_CONFIRM:
            //  暂不办理
            footerButtonLeft = <ConfirmPaymentBtn/>;
            if (!iswx) {
                //  确认支付以上费用
                footerButtonRight = <ConfirmPaymentBtn/>;
            }
            break;
        case ROUTER_FEES_PAID:
            if (iswx) {
                throw new Error('错误的类型');
            } else {
                //  去支付
                footerButtonRight = <ToPayForBtn/>;
            }
            break;
        case ROUTER_ORDER_DETAIL:
            // 取消订单
            footerButtonLeft = <CancelOrder/>;
            //  去支付
            footerButtonRight = <ToPayForBtn isFrom={ROUTER_ORDER_DETAIL}/>;
            break;
        default:
            console.log(`错误的类型 footerType : ${footerType}`);
    }
    //  底部class
    const className = 'basic-footer ' + (iswx ? 'iswx' : '');
    return (
        <footer className={className}>
            {footerButtonLeft}
            {footerButtonRight}
        </footer>
    );
}