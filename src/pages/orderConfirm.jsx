import React from 'react';
import '../css/color.css';
import { BasicHeader } from '../layout/basicHeader';
import { BasicFooter } from '../layout/basicFooter';
import { SubTitle } from '../components/subTitle/subTitle';
import { ROUTER_ORDER_CONFIRM } from '../utils/constant';

//  楼盘图片
import building from '../images/building.png';
import { request } from '../utils/request';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/reduxMap';

// 确认订单layout
export const OrderConfirm = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    class extends React.Component {
        constructor(props){
            super(props);
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
            request({
                method: 'post',
                url: 'https://web-api.juejin.im/v3/web/wbbr/bgeda',
                data: {
                    name: 1,
                    age: 2,
                    list: [32],
                    b: 32,
                },
            })
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

        //  渲染主要
        renderBody({ placeName, phoneNumber, idCard, costType, costNumber }){
            return (
                <div>
                    <img src={building} alt="当前楼盘logo"/>
                    <div>{placeName}</div>
                    <div>{phoneNumber}</div>
                    <div>{idCard}</div>
                    <SubTitle text='费用合计'/>
                    <div>{costType}</div>
                    <div>{costNumber}</div>
                </div>
            );
        }

        render(){
            return (
                <div className='basic-struct'>
                    {/*头部基础*/}
                    <BasicHeader
                        headerType={ROUTER_ORDER_CONFIRM}
                    />
                    {/*主要内容*/}
                    {this.renderBody(this.state)}
                    <BasicFooter
                        footerType={ROUTER_ORDER_CONFIRM}
                    />
                </div>
            );
        }
    }
);
