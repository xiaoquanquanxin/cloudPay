import React from 'react';
import '../../css/color.css';
import '../../css/wxOrderConfirm.css';
import { BasicFooter } from '../../layout/basicFooter';
import { ROUTER_ORDER_CONFIRM } from '../../utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../store/reduxMap';
import { requestConfirm } from '../../api/api';

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
                placeName: '',
                //  手机号
                phoneNumber: '',
                //  身份证
                idCard: '',
                //  费用类型
                costType: '',
                //  费用金额
                costNumber: 0,
            };
        }

        //  钩子函数请求
        componentDidMount(){
            requestConfirm(null)
                .then(v => {
                    const data = {
                        //  地名
                        placeName: '实地·广州常春藤-7号地块-Z3-12#-101 | 石晓迪',
                        //  手机号
                        phoneNumber: '137****0077',
                        //  身份证
                        idCard: '132628********4510',
                        //  费用类型
                        costType: '住宅物业费合计',
                        //  费用金额
                        costNumber: 3600.00,
                    };
                    this.setData(data);
                })
                .then(() => {
                    this.props.loadingToggle(false);
                });
        }

        //  请求赋值
        setData({ placeName, phoneNumber, idCard, costType, costNumber }){
            this.setState((state) => {
                return {
                    placeName,
                    phoneNumber,
                    idCard,
                    costType,
                    costNumber
                };
            });
        }

        render(){
            const state = this.state;
            return (
                <div className='basic-struct'>
                    <ul className='wx-order-confirm'>
                        <li className='border-grey'>房间:{state.placeName}</li>
                        <li className='wx-order-type border-grey'>
                            <span>{state.costType}</span>
                            <span className='order-detail-cost-amount'>¥{state.costNumber}</span>
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

