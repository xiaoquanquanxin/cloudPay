import React from 'react';
import './QRCode.css';
import '../../css/color.css';
//  扫描
import scan_code from '../../images/scan_code.png';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/mask';
import { withRouter } from 'react-router-dom';
import { func } from 'prop-types';

//  二维码弹框
export const QRCode = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(
    function ({
        isShow,
        QRCodeImg,
        amount,
        QRCodeToggleClick,
        history
    }){
        console.log(history);
        // console.log('page🍃:弹框\nisShow:', isShow);
        //  todo    在这里使用redux
        if (!isShow) {
            return (<div/>);
        }
        return (
            <div className='qr-code-wrap'>
                <div className='qr-code-container'>
                    <div className='qr-code-title footer-btn-dark'>
                        <img className='qr-code-scan-code'
                             src={scan_code}
                             alt="扫描"/>
                        <span className='qr-code-name'>向物业缴费</span>
                    </div>
                    <div className='qr-code-content'>
                        <h3 className='order-amount'>{amount}</h3>
                        <img src={QRCodeImg} alt="二维码载入失败，请重试"/>
                        <p className='color-grey'>请扫描二维码进行支付</p>
                    </div>
                    <div className='qr-code-buttons border-grey'>
                        <button
                            className='color-grey border-grey'
                            onClick={gotoOrderDetail(QRCodeToggleClick,history)}
                        >放弃付款
                        </button>
                        <button
                            className='color-blue'
                            onClick={gotoOrderDetail(QRCodeToggleClick,history)}
                        >付款完成
                        </button>
                    </div>
                </div>
            </div>
        );
    }
));

//  去订单详情
const gotoOrderDetail = (QRCodeToggleClick,history) => {
    return () => {
        const res = QRCodeToggleClick(false);

        history.push('/orderDetail');
        console.log(res.isShow);
    };
};
