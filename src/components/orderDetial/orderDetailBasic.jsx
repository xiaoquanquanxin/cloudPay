import React from 'react';
import './orderDetailBasic.css';
import '../../css/color.css';

export function OrderDetailBasic({
    roomIds, feeName, payMoney,
}){
    return (
        <div className='order-detail-basic'>
            <p className='order-detail-room border-grey color-dark'>房间：{roomIds}</p>
            <p className='order-detail-cost border-grey color-dark'><span>{feeName}</span><span
                className='order-detail-cost-amount'>¥{payMoney}</span></p>
        </div>
    );
}