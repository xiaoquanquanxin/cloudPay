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
    ROUTER_OPEN_WITH_WE_CHAT, ROUTER_ORIGIN_PAGE, ROUTER_PAY_SUCCESS,
} from '@utils/constant';
//  loading组件
import { Loading } from '@components/loading/loading';
//  异步加载组件
import asyncComponent from './asyncComponentLoader';
//  请用微信打开
import { OpenWithWeChat } from '@pages/openWithWeChat';
import { Toast } from '@components/toast/toast';
import { OriginPage } from '@pages/originPage';
import { isWX, remSet } from '@utils/utils';

//  基础配置
const isWx = isWX();
remSet(window, document, isWx);
console.log('是否是微信', !!isWx);

//  交付办理组件-仅微信
const OrderConfirm = asyncComponent(() => import( '@pages/wxPage/wxOrderConfirm'));

//  浏览器-费用支付组件
const ComponentFeesPaid = asyncComponent(
    () => import( '@pages/browser/feesPaid'),
);

//  微信-支付成功组件
const ComponentPaySuccess = asyncComponent(
    () => import('@pages/wxPage/wxPaySuccess'),
);

//  订单详情组件
const OrderDetail = isWx ? asyncComponent(
    //  微信
    () => import( '@pages/browser/orderDetail')
) : asyncComponent(
    //  浏览器
    () => import( '@pages/browser/orderDetail')
);

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

        // debugger
        if (isWx) {
            //  微信
            return (
                <Switch>
                    {/*确认订单 ✅*/}
                    <Route path={ROUTER_ORDER_CONFIRM} component={OrderConfirm}/>
                    {/*支付成功*/}
                    <Route path={ROUTER_PAY_SUCCESS} component={ComponentPaySuccess}/>
                    {/*订单详情*/}
                    <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                    {/*请用微信打开*/}
                    <Route path={ROUTER_OPEN_WITH_WE_CHAT} component={OpenWithWeChat}/>
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
                        <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                        {/*请用微信打开*/}
                        <Route path={ROUTER_OPEN_WITH_WE_CHAT} component={OpenWithWeChat}/>
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


