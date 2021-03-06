import React from 'react';
import './wxOrderInfo.less';
import { isWX } from '@utils/utils';

const iswx = isWX();

//  订单详情和支付成功的公共部分
export function OrderInfo({ transactionid, tranDate, tranPayType, }){
    return (
        <div className={'pay-for-success-info border-grey ' + (iswx ? 'iswx' : '')}>
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
    );
}