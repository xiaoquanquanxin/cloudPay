//  判断胜负
export function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return {
                winner: squares[a],
                winLine: lines[i]
            };
        }
    }
    return null;
}

//  游戏结束
export function isGameOverFn(squares){
    return squares.every(item => item !== null);
}

//  重置字体大小
export function remSet(win, doc){
    var docEle = doc.documentElement,
        evt = 'onorientationchange' in window ? 'onorientationchange' : 'resize', //区分Mobile和PC以加载不同的事件
        fn = function (){
            var width = docEle.clientWidth;
            if (width < 320) {
                docEle.style.fontSize = 42.6667 + 'px';
            } else if (width > 835) {
                docEle.style.fontSize = 100 + 'px';
            } else {
                docEle.style.fontSize = 100 * (width / 835) + 'px';
            }
        };
    win.addEventListener(evt, fn, false);
    doc.addEventListener('DOMContentLoaded', fn, false);
}

