import React from 'react';
import './choosePaymentMethod.css';
import { SubTitle } from '../subTitle/subTitle';
import { PaymentMethods } from './paymentMethods';
//  微信支付宝图图
import logo_weixin from '@images/logo_weixin.png';
import logo_zhifubao from '@images/logo_zhifubao.png';

// 选择支付方式模块
export function ChoosePaymentMethod(props){
    //  微信和支付宝数据，将来来自props
    const list = processingData([1, 2], props.payType);
    const text = '选择支付方式';
    return (
        <div className='choose-payment-method'>
            <SubTitle text={text}/>
            <MethodList
                list={list}
                handleClickCheck={props.handleClickCheck}
            />
        </div>
    );
}

//  支付方式
function MethodList(props){
    const list = props.list.map((item, index) => {
        return (
            <PaymentMethods
                //  key
                key={index}
                //  数据
                img={item.img}
                alt={item.alt}
                text={item.text}
                method={item.method}
                basicClassName={item.basicClassName}
                extraClassName={item.extraClassName}
                //  事件
                handleClickCheck={props.handleClickCheck}
            />
        );
    });
    return (
        <ul className='choose-payment-method-list'>
            {list}
        </ul>
    );
}

//  处理数据
function processingData(list, payType){
    return list.map((method) => {
        const state = {
            method,
        };
        switch (method) {
            case 1:
                state.text = '微信支付';
                state.alt = '微信支付';
                state.img = logo_weixin;
                break;
            case 2:
                state.text = '支付宝支付';
                state.alt = '支付宝支付';
                state.img = logo_zhifubao;
                break;
            default:
                throw new Error(method);
        }
        //  基础class
        state.basicClassName = 'weui-icon-checkedbox';
        //  勾选状态
        state.extraClassName = payType === method ? ' weui-icon-success' : ' weui-icon-freeze';
        return state;
    });
}