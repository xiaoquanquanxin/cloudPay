//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，
import { combineReducers } from 'redux';
//  二维码
import { namespace_qrCode } from './reducer_qrcode';
import { namespace_Loading } from './reducer_loading';

const AppRedux = combineReducers({
    //  二维码
    namespace_qrCode,
    //  loading
    namespace_Loading,
});
export default AppRedux;

