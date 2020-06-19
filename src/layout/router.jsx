import React from 'react';
//引入一些模块
import {
    Route,
    Redirect,
    Switch,
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
import { Loading } from '../components/loading/loading';

//  基础结构
export const App = connect()(
    class extends React.Component {
        render(){
            return (
                <Router>
                    <Switch>
                        {/*确认订单*/}
                        <Route path={ROUTER_ORDER_CONFIRM} component={OrderConfirm}/>
                        {/*费用支付*/}
                        <Route path={ROUTER_FEES_PAID} component={FeesPaid}/>
                        {/*订单详情*/}
                        <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                        {/*默认路由*/}
                        <Redirect from="/*" to={ROUTER_ORDER_CONFIRM}/>
                    </Switch>
                    <Loading/>
                </Router>
            );
        }
    });