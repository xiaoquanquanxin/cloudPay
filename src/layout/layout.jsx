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
    ROUTER_OPEN_WITH_WE_CHAT, ROUTER_ORIGIN_PAGE,
} from '@utils/constant';
//  loading组件
import {Loading} from '@components/loading/loading';
//  异步加载组件
import asyncComponent from './asyncComponentLoader';
//  请用微信打开
import {OpenWithWeChat} from '@pages/openWithWeChat';
import {Toast} from '@components/toast/toast';
import {OriginPage} from '@pages/originPage';
import {isWX, remSet} from "@utils/utils";

//  基础配置
const isWx = isWX();
remSet(window, document, isWx);
console.log('是否是微信', !!isWx);

//  交付办理组件-仅微信
const OrderConfirm = asyncComponent(() => import( '@pages/wxPage/wxOrderConfirm'));

//  费用支付组件
const FeesPaid = isWx ? asyncComponent(
    //  微信-微信支付成功
    () => import('@pages/browser/feesPaid')
) : asyncComponent(
    //  浏览器-费用支付组件
    () => import( '@pages/browser/feesPaid')
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
        // debugger
        if (isWx) {
            //  微信
            return (
                <Switch>
                    {/*确认订单*/}
                    <Route path={ROUTER_ORDER_CONFIRM} component={OrderConfirm}/>
                    {/*费用支付*/}
                    <Route path={ROUTER_FEES_PAID} component={FeesPaid}/>
                    {/*订单详情*/}
                    <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                    {/*请用微信打开*/}
                    <Route path={ROUTER_OPEN_WITH_WE_CHAT} component={OpenWithWeChat}/>
                    {/*fixme test*/}
                    {/*测试用的数据来源*/}
                    <Route path={ROUTER_ORIGIN_PAGE} component={OriginPage}/>
                    {/*默认路由*/}
                    <Redirect from="/*" to={ROUTER_OPEN_WITH_WE_CHAT}/>
                </Switch>
            )
        } else {
            //  pad
            return (
                <div>
                    <Switch>
                        {/*确认订单，在pad是404*/}
                        <Route path={ROUTER_ORDER_CONFIRM} component={OpenWithWeChat}/>
                        {/*费用支付*/}
                        <Route path={ROUTER_FEES_PAID} component={FeesPaid}/>
                        {/*订单详情*/}
                        <Route path={ROUTER_ORDER_DETAIL} component={OrderDetail}/>
                        {/*请用微信打开*/}
                        <Route path={ROUTER_OPEN_WITH_WE_CHAT} component={OpenWithWeChat}/>
                        {/*fixme test*/}
                        {/*测试用的数据来源*/}
                        <Route path={ROUTER_ORIGIN_PAGE} component={OriginPage}/>
                        {/*默认路由*/}
                        <Redirect from="/*" to={ROUTER_OPEN_WITH_WE_CHAT}/>
                    </Switch>
                </div>
            )
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
}


