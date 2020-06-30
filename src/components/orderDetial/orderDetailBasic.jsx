import React from 'react';
import './orderDetailBasic.less';
import '@css/color.less';
import { SubTitle } from '@components/subTitle/subTitle';
import { timeSurplus } from '@utils/utils';
import { Surplus } from '@components/orderDetial/countDown';
import { OrderInfo } from '@components/orderInfo/wxOrderInfo';

export function OrderDetailBasic(props){
    const {
        tranStatus, tranDate,
        roomNames, feeName, payMoney,
        transactionid, tranPayType,
    } = Object.assign({
        tranStatus: -1,
        tranPayType: '在线支付'
    }, props.renderData);

    let tranStatusText;
    let countDownPayText;
    //  感谢您使用在线缴费！
    switch (tranStatus) {
        //  0待支付  1支付成功  2 已取消
        case 0:
            tranStatusText = '待支付';
            let timeStamp = timeSurplus(tranDate.replace(/-/ig, '/'));
            countDownPayText = <Surplus timeStamp={timeStamp}/>;
            break;
        case 1:
            tranStatusText = '支付成功';
            countDownPayText = '感谢您使用在线缴费';
            break;
        case 2:
            tranStatusText = '已取消';
            countDownPayText = '取消成功，订单已关闭！';
            break;
        case -1:
            tranStatusText = '订单状态';
            countDownPayText = '-';
            break;
        default:
            throw new Error(`错误的${tranStatus}`);
    }

    return (
        <div>
            {/*订单状态*/}
            <div className='order-detail-status border-grey'>
                <p className='status-detail-line'>
                    <span className='status-detail status-detail-red'>{tranStatusText}</span>
                    <time className='status-detail-time color-grey'>{tranDate}</time>
                </p>
                <p className='countdown-pay color-grey'>{countDownPayText}</p>
            </div>
            {/*房间*/}
            <div className='order-detail-basic'>
                <p className='order-detail-room border-grey color-dark'>房间：{roomNames}</p>
                <p className='order-detail-cost border-grey color-dark'><span>{feeName}</span><span
                    className='order-detail-cost-amount'>¥{payMoney}</span></p>
            </div>
            <SubTitle text='订单信息'/>
            <OrderInfo
                iswx={false}
                transactionid={transactionid}
                tranDate={tranDate}
                tranPayType={tranPayType}
            />
        </div>
    );
}