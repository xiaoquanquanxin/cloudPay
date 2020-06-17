import React from 'react';
import './paymentMethods.css';
import '../../css/color.css';

//  实际支付方式
export function PaymentMethods(props){
    return (
        <li className='choose-payment-method-item border-grey'>
            <div className='logo'>
                <img className='logo-image'
                     src={props.img}
                     alt={props.alt}/>
                <span>{props.text}</span>
            </div>
            <div className='weui-icon-wrap'
                 onClick={() => (props.handleClickCheck(props.method))}
            >
                <div className={props.basicClassName + props.extraClassName}/>
            </div>
        </li>
    );
}