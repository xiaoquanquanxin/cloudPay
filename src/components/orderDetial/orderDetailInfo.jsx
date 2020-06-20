import React from 'react';
import './orderDetailInfo.css';
import '../../css/color.css';
import { SubTitle } from '../subTitle/subTitle';

export function OrderDetailInfo({
    code = '-',
    amount = '0',
    completionTime = '00:00'
}){
    return (
        <div>
            <SubTitle text='订单信息'/>
            <div className='pay-for-success-info border-grey'>
                <div className='info-item'>
                    <span>订单号码</span>
                    <span className='color-grey'>{code}</span>
                </div>
                <div className='info-item'>
                    <span>订单金额</span>
                    <span className='color-grey'>¥{amount}</span>
                </div>
                <div className='info-item'>
                    <span>完成时间</span>
                    <span className='color-grey'>{completionTime}</span>
                </div>
            </div>
        </div>
    );
}