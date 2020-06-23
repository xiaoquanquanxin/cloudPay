import React from 'react';
import './orderDetailBasic.css';
import '../../css/color.css';

export function OrderDetailBasic({
    room='1234567654', feeName = '费用类型234543', cost = '213450'
}){
    return (
        <div className='order-detail-basic'>
            <p className='order-detail-room border-grey color-dark'>房间：{room}</p>
            <p className='order-detail-cost border-grey color-dark'><span>{feeName}</span><span
                className='order-detail-cost-amount'>¥{cost}</span></p>
        </div>
    );
}