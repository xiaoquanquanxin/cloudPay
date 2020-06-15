import React from 'react';

//  如果组件只含有一个render方法，并且不含state，那么使用函数组件最佳
function Square(props){
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.myValue}
        </button>
    );
}

//  父组件
export class Board extends React.Component {
    renderSquare(i){
        const className = this.props.winLine.indexOf(i) === -1 ? 'square' : 'square square-win';
        return <Square key={i}
                       className={className}
                       myValue={this.props.squares[i]}
                       onClick={() => this.props.onPlay(i)}
        />;
    }

    render(){
        const board = Array(3).fill(Array(3).fill(null));
        let i = 0;
        const boardMap = board.map((list, index) => {
            const itemMap = list.map((_item, _index) => {
                return this.renderSquare(i++);
            });
            return (
                <div className='board-row' key={index}>
                    {itemMap}
                </div>
            );
        });
        return (
            <div>
                {boardMap}
            </div>
        );
    }
}