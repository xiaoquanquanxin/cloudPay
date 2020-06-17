import React from 'react';
import './paymentMethods.css';
import '../../css/color.css';

//  微信支付宝图图
import logo_weixin from '../../images/logo_weixin.png';
import logo_zhifubao from '../../images/logo_zhifubao.png';

//  实际支付方式
export class PaymentMethods extends React.Component {
    constructor(props){
        super(props);
        //  是否被勾选
        const isChecked = props.isChecked;
        const state = {
            isChecked,
        };
        this.state = state;
        switch (props.method) {
            case 3:
                state.text = '微信支付';
                state.img = logo_weixin;
                break;
            case 4:
                state.text = '支付宝支付';
                state.img = logo_zhifubao;
                break;
            default:
                throw new Error(props.method);
        }
    }

    render(){
        const state = this.state;
        const basicClassName = 'weui-icon-checkedbox';
        const extraClassName = state.isChecked ? ' weui-icon-success' : ' weui-icon-freeze';
        return (
            <li className='choose-payment-method-item border-grey'>
                <div className='logo'>
                    <img className='logo-image'
                         src={state.img} alt=""/>
                    <span>{state.text}</span>
                </div>
                <div className='weui-icon-wrap'>
                    <div className={basicClassName + extraClassName}/>
                </div>
            </li>
        );
    }
}