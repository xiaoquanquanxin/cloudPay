import React from 'react';
import '../css/basic-footer.css';
import {
    NotDealWithBtn,
    ToPayForBtn,
    ConfirmPaymentBtn,
    ViewOrderBtn,
    ContinueDealWith,
} from '../components/footerBtn/footerBtn';

export class BasicFooter extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        const props = this.props;
        //  暂不处理按钮
        let notDealWithBtn = props.notDealWithBtn ? <NotDealWithBtn/> : '';
        //  去支付按钮
        let toPayForBtn = props.toPayForBtn ? <ToPayForBtn/> : '';
        //  去支付按钮
        let confirmPaymentBtn = props.confirmPaymentBtn ? <ConfirmPaymentBtn/> : '';
        //  查看订单
        let viewOrderBtn = props.viewOrderBtn ? <ViewOrderBtn/> : '';
        //  继续办理
        let continueDealWith = props.continueDealWith ? <ContinueDealWith/> : '';

        return (
            <footer className='basic-footer'>
                {notDealWithBtn}
                {toPayForBtn}
                {confirmPaymentBtn}
                {viewOrderBtn}
                {continueDealWith}
            </footer>
        );
    }

}