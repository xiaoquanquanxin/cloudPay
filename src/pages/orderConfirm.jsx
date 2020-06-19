import React from 'react';
import '../css/color.css';
import { BasicHeader } from '../layout/basicHeader';
import { BasicFooter } from '../layout/basicFooter';
import { SubTitle } from '../components/subTitle/subTitle';
import { ROUTER_ORDER_CONFIRM } from '../utils/constant';

//  楼盘图片
import building from '../images/building.png';

// 确认订单layout
export function OrderConfirm({ history }){
    console.log('🍉确认订单layout', history);
    const OrderConfirmBody = (
        <div className='basic-struct'>
            <img src={building} alt="当前楼盘logo"/>
            <div>
                楼盘的各种信息
            </div>
            <SubTitle text='费用合计'/>
            <div>金额1221</div>
        </div>
    );
    return (
        <div className='basic-struct'>
            {/*头部基础*/}
            <BasicHeader
                headerType={ROUTER_ORDER_CONFIRM}
            />
            {/*主要内容*/}
            {OrderConfirmBody}
            <BasicFooter
                footerType={ROUTER_ORDER_CONFIRM}
            />
        </div>
    );
}