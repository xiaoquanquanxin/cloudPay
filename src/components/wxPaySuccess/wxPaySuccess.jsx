import { OrderInfo } from '@components/orderInfo/wxOrderInfo';
import React from 'react';
import './wxPaySuccess.less';
import '@css/color.less';

//  微信支付成功页面
export function WxPaySuccess({
    transactionid,
    tranDate,
    tranPayType,
    handleClickContinueDealWith,
    handleClickViewOrder,
}){
    return (
        <div>
            <div className='pay-for-success-log'>
                <div className='pay-for-success-log-img weui-icon-success'/>
                <h3 className='pay-for-success-log-text'>订单支付成功</h3>
            </div>
            <OrderInfo
                iswx={true}
                transactionid={transactionid}
                tranDate={tranDate}
                tranPayType={tranPayType}
            />
            <div className='button-groups'>
                <button
                    className='footer-btn-blue'
                    onClick={handleClickContinueDealWith}>继续办理
                </button>
                <button
                    className='footer-btn-light'
                    onClick={handleClickViewOrder}>查看订单
                </button>
            </div>
        </div>
    );
}