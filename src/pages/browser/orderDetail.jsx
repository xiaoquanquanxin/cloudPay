import React from 'react';
import '@css/color.less';
import { BasicHeader } from '@layout/basicHeader';
import { ROUTER_ORDER_DETAIL } from '@utils/constant';
import { BasicFooter } from '@layout/basicFooter';
import { requestGetPaymentInfo } from '@api/api';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';

import { OrderDetailBasic } from '@components/orderDetial/orderDetailBasic';
import {analyticFeesPaidParameter} from "@utils/utils";

// 支付成功内容
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '订单详情';
            //  重置支付类型
            props.setFeesPaid({payType: null});
            //  loading
            props.loadingToggle(true);
            //  解析参数
            this.state = analyticFeesPaidParameter(props);
        }

        componentDidMount(){
            const { loadingToggle } = this.props;
            requestGetPaymentInfo(this.state)
                .then(v => {
                    //  支付状态
                    v.data.tranStatus = Number(v.data.tranStatus);
                    this.setState(state => {
                        return v.data;
                    });
                    loadingToggle(false);
                });
        }

        render(){
            return (
                <div className='basic-struct'>
                    {/*头部基础*/}
                    <BasicHeader
                        headerType={ROUTER_ORDER_DETAIL}
                    />
                    {/*订单基础信息*/}
                    <OrderDetailBasic
                        renderData={this.state}
                    />
                    {
                        // 只有待支付状态，才有底部
                        this.state.tranStatus === 0 ?
                            (<BasicFooter
                                footerType={ROUTER_ORDER_DETAIL}
                            />)
                            : ''
                    }
                </div>
            );
        }
    }
);
