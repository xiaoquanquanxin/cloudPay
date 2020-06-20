import React from 'react';
import './qrCode.css';
import '../../css/color.css';
//  扫描
import scan_code from '../../images/scan_code.png';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import { withRouter } from 'react-router-dom';
import { requestGetOrderDetail } from '../../api/api';

//  二维码弹框
export const QRCode = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(
    function ({ namespace_qrCode, amount }){
        // console.log(history);
        const { qrCodeImg, isShow } = namespace_qrCode;
        if (!isShow) {
            return '';
        }
        console.log('🍎二维码弹框');
        return (
            <div className='qr-code-wrap'>
                <div className='qr-code-container'>
                    <RenderScan/>
                    <div className='qr-code-content'>
                        <h3 className='order-amount'>{amount}</h3>
                        <img src={qrCodeImg} alt="二维码载入失败，请重试"/>
                        <p className='color-grey'>请扫描二维码进行支付</p>
                    </div>
                    <QRCodeButtons/>
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

//  底部按钮
const QRCodeButtons = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        ({ qrCodeToggleClick, history, loadingToggle }) => {
            return (
                <div className='qr-code-buttons border-grey'>
                    <button
                        className='color-grey border-grey'
                        onClick={() => {
                            //  放弃付款
                            qrCodeToggleClick(false);
                        }}
                    >放弃付款
                    </button>
                    <button
                        className='color-blue'
                        onClick={() => {
                            //  付款完成
                            loadingToggle(true);
                            qrCodeToggleClick(false);
                            setTimeout(() => {
                                loadingToggle(false);
                                history.push('/orderDetail?orderid=1234567');
                            }, 1);
                        }}
                    >付款完成
                    </button>
                </div>
            );
        })
);
