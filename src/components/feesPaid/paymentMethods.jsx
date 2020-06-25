import React from 'react';
import './paymentMethods.less';
import '@css/color.less';

//  实际支付方式
export function PaymentMethods({
    img,
    alt,
    text,
    method,
    handleClickCheck,
    basicClassName,
    extraClassName,
}){
    return (
        <li className='choose-payment-method-item border-grey'>
            <div className='logo'>
                <img className='logo-image'
                     src={img}
                     alt={alt}/>
                <span>{text}</span>
            </div>
            <div className='weui-icon-wrap'
                 onClick={() => (handleClickCheck(method))}
            >
                <div className={basicClassName + extraClassName}/>
            </div>
        </li>
    );
}