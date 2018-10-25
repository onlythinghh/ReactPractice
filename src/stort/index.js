import { createStore } from 'redux'
import reducer from './reducer'

const stort = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // 支持Redux调试工具用
);

export default stort