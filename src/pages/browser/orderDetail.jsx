import React from 'react';
import '../../css/color.css';
import { OrderDetailInfo } from '../../components/orderDetial/orderDetailInfo';
import { OrderDetailStatus } from '../../components/orderDetial/orderDetailStatus';
import { OrderDetailBasic } from '../../components/orderDetial/orderDetailBasic';
import { BasicHeader } from '../../layout/basicHeader';
import { ROUTER_ORDER_DETAIL } from '../../utils/constant';
import { BasicFooter } from '../../layout/basicFooter';
import { requestGetOrderDetail } from '../../api/api';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';

// 支付成功内容
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '订单详情';
            console.log('👵OrderDetail', props.history);
            this.state = {};
            props.loadingToggle(true);
        }

        componentDidMount(){
            //  请求
            requestGetOrderDetail()
                .then(v => {
                    setTimeout(() => {
                        this.props.loadingToggle(false);
                        this.setState(state => {
                            return {
                                orderState: 2,
                            };
                        });
                    }, 101);
                });
        }

        renderBody({
            code, amount, completionTime,
            room, costType, cost,
            orderTime, orderState, countDown
        }){
            return (
                <div>
                    {/*主要内容*/}
                    <div>
                        {/*订单状态*/}
                        <OrderDetailStatus
                            orderState={orderState}
                            orderTime={orderTime}
                            countDown={countDown}/>
                        {/*订单基础信息*/}
                        <OrderDetailBasic
                            room={room}
                            costType={costType}
                            cost={cost}
                        />
                        {/*信息*/}
                        <OrderDetailInfo
                            code={code}
                            amount={amount}
                            completionTime={completionTime}
                        />
                    </div>
                </div>
            );
        }

        render(){
            const state = this.state;
            return (
                <div className='basic-struct'>
                    {/*头部基础*/}
                    <BasicHeader
                        headerType={ROUTER_ORDER_DETAIL}
                    />
                    {this.renderBody(state)}
                    {
                        // 只有待支付状态，才有底部
                        state.orderState === 2 ?
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
