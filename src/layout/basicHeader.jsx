import React from 'react';
import '../css/basic-header.css';
import '../css/color.css';
import { ReBackBtn } from '../components/reBackBtn/reBackBtn';
import { HeaderTitle } from '../components/headerTitle/headerTitle';
import { Route } from 'react-router-dom';
import { HeaderRightSide } from '../components/HeaderRightSide/headerRightSide';
import {ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
} from '../utils/constant';

//  头部组件
export function BasicHeader({ headerType }){
    let title;
    let rightSide;
    switch (headerType) {
        case ROUTER_ORDER_CONFIRM:
            title = '交付办理';
            break;
        case ROUTER_ORDER_DETAIL:
            title = '订单详情';
            break;
        case ROUTER_FEES_PAID:
            title = '费用支付';
            rightSide = '确认订单';
            break;
        default:
            console.log(`错误的headerType：${headerType}`);
    }
    return (
        <header className='basic-header border-grey-blue'>
            {/*返回按钮*/}
            <Route component={ReBackBtn}/>
            {/*头部title*/}
            <HeaderTitle title={title}/>
            {/*确认订单*/}
            <HeaderRightSide rightSide={rightSide}/>
        </header>
    );
}