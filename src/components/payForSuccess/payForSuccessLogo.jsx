import './payForSuccessLogo.css';
import React from 'react';

export function PayForSuccessLogo(){
    return (
        <div className='pay-for-success-log'>
            <div className='pay-for-success-log-img weui-icon-search weui-icon-success'/>
            <h3 className='pay-for-success-log-text'>订单支付成功</h3>
        </div>
    );
}