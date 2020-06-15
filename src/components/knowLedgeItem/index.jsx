import React from 'react';
import './article.css';

export class KnowLedgeIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: props.isOpen || false
        };
    }

    //  点击标题，展开或收起内容
    handleTitleClick = () => {
        const isOpen = !this.state.isOpen;
        this.setState({
            isOpen,
        });
    };

    render(){
        const list = (this.props.list || []).map(str => {
            return (
                <li key={str}>{str}</li>
            );
        });
        const questionList = (this.props.questionList || []).map(str => {
            return (
                <li className='question' key={str}>{str}</li>
            );
        });
        const title = `${this.props.title || '无标题'} `;
        const subTitle = `共计${list.length + questionList.length}条内容`;
        return (
            <div>
                <h3
                    className='title'
                    title='可点击'
                    onClick={() => this.handleTitleClick()}
                >
                    {title}
                    <sup>{subTitle}</sup></h3>
                <ol className={this.state.isOpen ? '' : 'hide'}>{list}{questionList}</ol>
            </div>
        );
    }
}