import React from 'react';
import './orderDetailInfo.css';
import '@css/color.css';
import { SubTitle } from '../subTitle/subTitle';

export function OrderDetailInfo({
    transactionid = '-',
    tranDate = '-',
    tranPayType = 0,
}){
    if (tranPayType === 0) {
        tranPayType = '在线支付';
    }
    return (
        <div>
            <SubTitle text='订单信息'/>
            <div className='pay-for-success-info border-grey'>
                <div className='info-item'>
                    <span>订单号码</span>
                    <span className='color-grey'>{transactionid}</span>
                </div>
                <div className='info-item'>
                    <span>下单时间</span>
                    <span className='color-grey'>{tranDate}</span>
                </div>
                <div className='info-item'>
                    <span>支付方式</span>
                    <span className='color-grey'>{tranPayType}</span>
                </div>
            </div>
        </div>
    );
}