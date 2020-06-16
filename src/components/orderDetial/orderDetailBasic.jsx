import React from 'react';
import './orderDetailBasic.css';
import '../../css/color.css';

export function OrderDetailBasic(){
    return (
        <div className='order-detail-basic'>
            <p className='order-detail-room border-grey color-dark'>房间：18栋111</p>
            <p className='order-detail-cost border-grey color-dark'><span>住宅物业管理费</span><span
                className='order-detail-cost-amount'>¥feaw</span></p>
        </div>
    );
}