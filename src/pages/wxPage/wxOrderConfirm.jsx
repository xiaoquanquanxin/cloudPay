import React from 'react';
import '../../css/color.css';
import '../../css/wxOrderConfirm.css';
import { BasicFooter } from '../../layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '../../utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';

// 确认订单layout
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
            window.document.title = '确认订单';
            // console.log('👵OrderConfirm', props.history);
            props.loadingToggle(true);
            this.state = {
                //  地名
                itemSourceName: '',
                //  手机号
                phoneNum: '',
                //  身份证
                idCard: '',
                //  费用类型
                feeName: '',
                //  费用金额
                feeIteamId: 0,
            };
        }

        //  钩子函数请求
        componentDidMount(){

        }

        //  请求赋值
        setData({ itemSourceName, phoneNum, idCard, feeName, feeIteamId }){
            this.setState((state) => {
                return {
                    itemSourceName,
                    phoneNum,
                    idCard,
                    feeName,
                    feeIteamId
                };
            });
        }

        render(){
            const state = this.state;
            return (
                <div className='basic-struct'>
                    <ul className='wx-order-confirm'>
                        <li className='border-grey'>房间:{state.itemSourceName}</li>
                        <li className='wx-order-type border-grey'>
                            <span>{state.feeName}</span>
                            <span className='order-detail-cost-amount'>¥{state.feeIteamId}</span>
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

