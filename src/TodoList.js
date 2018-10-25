import React, { Component } from 'react'
import ToList from './ToList/ToList'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVlaue: '',
            list: []
        }
    }

    render() {
        return (
            <div>
                <ToList></ToList>
                {/* <div>
                    <input type="text" value={this.state.inputVlaue} onChange={this.handleChangeInput} /><button onClick={this.handleBtn}>提交</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            // dangerouslySetInnerHTML={{ __html: item }} 可以直接输出input中输入的标签默认的样式，但是有一定安全隐患
                            // <li key={index} onClick={this.handleItemDel.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }}></li>
                            <li key={index} onClick={this.handleItemDel.bind(this, index)} >{item}</li>
                        )
                    })}
                </ul> */}
            </div>

        )
    }
    handleChangeInput = (e) => {
        this.setState({
            inputVlaue: e.target.value
        })
    }
    handleBtn = () => {
        // this.setState的新写法 prevState 参数相当于上一次的数据结构
        // this.setState((prevState) => ({
        //     list: [...prevState.list, prevState.inputVlaue],
        //     inputVlaue: ''
        // }))
        this.setState({
            list: [...this.state.list, this.state.inputVlaue],
            inputVlaue: ''
        })
    }
    handleItemDel = (index) => {
        const _list = [...this.state.list]
        _list.splice(index, 1)
        this.setState({
            list: _list
        })
    }
}

