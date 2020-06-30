import React from 'react';
//引入一些模块
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

//  路由
import {
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
    ROUTER_OPEN_WITH_WE_CHAT,
    ROUTER_ORIGIN_PAGE,
    ROUTER_PAY_SUCCESS,
} from '@utils/constant';
//  loading组件
import { Loading } from '@components/loading/loading';
//  异步加载组件
import asyncComponent from './asyncComponentLoader';
//  请用微信打开
import { OpenWithWeChat } from '@pages/openWithWeChat';
import { Toast } from '@components/toast/toast';
import { OriginPage } from '@pages/originPage';
import { isWX } from '@utils/utils';

//  微信-确认订单页面
const ComponentWXOrderConfirm = asyncComponent(() => import( '@pages/wxPage/wxOrderConfirm'));

//  微信-支付成功页面
const ComponentWXPaySuccess = asyncComponent(() => import('@pages/wxPage/wxPaySuccess'));

//  微信-订单详情组件
const ComponentWXOrderDetail = asyncComponent(() => import( '@pages/wxPage/wxOrderDetail'));

//  浏览器-费用支付，二维码，微信支付宝页面
const ComponentFeesPaid = asyncComponent(() => import( '@pages/browser/feesPaid'));

//  浏览器-订单详情组件
const ComponentOrderDetail = asyncComponent(() => import( '@pages/browser/orderDetail'));

//  基础结构
export const App = function (){
    const SwitchContent = (() => {
        //  fixme test 测试用的数据来源
        const testRoute = (
            <Route path={ROUTER_ORIGIN_PAGE} component={OriginPage}/>
        );
        //  默认路由
        const redirectRoute = (
            <Redirect from="/*" to={ROUTER_OPEN_WITH_WE_CHAT}/>
        );
        //  请用微信打开，404
        const cp404 = (
            <Route path={ROUTER_OPEN_WITH_WE_CHAT} component={OpenWithWeChat}/>
        );

        // debugger
        if (isWX()) {
            //  微信
            return (
                <Switch>
                    {/*确认订单 ✅*/}
                    <Route path={ROUTER_ORDER_CONFIRM} component={ComponentWXOrderConfirm}/>
                    {/*支付成功*/}
                    <Route path={ROUTER_PAY_SUCCESS} component={ComponentWXPaySuccess}/>
                    {/*订单详情*/}
                    <Route path={ROUTER_ORDER_DETAIL} component={ComponentWXOrderDetail}/>
                    {cp404}
                    {testRoute}
                    {redirectRoute}
                </Switch>
            );
        } else {
            //  pad
            return (
                <div>
                    <Switch>
                        {/*费用支付*/}
                        <Route path={ROUTER_FEES_PAID} component={ComponentFeesPaid}/>
                        {/*订单详情*/}
                        <Route path={ROUTER_ORDER_DETAIL} component={ComponentOrderDetail}/>
                        {cp404}
                        {testRoute}
                        {redirectRoute}
                    </Switch>
                </div>
            );
        }
    })();
    return (
        <Router>
            {/*loading*/}
            <Loading/>
            {/*全局弹框*/}
            <Toast/>
            {SwitchContent}
        </Router>
    );
};


