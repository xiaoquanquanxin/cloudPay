import React from 'react';
import '@css/basic-header.css';
import '@css/color.less';
import { ReBackBtn } from '@components/reBackBtn/reBackBtn';
import { HeaderTitle } from '@components/headerTitle/headerTitle';
import { HeaderRightSide } from '@components/HeaderRightSide/headerRightSide';
import {
    ROUTER_ORDER_CONFIRM,
    ROUTER_ORDER_DETAIL,
    ROUTER_FEES_PAID,
} from '@utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '@store/reduxMap';

//  头部组件
export const BasicHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({ headerType, toastToggle, namespace_feesPaid, loadingToggle }) => {
        let title;
        let rightSide;
        //  返回按钮的路径
        let ReBackBtnRoute;
        //  返回按钮之前的钩子
        let ReBackBtnBefore;
        switch (headerType) {
            case ROUTER_ORDER_CONFIRM:
                title = '交付办理';
                ReBackBtnRoute = <ReBackBtn goRoute={-1}/>;
                break;
            case ROUTER_ORDER_DETAIL:
                title = '订单详情';
                ReBackBtnRoute = <ReBackBtn goRoute={-1}/>;
                break;
            case ROUTER_FEES_PAID:
                title = '费用支付';
                rightSide = '确认订单';
                ReBackBtnBefore = (callbackFn) => {
                    toastToggle(true,
                        '您确定取消订单？',
                        //  确定取消订单
                        () => {
                            toastToggle(false);
                            loadingToggle(true);
                            setTimeout(() => {
                                loadingToggle(false);
                                const { phoneNum, orderNo } = namespace_feesPaid;
                                callbackFn(`${ROUTER_ORDER_DETAIL}?orderNo=${orderNo}&phoneNum=${phoneNum}`);
                                //  todo    5s延时
                            }, 5000);
                        },
                        //  取消取消订单
                        () => {
                            toastToggle(false);
                            return false;
                        }
                    );
                };
                ReBackBtnRoute = <ReBackBtn
                    goRoute={ROUTER_ORDER_DETAIL}
                    ReBackBtnBefore={ReBackBtnBefore}
                />;
                break;
            default:
                console.log(`错误的headerType：${headerType}`);
        }
        return (
            <header className='basic-header border-grey-blue'>
                {/*返回按钮*/}
                {ReBackBtnRoute}
                {/*头部title*/}
                <HeaderTitle title={title}/>
                {/*确认订单*/}
                <HeaderRightSide rightSide={rightSide}/>
            </header>
        );
    }
);
