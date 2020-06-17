import React from 'react';
import './paymentMethods.css';
import '../../css/color.css';

//  微信支付宝图图
import logo_weixin from '../../images/logo_weixin.png';
import logo_zhifubao from '../../images/logo_zhifubao.png';

//  实际支付方式
export function PaymentMethods(props){
    //  存储
    const state = {};
    switch (props.method) {
        case 3:
            state.text = '微信支付';
            state.alt = '微信支付';
            state.img = logo_weixin;
            break;
        case 4:
            state.text = '支付宝支付';
            state.alt = '支付宝支付';
            state.img = logo_zhifubao;
            break;
        default:
            throw new Error(props.method);
    }
    //  基础class
    const basicClassName = 'weui-icon-checkedbox';
    //  勾选状态
    const extraClassName = props.checkedMethod === props.method ? ' weui-icon-success' : ' weui-icon-freeze';
    return (
        <li className='choose-payment-method-item border-grey'>
            <div className='logo'>
                <img className='logo-image'
                     src={state.img}
                     alt={state.alt}/>
                <span>{state.text}</span>
            </div>
            <div className='weui-icon-wrap'
                 onClick={() => (props.handleClickCheck(props.method))}
            >
                <div className={basicClassName + extraClassName}/>
            </div>
        </li>
    );
}