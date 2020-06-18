import React from 'react';
import '../css/color.css';
import { OrderAmount } from '../components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '../components/feesPaid/choosePaymentMethod';
import { QRCode } from '../components/QRCode/QRCode';

// 支付成功内容
export class FeesPaid extends React.Component {
    constructor(props){
        super(props);
        // console.log('page🍃:支付成功\nprops:', props);
        this.state = {
            name: 'FeesPaid',
            //  被选中的方式，3：微信
            checkedMethod: 3,
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
        this.setState({
            checkedMethod,
        });
    }

    render(){
        const state = this.state;
        // const props = this.props;
        // console.log(props);
        return (
            <div className='basic-struct'>
                {/*支付信息*/}
                <OrderAmount/>
                {/*支付选择*/}
                <ChoosePaymentMethod
                    checkedMethod={state.checkedMethod}
                    handleClickCheck={this.handleClickCheck}
                />
                {/*二维码*/}
                <QRCode
                    amount={13.43}
                />
            </div>
        );
    }
}