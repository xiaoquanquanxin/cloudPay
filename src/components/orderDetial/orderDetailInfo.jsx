import React from 'react';
import './orderDetailInfo.css';
import '../../css/color.css';

export function OrderDetailInfo(props){
    return (
        <div>
            <p className='detail-info-title'>订单信息</p>
            <div className='pay-for-success-info border-grey'>
                <div className='info-item'>
                    <span>订单号码</span>
                    <span className='color-grey'>{props.code}</span>
                </div>
                <div className='info-item'>
                    <span>订单金额</span>
                    <span className='color-grey'>¥{props.amount}</span>
                </div>
                <div className='info-item'>
                    <span>完成时间</span>
                    <span className='color-grey'>{props.completionTime}</span>
                </div>
            </div>
        </div>
    );
}