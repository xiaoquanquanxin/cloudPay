import React from 'react';
import './orderAmount.less';
import '../../css/color.css';

export function OrderAmount({ payMoney }){
    return (
        <div className='order-amount-wrap border-grey'>
            <span>订单金额</span>
            <span className='order-amount'>¥{payMoney}</span>
        </div>
    );
}