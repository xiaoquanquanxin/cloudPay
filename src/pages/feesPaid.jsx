import React from 'react';
import '../css/color.css';
import { OrderAmount } from '../components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '../components/feesPaid/choosePaymentMethod';
import { QRCode } from '../components/QRCode/QRCode';

// 支付成功内容
export class FeesPaid extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.location);
        this.state = {
            name: 'FeesPaid',
            //  被选中的方式，3：微信
            checkedMethod: 3,
            //  二维码是否展示
            QRCodeIsShow: true,
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
        const state = this.state;
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
                    QRCodeIsShow={state.QRCodeIsShow}
                />
            </div>
        );
    }
}