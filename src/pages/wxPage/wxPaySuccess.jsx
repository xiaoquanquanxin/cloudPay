import React from 'react';
import '@css/color.less';
import '@css/wxOrderConfirm.less';
import { BasicFooter } from '@layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '@utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import Qs from 'qs';
import { analyticFeesPaidParameter, isWX } from '@utils/utils';
import { OrderInfo } from '@components/orderInfo/wxOrderInfo';
import { requestGetPaymentInfo } from '@api/api';

// 确认订单layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '支付成功';
            //  orderNo=20200630141722824&phoneNum=15712852037
            props.loadingToggle(true);
            //  解析参数
            this.state = analyticFeesPaidParameter(props);
//            console.log(this.state);
        }

        componentDidMount(){
            const { loadingToggle } = this.props;
            requestGetPaymentInfo(this.state)
                .then(v => {
                    this.setState(state => {
                        return v.data;
                    });
                    loadingToggle(false);
                });
        }

        render(){
            const { transactionid, tranPayType, tranDate } = this.state;
            return (
                <div className='basic-struct'>
                    <div className='pay-for-success-log'>
                        <div className='pay-for-success-log-img weui-icon-success'/>
                        <h3 className='pay-for-success-log-text'>订单支付成功</h3>
                    </div>
                    <OrderInfo
                        iswx={true}
                        transactionid={transactionid}
                        tranDate={tranDate}
                        tranPayType={tranPayType}
                    />
                </div>
            );
        }
    }
);

