//  支付页面
import { ACTION_FEES_PAID } from './actions';

//  支付类型
export function namespace_feesPaid(state = {}, action){
    const { type, data } = action;
    if (type === ACTION_FEES_PAID) {
        return Object.assign({}, state, data);
    }
    return state;
}