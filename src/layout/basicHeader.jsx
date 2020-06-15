import React from 'react';
import { ReBackBtn } from '../components/reBackBtn/reBackBtn';
import { HeaderTitle } from '../components/headerTitle/headerTitle';
// import { request } from '../utils/request';
import '../css/basic-header.css';
import { HeaderRightSide } from '../components/HeaderRightSide/headerRightSide';

//  头部组件
export class BasicHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '交付办理',
            hasReBackBtn: true,
            hasRightSide: true,
        };
    }

    //  页面进入发送请求
    // componentDidMount(){
    //     return;
        // request({
        //     method: 'get',
        //     url: '/api/user?id=1',
        //     success: (response) => {
        //         console.log('本地的请求', response);
        //     }
        // });
    // }

    render(){
        const state = this.state;
        const hasReBackBtn = state.hasReBackBtn ? <ReBackBtn/> : '';
        return (
            <header className='basic-header'>
                {/*返回按钮*/}
                {hasReBackBtn}
                {/*头部title*/}
                <HeaderTitle title={state.title}/>
                {/*确认订单*/}
                <HeaderRightSide hasRightSide={state.hasRightSide}/>
            </header>
        );
    }
}