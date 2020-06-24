import React from 'react';
import './footerBtn.css';
import { withRouter } from 'react-router-dom';
import '@css/color.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import { ROUTER_FEES_PAID, ROUTER_ORDER_DETAIL } from '@utils/constant';
import { packagePay } from '@utils/packagePay';
import { emptyFunction } from '@utils/utils';
import {
    requestGetQRCode,
    requestCancelOrder,
    requestJudgeAmountChange,
} from '@api/api';
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
export const ToPayForBtn = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(
        ({ qrCodeToggleClick, loadingToggle, isFrom, history, namespace_feesPaid }) => {
            // console.log('🍎去支付按钮组件', namespace_payType.payType);
            let className;
            //  如果是来自订单详情页
            if (isFrom === ROUTER_ORDER_DETAIL) {
                className = 'footer-btn-basic footer-btn-dark';
            } else {
                className = 'footer-btn-basic ' +
                    (namespace_feesPaid.payType ? 'footer-btn-dark' : 'footer-btn-freeze');
            }
            return (
                <button
                    className={className}
                    onClick={() => {
                        //  如果是来自订单详情页，只需要跳转到支付页面
                        if (isFrom === ROUTER_ORDER_DETAIL) {
                            history.push(ROUTER_FEES_PAID);
                            return;
                        }
                        //  如果没有选择
                        if (namespace_feesPaid.payType === null) {
                            return;
                        }
                        //  打开loading
                        loadingToggle(true);
                        const data = {};
                        data.propertyOrderNo = namespace_feesPaid.orderNo;
                        data.totalFee = namespace_feesPaid.payMoney;
                        data.payType = namespace_feesPaid.payType;
                        //  获取二维码接口你
                        requestGetQRCode(data)
                            .then(v => {
                                //  关闭loading
                                loadingToggle(false);
                                // const qrCodeImg = 'data:image/png;base64,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';
                                console.log('支付成功');
                                qrCodeToggleClick(true, v.data);
                            });
                    }}>去支付1
                </button>
            );
        },
    )
);

//  确认支付以上费用
export const ConfirmPaymentBtn = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        ({ history, toastToggle, loadingToggle, iswx, namespace_orderConfirm, setFeesPaid }) => {
            const className = 'footer-btn-basic footer-btn-dark ' +
                (iswx ? 'wx-button' : '');
            return (
                <button
                    className={className}
                    onClick={() => {
                        // console.log(namespace_orderConfirm);
                        loadingToggle(true);
                        //  判断金额变更
                        requestJudgeAmountChange(namespace_orderConfirm)
                            .then(v => {
                                //  todo 逻辑
                                //  您有预缴费用价格发生变更
                                // toastToggle(true, '您有预缴费用价格发生变更，请重新选择', () => {
                                //     history.go(-1);
                                // });
                                // console.log(namespace_orderConfirm);
                                // console.log(v.data);
                                //  fixme
                                //  点击【微信支付】预缴信息无变更生成订单，调起微信支付；支付成功，跳转到支付成功页面；支付失败进入订单详情页
                                if (iswx) {
                                    console.log('微信支付');
                                    //  ⚠️⚠️⚠️发起某个请求，获取微信支付的各种数据
                                    return Promise.resolve();
                                } else {
                                    //  向redux里传入feesPaid里需要的参数
                                    setFeesPaid({
                                        phoneNum: namespace_orderConfirm.phoneNum,
                                        orderNo: v.data.orderNo
                                    });
                                    history.replace(ROUTER_FEES_PAID);
                                    // console.log('pad，跳转');
                                    //  仅仅是为了终止promise
                                    return Promise.reject();
                                }
                            })
                            .then(v => {
                                packagePay((res) => {
                                    //  支付成功的回调
                                    if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                        // 使用以上方式判断前端返回,微信团队郑重提示：
                                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                                    }
                                });
                            })
                            .catch(emptyFunction);

                    }}>确认支付以上费用</button>
            );
        }
    )
);

//  取消订单
export const CancelOrder = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ namespace_toast, toastToggle, loadingToggle, namespace_feesPaid }) => {
    // console.log('取消订单按钮', namespace_toast);
    return (
        <button
            className='footer-btn-basic footer-btn-light'
            onClick={() => {
                toastToggle(true,
                    '您确定取消订单？',
                    //  确定取消订单
                    () => {
                        loadingToggle(true);
                        console.log(namespace_feesPaid);
                        requestCancelOrder(namespace_feesPaid)
                            .then(() => {
                                //  todo
                                console.log('等待5s，再次请求');
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1000);
                            });
                    },
                    //  取消取消订单
                    () => {
                        toastToggle(false);
                    }
                );
            }}>取消订单</button>
    );
});


