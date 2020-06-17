import React from 'react';
import './choosePaymentMethod.css';
import { SubTitle } from '../subTitle/subTitle';
import { PaymentMethods } from './paymentMethods';

// 选择支付方式模块
export function ChoosePaymentMethod(props){
    //  支付方式
    const list = [3, 4].map((item) => {
        // console.log(`key:${item}`, props.checkedMethod);
        return (
            <PaymentMethods
                key={item}
                //  支付方式
                method={item}
                //  勾选的支付方式
                checkedMethod={props.checkedMethod}
                //  事件
                handleClickCheck={props.handleClickCheck}
            />
        );
    });
    return (
        <div className='choose-payment-method'>
            <SubTitle text='选择支付方式'/>
            <ul className='choose-payment-method-list'>
                {list}
            </ul>
        </div>
    );
}