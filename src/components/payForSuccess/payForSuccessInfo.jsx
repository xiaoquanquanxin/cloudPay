import React from 'react';
import './payForSuccessInfo.css';
import '../../css/color.css';

export function PayForSuccessInfo(props){
    return (
        <div className='pay-for-success-info'>
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
    );
}