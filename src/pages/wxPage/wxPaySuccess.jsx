import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import { analyticFeesPaidParameter } from '@utils/utils';
import { requestGetPaymentInfo } from '@api/api';
import { WxPaySuccess } from '@components/wxPaySuccess/wxPaySuccess';

// 确认订单layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '支付成功';
            //  ?orderNo=20200630141722824&phoneNum=15712852037
            props.loadingToggle(true);
            //  解析参数
            this.state = analyticFeesPaidParameter(props);
            this.handleClickContinueDealWith = this.handleClickContinueDealWith.bind(this);
            this.handleClickViewOrder = this.handleClickViewOrder.bind(this);
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

        //  继续办理按钮
        handleClickContinueDealWith(){
            this.props.history.goBack();
        }

        //  查看订单按钮
        handleClickViewOrder(){
            this.props.history.back();
        }

        render(){
            const { transactionid, tranPayType, tranDate } = this.state;
            return (
                <div className='basic-struct'>
                    <WxPaySuccess
                        transactionid={transactionid}
                        tranDate={tranDate}
                        tranPayType={tranPayType}
                        handleClickContinueDealWith={this.handleClickContinueDealWith}
                        handleClickViewOrder={this.handleClickViewOrder}
                    />
                </div>
            );
        }
    }
);

