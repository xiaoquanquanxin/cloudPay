import React from 'react';
import '@css/color.css';
import { OrderAmount } from '@components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '@components/feesPaid/choosePaymentMethod';
import { QRCode } from '@components/qrCode/qrCode';
import { BasicHeader } from '@layout/basicHeader';
import { ROUTER_FEES_PAID } from '@utils/constant';
import { BasicFooter } from '@layout/basicFooter';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import { requestGetPaymentInfo } from '@api/api';

// 支付成功layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '费用支付';
            // console.log('👵FeesPaid', props.history);

            //  打开loading
            props.loadingToggle(true);
            //  重置支付类型
            this.props.setFeesPaid({ payType: null });
            // console.log('支付方式', props.namespace_payType.payType);
            this.state = {};
            this.handleClickCheck = this.handleClickCheck.bind(this);
        }

        //  请求
        componentDidMount(){
            const { namespace_feesPaid, loadingToggle } = this.props;
            requestGetPaymentInfo(namespace_feesPaid)
                .then(v => {
                    const payMoney = v.data.payMoney;
                    this.setState(state => {
                        this.props.setFeesPaid({ payMoney });
                        return { payMoney };
                    });
                })
                .then(() => {
                    loadingToggle(false);
                });
        }

        //  选择支付方式
        handleClickCheck(payType){
            if (this.state.payType === payType) {
                return;
            }
            this.setState({
                payType,
            });
            console.log(payType);
            this.props.setFeesPaid({ payType });
        }

        render(){
            const state = this.state;
            return (
                <div className='basic-struct'>
                    {/*头部基础*/}
                    <BasicHeader
                        headerType={ROUTER_FEES_PAID}
                    />
                    {/*主要内容*/}
                    <div>
                        {/*支付信息*/}
                        <OrderAmount
                            payMoney={state.payMoney}
                        />
                        {/*支付选择*/}
                        <ChoosePaymentMethod
                            payType={state.payType}
                            handleClickCheck={this.handleClickCheck}
                        />
                        {/*二维码*/}
                        <QRCode
                            payMoney={state.payMoney}
                        />
                    </div>
                    <BasicFooter
                        footerType={ROUTER_FEES_PAID}
                    />
                </div>
            );
        }
    }
);
