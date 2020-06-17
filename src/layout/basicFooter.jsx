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
    ROUTER_FEES_PAID,
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL
} from '../utils/constant';

export class BasicFooter extends React.Component {
    constructor(props){
        super(props);
        // console.log(`footer`, props.location.pathname);
        const state = {};
        this.state = state;
        switch (props.location.pathname) {
            case ROUTER_ORDER_CONFIRM:
                state.notDealWithBtn = true;
                state.confirmPaymentBtn = true;
                break;
            case ROUTER_ORDER_DETAIL:
                state.cancelOrder = true;
                state.toPayForBtn = true;
                break;
            case ROUTER_FEES_PAID:
                state.toPayForBtn = true;
                break;
            default:
                throw new Error(props.location.pattern);
        }

    }

    render(){
        const state = this.state;
        //  暂不办理
        let notDealWithBtn = state.notDealWithBtn ? <NotDealWithBtn/> : '';
        //  去支付
        let toPayForBtn = state.toPayForBtn ? <ToPayForBtn/> : '';
        //  确认支付以上费用
        let confirmPaymentBtn = state.confirmPaymentBtn ? <ConfirmPaymentBtn/> : '';
        //  取消订单
        let cancelOrder = state.cancelOrder ? <CancelOrder/> : '';

        return (
            <footer className='basic-footer'>
                {cancelOrder}
                {notDealWithBtn}
                {toPayForBtn}
                {confirmPaymentBtn}
            </footer>
        );
    }

}