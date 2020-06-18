import React from 'react';
import './footerBtn.css';
import '../../css/color.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/mask';

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
export const ToPayForBtn = connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    class _ToPayForBtn extends React.Component {
        // constructor(props){
        //     super(props);
        // }
        render(){
            const props = this.props;
            // window.props = props;
            return (
                <button
                    className='footer-btn-basic footer-btn-dark'
                    onClick={() => {props.QRCodeToggleClick(true);}}>去支付
                </button>
            );
        }
    }
);

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

//  取消订单
export class CancelOrder extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('取消订单');
    }

    render(){
        return (
            <button
                className='footer-btn-basic footer-btn-light'
                onClick={this.handleClick}>取消订单</button>
        );
    }
}

//  继续办理
// export class ContinueDealWith extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(){
//         console.log('继续办理');
//     }
//
//     render(){
//         return (
//             <button
//                 className='footer-btn-basic footer-btn-dark'
//                 onClick={this.handleClick}>继续办理</button>
//         );
//     }
// }