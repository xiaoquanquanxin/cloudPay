import React from 'react';
import './paymentInfo.less';
import { ChoosePaymentMethod } from '@components/feesPaid/choosePaymentMethod';
import { QRCode } from '@components/qrCode/qrCode';

export function PaymentInfo({
    payMoney,
    payType,
    handleClickCheck
}){
    return (
        <div>
            {/*支付信息*/}
            <div className='order-amount-wrap border-grey'>
                <span>订单金额</span>
                <span className='order-amount'>¥{payMoney}</span>
            </div>
            {/*支付选择*/}
            <ChoosePaymentMethod
                payType={payType}
                handleClickCheck={handleClickCheck}
            />
            {/*二维码*/}
            <QRCode
                payMoney={payMoney}
            />
        </div>
    );
}