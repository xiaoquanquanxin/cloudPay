import React from 'react';
import './orderDetailStatus.css';
import '../../css/color.css';

//  订单状态
export function OrderDetailStatus({
    orderState = '订单状态', orderTime = '00:00', countDown = '00:00'
}){
    return (
        <div className='order-detail-status border-grey'>
            <p className='status-detail-line'>
                <span className='status-detail status-detail-red'>{orderState}</span>
                <time className='status-detail-time color-grey'>{orderTime}</time>
            </p>
            <p className='countdown-pay color-grey'>{countDown}后关闭</p>
        </div>
    );
}