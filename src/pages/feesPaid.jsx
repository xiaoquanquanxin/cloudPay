import React from 'react';
import '../css/color.css';
import { OrderAmount } from '../components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '../components/feesPaid/choosePaymentMethod';
import { QRCode } from '../components/qrCode/qrCode';
import { BasicHeader } from '../layout/basicHeader';
import { ROUTER_FEES_PAID } from '../utils/constant';
import { BasicFooter } from '../layout/basicFooter';
import { request } from '../utils/request';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/reduxMap';
import { requestPaymentPage } from '../api/api';

// 支付成功layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            console.log('👵FeesPaid', props.history);
            props.loadingToggle(true);
            this.state = {
                //  被选中的方式，3：微信
                checkedMethod: 3,
                //  金额
                amount: 0,
            };
            this.handleClickCheck = this.handleClickCheck.bind(this);
        }

        componentDidMount(){
            requestPaymentPage()
                .then(v => {
                    const data = { amount: 2345432.32 };
                    this.setData(data);
                })
                .then(() => {
                    this.props.loadingToggle(false);
                });
        }

        //  赋值
        setData({ amount }){
            this.setState(state => {
                return {
                    amount,
                };
            });
        }

        //  选择支付方式
        handleClickCheck(checkedMethod){
            // console.log(checkedMethod);
            if (this.state.checkedMethod === checkedMethod) {
                return;
            }
            this.setState({
                checkedMethod,
            });
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
                            amount={state.amount}
                        />
                        {/*支付选择*/}
                        <ChoosePaymentMethod
                            checkedMethod={state.checkedMethod}
                            handleClickCheck={this.handleClickCheck}
                        />
                        {/*二维码*/}
                        <QRCode
                            amount={state.amount}
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
