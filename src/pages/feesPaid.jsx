import React from 'react';
import '../css/color.css';
import { OrderAmount } from '../components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '../components/feesPaid/choosePaymentMethod';

// 支付成功内容
export class FeesPaid extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.location);
        this.state = {
            name: 'FeesPaid',
            //  被选中的方式，3：微信
            checkedMethod: 3
        };
        this.handleClickCheck = this.handleClickCheck.bind(this);
    }

    componentDidMount(){
        //  请求

    }

    //  选择支付方式
    handleClickCheck(checkedMethod){
        // console.log(checkedMethod);
        if (this.state.checkedMethod === checkedMethod) {
            return;
        }
        // this.setState((state) => {
        //     state.checkedMethod = checkedMethod;
        //     console.log('点击事件', this.state);
        // });
        this.setState({
            checkedMethod,
        });
    }

    render(){
        // console.log(this.state.checkedMethod);
        return (
            <div className='basic-struct'>
                <OrderAmount/>
                <ChoosePaymentMethod
                    checkedMethod={this.state.checkedMethod}
                    handleClickCheck={this.handleClickCheck}
                />
            </div>
        );
    }
}