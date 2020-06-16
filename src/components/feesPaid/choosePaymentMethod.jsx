import React from 'react';
import './choosePaymentMethod.css';
import { SubTitle } from '../subTitle/subTitle';
import { PaymentMethods } from './paymentMethods';

// 选择支付方式模块
export function ChoosePaymentMethod(props){
    return (
        <div className='choose-payment-method'>
            <SubTitle text='选择支付方式'/>
            <ul className='choose-payment-method-list'>
                <PaymentMethods method={3}/>
                <PaymentMethods method={4}/>
            </ul>
        </div>
    );
}