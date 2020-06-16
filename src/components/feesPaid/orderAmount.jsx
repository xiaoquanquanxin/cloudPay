import React from 'react';
import './orderAmount.css';
import '../../css/color.css';

export function OrderAmount(props){
    return (
        <div className='order-amount-wrap border-grey'>
            <span>订单金额</span>
            <span className='order-amount'>¥320.33</span>
        </div>
    );
}