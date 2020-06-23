import React from 'react';
import { standardTime } from '../../utils/utils';

//  倒计时
export class Surplus extends React.Component {
    static timer = null;

    constructor(props){
        super(props);
        this.state = {
            timeStamp: props.timeStamp,
        };
        this.count(this.state);
    }

    //  倒计时
    count = ({ timeStamp }) => {
        if (Surplus.timer !== null) {
            return;
        }
        Surplus.timer = setInterval(() => {
            --timeStamp;
            this.setState({ timeStamp, }, () => {
                if (timeStamp <= 0) {
                    this.SurplusClearInterval();
                    // window.location.reload();
                }
            });
        }, 1000);
    };

    componentWillUnmount(){
        this.SurplusClearInterval();
    }

    SurplusClearInterval(){
        clearInterval(Surplus.timer);
        Surplus.timer = null;
    }

    render(){
        const time = standardTime(this.state.timeStamp);
        // console.log(time);
        return (
            <span>{time}后订单自动关闭</span>
        );
    }
}