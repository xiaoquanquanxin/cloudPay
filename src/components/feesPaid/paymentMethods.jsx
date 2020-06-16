import React from 'react';
import './paymentMethods.css';

import img from '../../images/arrowsHead.png';

//  实际支付方式
export class PaymentMethods extends React.Component {
    constructor(props){
        super(props);
        const state = {};
        this.state = state;
        switch (props.method) {
            case 3:
                state.text = '微信支付';
                break;
            case 4:
                state.text = '支付宝支付';
                break;
            default:
                throw new Error(props.method);
        }
    }

    render(){
        const state = this.state;
        return (
            <li className='choose-payment-method-item border-grey'>
                <div className='logo'><img src={img} alt=""/>{state.text}</div>
                <div><img src={img} alt=""/></div>
            </li>
        );
    }
}