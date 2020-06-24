import React from 'react';
import { connect } from 'react-redux';
import Qs from 'qs';
import { BasicHeader } from '@src/layout/basicHeader';
import { BasicFooter } from '../../layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '../../utils/constant';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import { DeliveryDealWith } from '../../components/deliveryDealWith/deliveryDealWith';
import { isWX } from '../../utils/utils';
import '../../css/color.css';

// 确认订单layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '确认订单';
            const search = decodeURIComponent(props.history.location.search.slice(1));
            if (search === '') {
                return;
            }
            //  解析出来的数据
            const data = JSON.parse(Qs.parse(search).data);
            //  优惠券
            data.haveCoupon = 0;
            //  终端类型 0 Android 1 iPhone 2 pad 3 微信
            data.terminalSource = isWX() ? 3 : 2;
            console.log(data);
            if (data.feeItems.length <= 5) {
                props.toastToggle(true, '参数异常', () => {
                    props.history.goBack();
                });
            }
            //  放到redux里
            props.setOrderConfirm(data);
            this.state = data;
        }

        render(){
            const {
                projectAddress,
                phoneNum,
                idCard,
                feeName,
                totalAmount
            } = this.state;
            return (
                <div className='basic-struct'>
                    {/*头部基础*/}
                    <BasicHeader
                        headerType={ROUTER_ORDER_CONFIRM}
                    />
                    {/*主要内容*/}
                    <DeliveryDealWith
                        projectAddress={projectAddress}
                        phoneNum={phoneNum}
                        idCard={idCard}
                        feeName={feeName}
                        totalAmount={totalAmount}
                    />
                    <BasicFooter
                        footerType={ROUTER_ORDER_CONFIRM}
                    />
                </div>
            );
        }
    }
);

