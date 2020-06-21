import { isWX, remSet } from './utils';

//  判断是微信端？
//  设置字体大小
export function basicConfig(){
    const isWx = !isWX();
    remSet(window, document, isWx);
    return { isWx };
}