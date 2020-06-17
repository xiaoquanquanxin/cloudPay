import React from 'react';
import '../css/basic-header.css';
import '../css/color.css';
import { ReBackBtn } from '../components/reBackBtn/reBackBtn';
import { HeaderTitle } from '../components/headerTitle/headerTitle';
// import { request } from '../utils/request';

import { HeaderRightSide } from '../components/HeaderRightSide/headerRightSide';
import {
    ROUTER_FEES_PAID,
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL
} from '../utils/constant';

//  头部组件
export class BasicHeader extends React.Component {
    constructor(props){
        super(props);
        const state = {};
        this.state = state;
        switch (props.location.pathname) {
            case ROUTER_ORDER_CONFIRM:
                state.title = '交付办理';
                break;
            case ROUTER_ORDER_DETAIL:
                state.title = '订单详情';
                break;
            case ROUTER_FEES_PAID:
                state.title = '费用支付';
                state.rightSide = '确认订单';
                break;
            default:
                throw new Error(props.location.pattern);
        }
    }

    //  页面进入发送请求
    // componentDidMount(){
    //     return;
    // request({
    //     method: 'get',
    //     url: '/api/user?id=1',
    //     success: (response) => {
    //         console.log('本地的请求', response);
    //     }
    // });
    // }

    render(){
        const state = this.state;
        return (
            <header className='basic-header border-grey-blue'>
                {/*返回按钮*/}
                <ReBackBtn/>
                {/*头部title*/}
                <HeaderTitle title={state.title}/>
                {/*确认订单*/}
                <HeaderRightSide rightSide={state.rightSide}/>
            </header>
        );
    }
}