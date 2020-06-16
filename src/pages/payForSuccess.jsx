import React from 'react';
import { PayForSuccessLogo } from '../components/payForSuccess/payForSuccessLogo';
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
                <PayForSuccessLogo/>
            </div>
        );
    }
}