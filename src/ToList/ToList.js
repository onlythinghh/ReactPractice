import React, { Component } from 'react';
import store from '../stort/index';
import TolistUI from "./TolistUI";
import { getInputChangeAction, getAddItemAction, getDelItemAction, initListAction } from '../stort/activeCreators';
import axios from 'axios';
import stort from '../stort/index';

export default class Index extends Component {
    constructor(props) {
        super(props)
        // store.getState() 获取store的数据
        this.state = store.getState();
        // 监听 store 如果数据是否发生变化，若发生变化则执行handleStoreChange函数
        store.subscribe(this.handleStoreChange.bind(this));
    }
    renderList = () => {
        const { list } = this.state
        return list.map((item, i) => {
            return (
                <p key={i}>{item}</p>
            )
        })
    }
    render() {
        return (
            < TolistUI
                inputVal={this.state.inputVal}
                handleChange={this.handleChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleDelItem={this.handleDelItem}
            />
            // <div className="ToList" >
            //     <div className="listInput">
            //         <Input className="iptItem" value={inputVal} onChange={(e) => { this.handleChange(e) }} placeholder='todo info'></Input>
            //         <Button type="primary" onClick={() => { this.handleBtnClick() }}>提交</Button>
            //     </div>
            //     <div className="listBox">
            //         {/* {this.renderList()} */}
            //         <List
            //             size="small"
            //             bordered
            //             dataSource={list}
            //             renderItem={(item, index) => (<List.Item onClick={(index) => { this.handleDelItem(index) }}>{item}</List.Item>)}
            //         />
            //     </div>
            // </div>
        )
    }

    componentDidMount() {
        axios.get('/todolist.json').then((res) => {

            const data = res.data
            console.log(data)
            const action = initListAction(data)
            store.dispatch(action)
         }).catch((error) =>{
            console.log(error)
         })
    }
    handleStoreChange = () => {
        // 更新数据. 先去取store里的数据然后替换当前组件里的数据
        this.setState(store.getState())
    }
    handleChange = (e) => {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick = () => {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleDelItem = (index) => {
        // const action = {
        //     type: DEL_TODO_ITEM,
        //     index
        // }
        const action = getDelItemAction(index)
        store.dispatch(action)
    }
}