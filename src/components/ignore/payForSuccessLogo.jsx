import './payForSuccessLogo.css';
import '../../css/color.css';
import React from 'react';

export function PayForSuccessLogo(){
    return (
        <div className='pay-for-success-log border-grey'>
            <div className='pay-for-success-log-img weui-icon-success'/>
            <h3 className='pay-for-success-log-text'>订单支付成功</h3>
        </div>
    );
}