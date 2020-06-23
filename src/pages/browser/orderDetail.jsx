import React from 'react';
import '../../css/color.css';
import { OrderDetailInfo } from '../../components/orderDetial/orderDetailInfo';
import { OrderDetailStatus } from '../../components/orderDetial/orderDetailStatus';
import { OrderDetailBasic } from '../../components/orderDetial/orderDetailBasic';
import { BasicHeader } from '../../layout/basicHeader';
import { ROUTER_ORDER_DETAIL } from '../../utils/constant';
import { BasicFooter } from '../../layout/basicFooter';
import { requestGetPaymentInfo } from '../../api/api';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import Qs from 'qs';

// 支付成功内容
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '订单详情';
            // console.log('👵OrderDetail',);
            this.state = Qs.parse(props.history.location.search.slice(1));
            props.loadingToggle(true);
        }

        componentDidMount(){
            const { loadingToggle } = this.props;
            requestGetPaymentInfo(this.state)
                .then(v => {
                    this.setState(state => {
                        return v.data;
                    });
                    console.log(v.data);
                    loadingToggle(false);
                });
        }

        renderBody({
            cost,
            orderTime, tranStatus, countDown,

            roomIds,
            feeName,
            payMoney,

            transactionid,
            tranDate,
            tranPayType,
        }){
            return (
                <div>
                    {/*主要内容*/}
                    <div>
                        {/*订单状态*/}
                        <OrderDetailStatus
                            tranStatus={tranStatus}
                            orderTime={orderTime}
                            countDown={countDown}/>
                        {/*订单基础信息*/}
                        <OrderDetailBasic
                            roomIds={roomIds}
                            feeName={feeName}
                            payMoney={payMoney}
                        />
                        {/*信息*/}
                        <OrderDetailInfo
                            transactionid={transactionid}
                            tranDate={tranDate}
                            tranPayType={tranPayType}
                        />
                    </div>
                </div>
            );
        }

        render(){
            const state = this.state;
            console.log(state);
            return (
                <div className='basic-struct'>
                    {/*头部基础*/}
                    <BasicHeader
                        headerType={ROUTER_ORDER_DETAIL}
                    />
                    {this.renderBody(state)}
                    {
                        // 只有待支付状态，才有底部
                        state.tranStatus === 0 ?
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
