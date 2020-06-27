import React from 'react';
import '@css/color.less';
import '@css/wxOrderConfirm.css';
import { BasicFooter } from '@layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '@utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';
import Qs from 'qs';
import { analyticOrderConfirmParameter, isWX } from '@utils/utils';

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
            const state = this.state;
            return (
                <div className='basic-struct'>
                    <ul className='wx-order-confirm'>
                        <li className='border-grey'>房间:{state.projectAddress}</li>
                        <li className='wx-order-type border-grey'>
                            <span>{state.feeName}</span>
                            <span className='order-detail-cost-amount'>¥{state.totalAmount}</span>
                        </li>
                    </ul>
                    <BasicFooter
                        footerType={ROUTER_ORDER_CONFIRM}
                    />
                </div>
            );
        }
    }
);

