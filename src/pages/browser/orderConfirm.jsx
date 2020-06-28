import React from 'react';
import { connect } from 'react-redux';
import { BasicHeader } from '@layout/basicHeader';
import { BasicFooter } from '@layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '@utils/constant';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import { DeliveryDealWith } from '@components/deliveryDealWith/deliveryDealWith';
import { analyticOrderConfirmParameter } from '@utils/utils';
import '@css/color.less';

// 确认订单layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '确认订单';
            this.state = analyticOrderConfirmParameter(props);
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

