import React from 'react';
import './orderDetailBasic.less';
import '@css/color.less';
import { SubTitle } from '@components/subTitle/subTitle';
import { OrderDetailStatus } from '@components/orderDetial/orderDetailStatus';

export function OrderDetailBasic(props){
    const {
        tranStatus, orderTime, tranDate,
        roomNames, feeName, payMoney,
        transactionid,
    } = props.renderData || {};
    const tranPayType = '在线支付';
    return (
        <div>
            {/*订单状态*/}
            <OrderDetailStatus
                tranStatus={tranStatus}
                orderTime={orderTime}
                tranDate={tranDate}/>
            <div className='order-detail-basic'>
                <p className='order-detail-room border-grey color-dark'>房间：{roomNames}</p>
                <p className='order-detail-cost border-grey color-dark'><span>{feeName}</span><span
                    className='order-detail-cost-amount'>¥{payMoney}</span></p>
            </div>
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