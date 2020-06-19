import React from 'react';
import './footerBtn.css';
import '../../css/color.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import * as mapProps_loading from '../../store/reduxMap';
import { withRouter } from 'react-router-dom';
import { ROUTER_FEES_PAID } from '../../utils/constant';

//  暂不办理
export const NotDealWithBtn = withRouter(
    ({ history }) => {
        // console.log(history, '暂不办理');
        return (
            <button
                className='footer-btn-basic footer-btn-light'
                onClick={() => {
                    console.log('暂不办理');
                    history.go(-1);
                }}>
                暂不办理
            </button>
        );
    }
);

//  去支付
export const ToPayForBtn = (connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    (props) => {
        // console.log('🍎去支付按钮组件', props);
        return (
            <button
                className='footer-btn-basic footer-btn-dark'
                onClick={() => {
                    props.qrCodeToggleClick(true);

                }}>去支付
            </button>
        );
    },
));

//  确认支付以上费用
export const ConfirmPaymentBtn = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        ({ history }) => {
            return (
                <button
                    className='footer-btn-basic footer-btn-dark'
                    onClick={() => {
                        console.log('去费用支付');
                        history.push(ROUTER_FEES_PAID);
                    }}>确认支付以上费用</button>
            );
        }
    )
);

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