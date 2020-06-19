import React from 'react';
//引入一些模块
import {
    Route,
    Redirect,
    BrowserRouter as Router,
} from 'react-router-dom';
//  主体
import { OrderDetail } from '../pages/orderDetail';
import { OrderConfirm } from '../pages/orderConfirm';
//  路由
import {
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
} from '../utils/constant';
import { FeesPaid } from '../pages/feesPaid';
import { connect } from 'react-redux';

//  基础结构
export const App = connect()(
    class _App extends React.Component {
        constructor(props){
            super(props);
            // console.log('page🍃:router\nprops:', props);
        }

        render(){
            return (
                <Router>
                    {/*确认订单*/}
                    <Route path={ROUTER_ORDER_CONFIRM} component={OrderConfirm}/>
                    {/*订单详情*/}
                    <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                    {/*费用支付*/}
                    <Route path={ROUTER_FEES_PAID} component={FeesPaid}/>
                    {/*默认路由*/}
                    <Redirect from="*" to={ROUTER_ORDER_CONFIRM}/>
                </Router>
            );
        }
    });