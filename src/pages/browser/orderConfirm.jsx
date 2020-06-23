import React from 'react';
import '../../css/color.css';
import { BasicHeader } from '../../layout/basicHeader';
import { BasicFooter } from '../../layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '../../utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import { DeliveryDealWith } from '../../components/deliveryDealWith/deliveryDealWith';
import Qs from 'qs';
import { SubTitle } from '../../components/subTitle/subTitle';

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
            data.feeItems = JSON.stringify(data.feeItems);
            console.log(data);
            //  放到redux里
            props.setOrderConfirm(data);
            this.state = data;
        }

        render(){
            const {
                itemSourceName,
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
                        itemSourceName={itemSourceName}
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

