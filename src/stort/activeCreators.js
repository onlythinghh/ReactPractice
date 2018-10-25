// 统一创建action。同样的如果项目不复杂可以不用单独创建一个文件

import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './activeTypes';
export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () =>({
    type: ADD_TODO_ITEM,
})

export const getDelItemAction = (index) =>({
    type: DEL_TODO_ITEM,
    index
})
