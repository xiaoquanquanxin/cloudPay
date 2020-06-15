import React from 'react';

export class BasicForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            selectedValue: 'b',
            selectedMultiple: ['a', 'd'],
            inputF: 'input-1',
            inputS: 'input-2',
            inputT: 'input-3',
        };
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    };

    handleSubmit = (e) => {
        console.log(this.state.value);
        e.preventDefault();
    };

    handleSelected = (e) => {
        const selectedValue = e.target.value;
        this.setState((state) => ({
            selectedValue,
        }));
    };

    //  多选
    handleSelectedMultiple = (e) => {
        const selectedMultiple = [];
        Array.prototype.forEach.call(e.target.options, (item) => {
            if (item.selected) {
                selectedMultiple.push(item.value);
            }
        });
        this.setState(() => ({
            selectedMultiple,
        }));
    };

    //  批处理多个输入
    handleChangeBatch = (e) => {
        const name = e.target.name;
        let key = null;
        switch (name) {
            case 'input-1':
                key = 'inputF';
                break;
            case 'input-2':
                key = 'inputS';
                break;
            case 'input-3':
                key = 'inputT';
                break;
            default:
                throw new Error(`错误的${name}`);
        }
        const value = e.target.value;
        this.setState(() => ({
            [key]: value
        }));
        console.log(this.state)
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>文本框</p>
                    <label>名字&nbsp;:&emsp;
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        /></label>&emsp;
                    <button type='submit'>提交</button>
                    <p>textarea</p>
                    <textarea name="textarea" cols="30" rows="10"
                              value={this.state.value}
                              onChange={this.handleChange}
                    />
                    <p>单选</p>
                    <select name="select"
                            value={this.state.selectedValue}
                            onChange={this.handleSelected}
                    >
                        <option value="a">aaaaaaaa</option>
                        <option value="b">bbbbbbbb</option>
                        <option value="c">cccccccc</option>
                    </select>
                    <p>多选</p>
                    <select name="select-m"
                            multiple={true}
                            value={this.state.selectedMultiple}
                            onChange={this.handleSelectedMultiple}
                    >
                        <option value="a">aaaaaaaa</option>
                        <option value="b">bbbbbbbb</option>
                        <option value="c">cccccccc</option>
                        <option value="d">dddddddd</option>
                    </select>
                    <p>文件上传，通过File Api控制</p>
                    <input type="file"/>
                    <p>处理多个输入</p>
                    <input type="text" name='input-1'
                           value={this.state.inputF}
                           onChange={this.handleChangeBatch}
                    />
                    <br/>
                    <input type="text" name='input-2'
                           value={this.state.inputS}
                           onChange={this.handleChangeBatch}
                    />
                    <br/>
                    <input type="text" name='input-3'
                           value={this.state.inputT}
                           onChange={this.handleChangeBatch}
                    />
                    <br/>
                </form>
            </div>
        );
    }
}
