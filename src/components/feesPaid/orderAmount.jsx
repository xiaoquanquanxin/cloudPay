import React from 'react';
import './orderAmount.css';
import '../../css/color.css';

export function OrderAmount({ amount }){
    return (
        <div className='order-amount-wrap border-grey'>
            <span>订单金额</span>
            <span className='order-amount'>¥{amount}</span>
        </div>
    );
}