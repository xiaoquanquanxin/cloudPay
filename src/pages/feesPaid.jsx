import React from 'react';
import '../css/color.css';
import { OrderAmount } from '../components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '../components/feesPaid/choosePaymentMethod';

// 支付成功内容
export class FeesPaid extends React.Component {
    // constructor(props){
    //     super(props);
    //     // console.log(this.props.location);
    // }

    componentDidMount(){
        //  请求

    }

    render(){
        return (
            <div className='basic-struct'>
                <OrderAmount/>
                <ChoosePaymentMethod/>
            </div>
        );
    }
}