import React from 'react';
import './footerBtn.css';
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
export class ToPayFor extends React.Component {
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