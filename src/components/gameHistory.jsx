import React from 'react';

export class GameHistory extends React.Component {
    render(){
        // console.log(this.props.stepNumber);
        const stepNumber = this.props.stepNumber;
        const history = this.props.history;
        const list = history.map((item, index) => {
            const key = `key_${index}`;
            const row = Math.floor(item.playIndex / 3);
            const col = item.playIndex % 3;
            const str = !index ? '重新开始' : `返回到第:${index}步，${row} - ${col}`;
            //  被选中的css
            const isActiveClass = (stepNumber === index) ? 'active' : '';
            //  key，用于区分列表项和同级列表的关系
            return (
                <li key={key}>
                    <button
                        className={isActiveClass}
                        onClick={() => this.props.onJumpTo(index)}
                    >
                        {str}
                    </button>
                </li>
            );
        });
        return (
            <ul>{list}</ul>
        );
    }
}