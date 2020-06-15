import React from 'react';
import { ReBackBtn } from './reBackBtn/reBackBtn';
import { HeaderTitle } from './headerTitle/headerTitle';
import { request } from '../utils/request';
import '../css/basic.css';
import '../css/basic-header.css';

//  头部组件
export class BasicHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '交付办理',
            hasReBackBtn: true,
        };
    }

    //  页面进入发送请求
    componentDidMount(){
        request({
            method: 'get',
            url: '/api/user?id=1',
            success: (response) => {
                console.log('本地的请求', response);
            }
        });
    }

    render(){
        const state = this.state;
        const hasReBackBtn = state.hasReBackBtn ? <ReBackBtn/> : '';
        return (
            <div className='basic-header '>
                <div className='basic-header-content clear'>
                    {/*返回按钮*/}
                    {hasReBackBtn}
                    {/*头部title*/}
                    <HeaderTitle title={state.title}/>
                </div>
                <hr className='basic-hr'/>
            </div>
        );
    }
}