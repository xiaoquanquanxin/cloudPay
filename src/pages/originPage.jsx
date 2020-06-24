import React from 'react';
import './originPage.css';
import {
    __testPropertyApiPrepaymentQueryFeeitemDetails,
} from '../api/api';
import { ROUTER_ORDER_CONFIRM } from '../utils/constant';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/reduxMap';


//  数据来源页面
export const OriginPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                list: [],
                jumpList: [],
            };
            props.loadingToggle(true);
            this.goToOrderConfirm = this.goToOrderConfirm.bind(this);
            this.chooseItem = this.chooseItem.bind(this);
        }

        //  请求
        componentDidMount(){
            //  测试-查询专项预缴费项明细
            __testPropertyApiPrepaymentQueryFeeitemDetails()
                .then(v => {
                    const list = v.data.feeItems;
                    this.setState(state => {
                        return {
                            list,
                        };
                    });
                    // this.props.loadingToggle(false);
                });
        }

        //  跳转
        goToOrderConfirm(){
            const data = encodeURIComponent(JSON.stringify(
                Object.assign({
                    //  用户主数据id
                    cmdsId: '7e1905fdad244d02aaa84bd93b2decba',
                    //  客户名称
                    userName: '权鑫',
                    //  订单金额
                    totalAmount: '0.01',
                    //  房间主数据id
                    pmdsRoomId: 'e04c5fe7-5ac4-4d06-ad3a-071c6b970c0b',//  	T文本	是
                    //  用户手机号
                    phoneNum: 15712852037,//  	T文本	是
                    //  费项id
                    feeId: 4801,
                }, {
                    feeItems: JSON.stringify(this.state.jumpList)
                })
            ));
            console.log(data);
            this.props.history.push(`${ROUTER_ORDER_CONFIRM}?data=${data}`);
        }

        //  选择这个
        chooseItem(item){
            const state = this.state;
            const index = state.jumpList.indexOf(item);
            const jumpList = state.jumpList.slice();
            //  添加
            if (index === -1) {
                jumpList.push(item);
                item.isCheckedItem = true;
            } else {
                //  删除
                jumpList.splice(index, 1);
                item.isCheckedItem = false;
            }
            this.setState(item => {
                return {
                    jumpList,
                };
            });
            // console.log(jumpList);
        }

        // 渲染列表
        renderList(){
            return this.state.list.map((item, index) => {
                const className = item.isCheckedItem ? 'is-checked-item' : '';
                return (
                    <li key={index}
                        className={className}
                        onClick={() => {this.chooseItem(item);}}
                    >{item.feeName} -- {item.feeIteamId} -- {item.feeStartDate}</li>
                );
            });
        }

        render(){
            return (
                <div className='origin-content'>
                    <ul className='origin-list'>
                        {this.renderList()}
                    </ul>
                    <button onClick={this.goToOrderConfirm}>进入下一页</button>
                </div>
            );
        }

    }
);
