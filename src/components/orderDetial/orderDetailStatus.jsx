import React from 'react';
import './orderDetailStatus.css';
import '../../css/color.css';
import { timeSurplus } from '../../utils/utils';
import { Surplus } from './countDown';

//  订单状态
export function OrderDetailStatus({
    tranStatus = -1, tranDate = '-'
}){
    tranStatus = Number(tranStatus);
    return (
        <div className='order-detail-status border-grey'>
            <StatusTitle
                tranStatus={tranStatus}
                tranDate={tranDate}
            />
            <CountDown
                tranStatus={tranStatus}
                tranDate={tranDate}
            />
        </div>
    );
}

//  状态名称
function StatusTitle({ tranStatus, tranDate }){
    let str;
    //  感谢您使用在线缴费！
    switch (tranStatus) {
        //  0待支付  1支付成功  2 已取消
        case 0:
            str = '待支付';
            break;
        case 1:
            str = '支付成功';
            break;
        case 2:
            // case 4:
            str = '已取消';
            break;
        case -1:
            str = '';
            break;
        default:
            throw new Error(`错误的${tranStatus}`);
    }

    return (
        <p className='status-detail-line'>
            <span className='status-detail status-detail-red'>{str}</span>
            <time className='status-detail-time color-grey'>{tranDate}</time>
        </p>
    );
}

//  倒计时
function CountDown({ tranStatus, tranDate }){
    let str;
    //  感谢您使用在线缴费！
    switch (tranStatus) {
        case 0:
            tranDate = tranDate.replace(/-/ig, '/');
            let timeStamp = timeSurplus(tranDate);
            str = <Surplus timeStamp={timeStamp}/>;
            break;
        case 1:
            str = '感谢您使用在线缴费';
            break;
        // case 3:
        //     str = '付款超时，订单已关闭！';
        //     break;
        case 2:
            str = '取消成功，订单已关闭！';
            break;
        case -1:
            str = '';
            break;
        default:
            throw new Error(`错误的${tranStatus}`);
    }
    return <p className='countdown-pay color-grey'>{str}</p>;
}



