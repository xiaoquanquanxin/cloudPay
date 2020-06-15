import React from 'react';
//  头部
import { BasicHeader } from './basicHeader';
//  去支付按钮
import { GoToPay } from '../components/goToPay/goToPay';
import { BasicFooter } from './basicFooter';

//  基础结构
export class BasicStruct extends React.Component {
    render(){
        return (
            <div className='basic-struct'>
                {/*头部基础*/}
                <BasicHeader/>
                {/*去支付按钮*/}
                <GoToPay/>
                {/*脚部基础*/}
                <BasicFooter/>
            </div>
        );
    }
}