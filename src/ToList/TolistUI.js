import React, {Component} from 'react';
import {Input, Button, List} from 'antd';

import 'antd/dist/antd.less';
import './tolist.less';
export default class TolistUI  extends Component {
  constructor(props) {
    super(props)
  }
render() {
  const {list, inputVal, } = this.props
  return(
    <div className = "ToList">
      <div className = "listInput" >
        <Input className = "iptItem" value = {inputVal} onChange = { (e) => {this.props.handleChange(e)} } placeholder = 'todo info' ></Input>
        <Button type = "primary" onClick = { () => {this.props.handleBtnClick()}} > 提交 </Button>
      </div>
      <div className = {list ? 'listBox bluebord' : 'listBox'} >
        <List
        size = "small"
        bordered
        dataSource = { list }
        renderItem = {(item, index) => ( < List.Item onClick = { () => {this.props.handleDelItem(index)}} > { item } </List.Item>)} />
      </div>
    </div>
  )
}
}