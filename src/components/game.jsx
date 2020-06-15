import React from 'react';
import { calculateWinner, isGameOverFn } from '../utils/utils';
import { Board } from './board.jsx';
import { GameHistory } from './gameHistory.jsx';
import { SortButton } from './sortButton.jsx';

export class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    playIndex: null,
                }
            ],
            isX: true,
            stepNumber: 0,
        };
    }

    //  下棋
    handlePlayClick(playIndex){
        let history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1].squares;
        if (calculateWinner(current) || current[playIndex]) {
            return;
        }
        const squares = current.slice();
        let isX = this.state.isX;
        squares[playIndex] = isX ? 'x' : 'o';
        isX = !isX;
        const stepNumber = history.length;
        history = history.concat([{ squares, playIndex }]);
        this.setState({
            history,
            isX,
            stepNumber,
        });
    }

    //  回溯
    handleJumpToClick(stepNumber){
        // console.log(`回溯${stepNumber}`);
        this.setState({
            stepNumber,
            isX: (stepNumber % 2) === 0
        });
    }

    //  前一个，后一个历史记录
    handleSortClick(index){
        const stepNumber = this.state.stepNumber + index;
        console.log(`stepNumber:${stepNumber}`);
        if (stepNumber < 0 || stepNumber >= this.state.history.length) {
            return;
        }
        this.setState({
            stepNumber
        });
    }

    render(){
        const history = this.state.history;
        const squares = history[this.state.stepNumber].squares;
        const gameResult = calculateWinner(squares);
        const isGameOver = isGameOverFn(squares);
        const status = (() => {
            if (gameResult) {
                // console.log(gameResult);
                return `获胜者：${gameResult.winner}`;
            }
            if (isGameOver) {
                return `平局了`;
            }
            return `下一次落子是:${this.state.isX ? 'x' : 'o'}`;
        })();
        //  获胜的那一行
        const winLine = (gameResult && gameResult.winLine) || [];
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board
                        winLine={winLine}
                        squares={squares}
                        onPlay={(i) => {this.handlePlayClick(i);}}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <GameHistory
                        history={this.state.history}
                        stepNumber={this.state.stepNumber}
                        onJumpTo={(i) => this.handleJumpToClick(i)}
                    />
                </div>
                <div className='sort'>
                    <SortButton
                        sortClick={(i) => {this.handleSortClick(i);}}
                    />
                </div>
            </div>
        );
    }
}
