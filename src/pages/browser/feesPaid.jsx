import React from 'react';
import '@css/color.less';
import {BasicHeader} from '@layout/basicHeader';
import {ROUTER_FEES_PAID} from '@utils/constant';
import {BasicFooter} from '@layout/basicFooter';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '@store/reduxMap';
import {requestGetPaymentInfo} from '@api/api';
import {PaymentInfo} from '@components/paymentInfo/paymentInfo';
import {analyticFeesPaidParameter} from "@utils/utils";
// 支付成功layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '费用支付';
            //  重置支付类型
            props.setFeesPaid({payType: null});
            //  loading
            props.loadingToggle(true);
            //  解析参数
            this.state = analyticFeesPaidParameter(props);
            this.handleClickCheck = this.handleClickCheck.bind(this);
        }

        //  请求
        componentDidMount(){
            const {loadingToggle} = this.props;
            requestGetPaymentInfo(this.state)
                .then(v => {
                    const payMoney = v.data.payMoney;
                    this.setState(state => {
                        this.props.setFeesPaid({payMoney});
                        return {payMoney};
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
//            console.log(payType);
            this.props.setFeesPaid({payType});
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
                    <PaymentInfo
                        payMoney={state.payMoney}
                        payType={state.payType}
                        handleClickCheck={this.handleClickCheck}
                    />
                    <BasicFooter
                        footerType={ROUTER_FEES_PAID}
                    />
                </div>
            );
        }
    }
);
