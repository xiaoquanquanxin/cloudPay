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
    ROUTER_OPEN_WITH_WE_CHAT,
} from '../utils/constant';
//  loading组件
import { Loading } from '../components/loading/loading';
//  异步加载组件
import asyncComponent from '../layout/asyncComponentLoader';
//  请用微信打开
import { OpenWithWeChat } from '../pages/openWithWeChat';
import { Toast } from '../components/toast/toast';
import { basicConfig } from '../utils/basicConfig';

//  基础配置
const { isWx } = basicConfig();
console.log('是否是微信', !!isWx);

//  交付办理组件
const OrderConfirm = isWx ? asyncComponent(
    //  微信
    () => import( '../pages/wxPage/wxOrderConfirm')
) : asyncComponent(
    //  浏览器
    () => import( '../pages/browser/orderConfirm')
);
//  费用支付组件
const FeesPaid = isWx ? asyncComponent(
    //  微信
    () => import( '../pages/browser/feesPaid')
) : asyncComponent(
    //  浏览器
    () => import( '../pages/browser/feesPaid')
);
//  订单详情组件
const OrderDetail = isWx ? asyncComponent(
    //  微信
    () => import( '../pages/browser/orderDetail')
) : asyncComponent(
    //  浏览器
    () => import( '../pages/browser/orderDetail')
);
//  基础结构
export const App = connect()(
    class extends React.Component {
        render(){
            return (
                <Router>
                    {/*loading*/}
                    <Loading/>
                    {/*全局弹框*/}
                    <Toast/>
                    <Switch>
                        {/*确认订单*/}
                        <Route path={ROUTER_ORDER_CONFIRM} component={OrderConfirm}/>
                        {/*费用支付*/}
                        <Route path={ROUTER_FEES_PAID} component={FeesPaid}/>
                        {/*订单详情*/}
                        <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                        {/*请用微信打开*/}
                        <Route path={ROUTER_OPEN_WITH_WE_CHAT} component={OpenWithWeChat}/>
                        {/*默认路由*/}
                        <Redirect from="/*" to={ROUTER_OPEN_WITH_WE_CHAT}/>
                    </Switch>
                </Router>
            );
        }
    }
);