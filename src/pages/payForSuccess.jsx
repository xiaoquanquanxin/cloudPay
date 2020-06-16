import React from 'react';
import { PayForSuccessLogo } from '../components/payForSuccess/payForSuccessLogo';
import { PayForSuccessInfo } from '../components/payForSuccess/payForSuccessInfo';

// 支付成功内容
export class PayForSuccess extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //  请求

    }

    render(){
        return (
            <div>
                {/*logo*/}
                <PayForSuccessLogo/>
                {/*信息*/}
                <PayForSuccessInfo
                    code={122}
                    amount={45232}
                    completionTime={3223}
                />
            </div>
        );
    }
}