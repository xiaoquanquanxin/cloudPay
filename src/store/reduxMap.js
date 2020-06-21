import {
    setLoadingIsShow,
    setQrCodeIsShow,
    setToastIsShow
} from './actions';

//  指定如何把当前 Redux store state 映射到展示组件的 props 中
//  ✅读取state到props
export const mapStateToProps = ({
    namespace_qrCode,
    namespace_loading,
    namespace_toast,
}) => {
    return {
        namespace_qrCode,
        namespace_loading,
        namespace_toast,
    };
};

//  触发
//  除了读取 state，容器组件还能分发 action。
//  类似的方式，可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
//  ✅通过dispatch触发action到原始的state
export const mapDispatchToProps = (dispatch) => {
    return {
        //  切换loading
        loadingToggle: (qrIsShow) => {
            dispatch(setLoadingIsShow(qrIsShow));
        },
        //  二维码打开/关闭
        qrCodeToggleClick: (qrIsShow, qrCodeImg) => {
            //  如果是要展示二维码
            dispatch(
                setQrCodeIsShow(qrIsShow, qrCodeImg),
            );
        },
        //  普通弹框
        toastToggle: (isShow, text, confirmClick, cancelClick,) => {
            dispatch(setToastIsShow(isShow, text, confirmClick, cancelClick,));
        }
    };
};

