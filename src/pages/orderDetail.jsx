import React from 'react';
import '../css/color.css';

import { OrderDetailInfo } from '../components/orderDetial/orderDetailInfo';
import { OrderDetailStatus } from '../components/orderDetial/orderDetailStatus';
import { OrderDetailBasic } from '../components/orderDetial/orderDetailBasic';
import { BasicHeader } from '../layout/basicHeader';
import { ROUTER_ORDER_DETAIL } from '../utils/constant';
import { BasicFooter } from '../layout/basicFooter';

// 支付成功内容
export class OrderDetail extends React.Component {
    constructor(props){
        super(props);
        console.log('👵OrderDetail',  props.history);
    }

    componentDidMount(){
        //  请求

    }

    render(){
        const OrderDetailBody = (
            <div>
                {/*订单状态*/}
                <OrderDetailStatus/>
                {/*订单基础信息*/}
                <OrderDetailBasic/>
                {/*信息*/}
                <OrderDetailInfo
                    code={122}
                    amount={45232}
                    completionTime={3223}
                />
            </div>
        );
        return (
            <div className='basic-struct'>
                {/*头部基础*/}
                <BasicHeader
                    headerType={ROUTER_ORDER_DETAIL}
                />
                {/*主要内容*/}
                {OrderDetailBody}
                <BasicFooter
                    footerType={ROUTER_ORDER_DETAIL}
                />
            </div>

        );
    }
}