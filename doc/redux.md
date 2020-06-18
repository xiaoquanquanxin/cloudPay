####1.不要修改 state。 
使用 Object.assign() 新建了一个副本。不能这样使用 Object.assign(state, { visibilityFilter: action.filter })，因为它会改变第一个参数的值。
你必须把第一个参数设置为空对象。
你也可以开启对 ES7 提案对象展开运算符的支持, 从而使用 { ...state, ...newState } 达到相同的目的。
####2.在 default 情况下返回旧的 state。
遇到未知的 action 时，一定要返回旧的 state。