import React from 'react';
import {
    Conditions,
    EventProcessing,
    LifeCycleState,
    RenderElements,
    Subassembly,
    ListKey,
    TheForm
} from './knowLedgeItem/article';

class ManyTimes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        };
    }

    tick(){
        this.setState((state) => ({
            time: new Date().toLocaleString(),
        }));
        //  ⚠️另一种
        this.setState((state, props) => {
            // console.log(state, props);
            return {};
        });
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    btnClick1 = (e) => {
        // console.log(e.target);
        console.log(this);
    };

    btnClick2(e){
        // console.log(e.target);
        console.log(this);
    };

    btnClick3(name, ...rest){
        console.log(name, rest[rest.length - 1].target);
    };

    render(){
        return (
            <div>
                <div>我是state记录的时间，{this.state.time}</div>
                <button onClick={this.btnClick1}>事件绑定1</button>
                <button onClick={this.btnClick2}>事件绑定2</button>
                <button onClick={(e) => {this.btnClick3('参数', this, e);}}>事件绑定3</button>
            </div>
        );
    }
}

export function KnowLedge(){
    return (
        <div>
            <ManyTimes/>
            <RenderElements/>
            <Subassembly/>
            <LifeCycleState/>
            <EventProcessing/>
            <Conditions/>
            <ListKey/>
            <TheForm/>
        </div>
    );
}



