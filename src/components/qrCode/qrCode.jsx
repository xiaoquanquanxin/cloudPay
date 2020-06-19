import React from 'react';
import './qrCode.css';
import '../../css/color.css';
//  扫描
import scan_code from '../../images/scan_code.png';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import { withRouter } from 'react-router-dom';
import { GiveUpPay, PaymentFinished } from '../qrCodeButtons/qrCodeButtons';

//  二维码弹框
export const QRCode = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(
    function ({ namespace_qrCode, amount }){
        // console.log(history);
        const { qrCodeImg, isShow } = namespace_qrCode;
        //  todo    在这里使用redux
        if (!isShow) {
            return '';
        }
        console.log('🍎二维码弹框', namespace_qrCode);
        return (
            <div className='qr-code-wrap'>
                <div className='qr-code-container'>
                    <RenderScan/>
                    <div className='qr-code-content'>
                        <h3 className='order-amount'>{amount}</h3>
                        <img src={qrCodeImg} alt="二维码载入失败，请重试"/>
                        <p className='color-grey'>请扫描二维码进行支付</p>
                    </div>
                    <div className='qr-code-buttons border-grey'>
                        <GiveUpPay/>
                        <PaymentFinished/>
                    </div>
                </div>
            </div>
        );
    }
));

//  向物业缴费
function RenderScan(){
    return (
        <div className='qr-code-title footer-btn-dark'>
            <img className='qr-code-scan-code'
                 src={scan_code}
                 alt="扫描"/>
            <span className='qr-code-name'>向物业缴费</span>
        </div>
    );
}