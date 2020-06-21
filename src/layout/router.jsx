import React from 'react';
//引入一些模块
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';

//  路由
import {
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
} from '../utils/constant';
//  loading组件
import { Loading } from '../components/loading/loading';
//  异步加载组件
import asyncComponent from './asyncComponentLoader';
import { Toast } from '../components/toast/toast';
//  交付办理组件
const OrderConfirm = asyncComponent(
    () => import( '../pages/orderConfirm')
);
//  费用支付组件
const FeesPaid = asyncComponent(
    () => import( '../pages/feesPaid')
);
//  订单详情组件
const OrderDetail = asyncComponent(
    () => import( '../pages/orderDetail')
);

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
                    {/*loading*/}
                    <Loading/>
                    {/*全局弹框*/}
                    <Toast/>
                </Router>
            );
        }
    });