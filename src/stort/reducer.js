import { CHANGE_INPUT_VALUE, INIT_LIST_ACTION, ADD_TODO_ITEM, DEL_TODO_ITEM } from '../stort/activeTypes';
const defaultState = {
    inputVal: '',
    list: []
}
// state 指原本（上次）的数据， action 指dispatch发送来的action的数据（新数据）
export default (state = defaultState, action) => {

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState
    }
    if(action.type === DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState
    }
    // console.log(state, action)
    return state
}