import { KnowLedgeIndex } from './index';
import React from 'react';
import { Greeting } from '../greeting';
import { BasicForm } from '../basicForm';

//  元素渲染
export function RenderElements(){
    return (
        <KnowLedgeIndex
            title={'元素渲染'}
            list={[
                'react元素是不可变对象，无法更改他的子元素或者属性。一个元素就像电影的一帧，代表了某个特定时刻的ui。',
                '所以，更新react，就是创建一个新的元素，传入ReactDOM.render。',
                'React DOM会将元素和他的子元素与之前的状态进行比较，只会进行必要的更新。',
                '尽管每时每刻更新了整个新的树，但React DOM都只会更新实际改变了的内容。这样做的好处是速度快，但是有可能出现bug？'
            ]}
        />
    );
}

//  组件
export function Subassembly(){
    return (
        <KnowLedgeIndex
            title={'组件'}
            list={[
                '组件，必须以大写字母开头。小写字母会被识别为原生组件。',
                '我们建议从组件资深的角度命名props，而不是依赖于调用组件的上下文，就是希望参数语义化。',
                '纯函数：不在函数体内部修改参数，对于同样的参数，返回值总是相同的。'
            ]}
        />
    );
}

//  生命周期与state
export function LifeCycleState(){
    return (
        <KnowLedgeIndex
            title={'生命周期与state'}
            questionList={[
                '构造函数是唯一可以给state赋值的地方，其他地方需要setState。setState方法做了什么？'
            ]}
            list={[
                'state与props类似，但是state是私有的，并且完全受控制与当前组件。',
                '在组件话应用程序中，当组件被销毁时，释放占用的资源是很重要的。',
                '在组件第一次渲染到DOM的时候，doSth，被称作挂载mount。',
                '组件被删除时候，doSth，被称作卸载unmount。',
                '当调用setState的时候，React会重新调用render方法来确定页面上显示什么。',
                'this.props和this.state的更新可能是异步的。',
                '数据（参数）的传递是自上而下的单向的数据流。且从某一个组件的state派生的数据都只能影响它和它的子组件，就像是瀑布的水流。',
            ]}
        />
    );
}

//  事件处理
export function EventProcessing(){
    return (
        <KnowLedgeIndex
            title={'事件处理'}
            questionList={[
                '绑定事件处理函数需要用箭头函数，这是为什么？'
            ]}
        />
    );
}

//  条件渲染
export function Conditions(){
    return (
        <KnowLedgeIndex
            title={'条件渲染'}
            list={[
                '不渲染，function return null',
                <Greeting title='条件渲染 : '/>
            ]}
        />
    );
}

//  列表&key
export function ListKey(){
    return (
        <KnowLedgeIndex
            title={'列表&key'}
            list={[
                'key帮助React识别那些元素被改变了。用于标示元素的唯一性。',
                '通常使用数据的id作为唯一标识符，万不得已用index。',
                '如果项目顺序会变化，不建议使用索引来做key，因为会导致性能变差、组件状态问题。',
                '元素的 key 只有放在就近的数组上下文中才有意义。就是如果封装了内部的元素，在循环的第一层添加key，而不是内部元素。通常就是在map函数中。',
                'key只会传递给React，而不会传递给组件作为参数。所以如果需要传递这个key的值，需要指定其他的见名。',
            ]}
        />
    );
}

//  表单
export function TheForm(){
    return (
        <KnowLedgeIndex
            title={'表单'}
            isOpen={true}
            list={[
                <BasicForm/>
            ]}
        />
    );
}
