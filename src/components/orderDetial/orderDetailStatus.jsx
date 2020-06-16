import React from 'react';
import './orderDetailStatus.css';
import '../../css/color.css';

//  订单状态
export function OrderDetailStatus(){
    return (
        <div className='order-detail-status border-grey'>
            <p className='status-detail-line'>
                <span className='status-detail status-detail-red'>待支付</span>
                <time className='status-detail-time color-grey'>2020：003</time>
            </p>
            <p className='countdown-pay color-grey'>xx后关闭</p>
        </div>
    );
}