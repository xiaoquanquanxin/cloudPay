import React from 'react';
import '../css/color.css';
import { OrderAmount } from '../components/feesPaid/orderAmount';
import { ChoosePaymentMethod } from '../components/feesPaid/choosePaymentMethod';
import { QRCode } from '../components/QRCode/QRCode';
import { BasicHeader } from '../layout/basicHeader';
import { ROUTER_FEES_PAID } from '../utils/constant';
import { BasicFooter } from '../layout/basicFooter';

// 支付成功layout
export class FeesPaid extends React.Component {
    constructor(props){
        super(props);
        console.log('🍉支付成功layout', props.history);
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
        const FeesPaidBody = (
            <div>
                {/*支付信息*/}
                <OrderAmount/>;
                {/*支付选择*/}
                <ChoosePaymentMethod
                    checkedMethod={state.checkedMethod}
                    handleClickCheck={this.handleClickCheck}
                />;
                {/*二维码*/}
                <QRCode
                    amount={13.43}
                />
            </div>
        );
        return (
            <div className='basic-struct'>
                {/*头部基础*/}
                <BasicHeader
                    headerType={ROUTER_FEES_PAID}
                />
                {/*主要内容*/}
                {FeesPaidBody}
                <BasicFooter
                    footerType={ROUTER_FEES_PAID}
                />
            </div>
        );
    }
}

