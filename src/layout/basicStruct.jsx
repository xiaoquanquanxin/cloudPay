import React from 'react';
//  头部
import { BasicHeader } from './basicHeader';
//  去支付按钮
import { GoToPay } from '../components/goToPay/goToPay';
import { BasicFooter } from './basicFooter';
import { PayForSuccess } from '../pages/payForSuccess';

//  基础结构
export class BasicStruct extends React.Component {
    render(){
        return (
            <div className='basic-struct'>
                {/*头部基础*/}
                <BasicHeader/>
                {/*订单支付成功*/}
                <PayForSuccess/>
                {/*脚部基础*/}
                <BasicFooter
                    notDealWithBtn={true}
                    confirmPaymentBtn={true}
                    // toPayForBtn={true}
                    // viewOrderBtn={true}
                    // continueDealWith={true}
                />
            </div>
        );
    }
}