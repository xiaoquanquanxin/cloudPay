import React from 'react';
// import './orderDetails.css';
import '../css/color.css';
import { OrderDetailInfo } from '../components/orderDetial/orderDetailInfo';
import { OrderDetailStatus } from '../components/orderDetial/orderDetailStatus';
import { OrderDetailBasic } from '../components/orderDetial/orderDetailBasic';

// 支付成功内容
export class OrderDetails extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        //  请求

    }

    render(){
        return (
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
    }
}