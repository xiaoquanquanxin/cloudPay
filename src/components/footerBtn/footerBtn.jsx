import React from 'react';
import './footerBtn.css';
import '../../css/color.css';

//  暂不办理
export class NotDealWithBtn extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('暂不办理');
    }

    render(){
        return (
            <button
                className='footer-btn-basic footer-btn-light'
                onClick={this.handleClick}>暂不办理</button>
        );
    }
}

//  去支付
export class ToPayForBtn extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('去支付');
    }

    render(){
        return (
            <button
                className='footer-btn-basic footer-btn-dark'
                onClick={this.handleClick}>去支付</button>
        );
    }
}

//  确认支付以上费用
export class ConfirmPaymentBtn extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('确认支付以上费用');
    }

    render(){
        return (
            <button
                className='footer-btn-basic footer-btn-dark'
                onClick={this.handleClick}>确认支付以上费用</button>
        );
    }
}

//  继续办理
export class ContinueDealWith extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('继续办理');
    }

    render(){
        return (
            <button
                className='footer-btn-basic footer-btn-dark'
                onClick={this.handleClick}>继续办理</button>
        );
    }
}

//  查看订单
export class ViewOrderBtn extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('查看订单');
    }

    render(){
        return (
            <button
                className='footer-btn-basic footer-btn-light'
                onClick={this.handleClick}>查看订单</button>
        );
    }
}