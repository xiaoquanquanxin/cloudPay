import React from 'react';
import './deliveryDealWith.css';
import '../../css/color.css';

//  副标题
import { SubTitle } from '../subTitle/subTitle';
//  楼盘图片
import building from '../../images/building.png';

//  交付办理
export function DeliveryDealWith({ placeName, phoneNumber, idCard, costType, costNumber },){
    return (
        <div>
            <div className='delivery-basic-info border-grey'>
                <img src={building} alt="当前楼盘logo"/>
                <div className='delivery-container'>
                    <div className='delivery-place'>{placeName}</div>
                    <div className='delivery-content color-grey'>
                        <div className='delivery-phone'>手机号码：{phoneNumber}</div>
                        <div className='delivery-id-card'>身份证号码：{idCard}</div>
                    </div>
                </div>
            </div>
            <SubTitle text='费用合计'/>
            <div className='delivery-coast-content'>
                <div className='delivery-coast-type color-grey'>{costType}</div>
                <div className='delivery-coast order-amount'>¥{costNumber}</div>
            </div>
        </div>
    );
}