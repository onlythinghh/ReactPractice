import React, {Component} from 'react';
import {Input, Button, List} from 'antd';

import 'antd/dist/antd.less';
import './tolist.less';
export default class TolistUI  extends Component {
  constructor(props) {
    super(props)
  }
render() {
  return(
    <div className = "ToList">
      <div className = "listInput" >
        <Input className = "iptItem" value = {this.props.inputVal} onChange = { (e) => {this.props.handleChange(e)} } placeholder = 'todo info' ></Input>
        <Button type = "primary" onClick = { () => {this.props.handleBtnClick()}} > 提交 </Button>
      </div>
      <div className = "listBox" >
        { /* {this.renderList()} */ }
        <List
        size = "small"
        bordered
        dataSource = { this.props.list }
        renderItem = {(item, index) => ( < List.Item onClick = { (index) => {this.props.handleDelItem(index)}} > { item } </List.Item>)} />
      </div>
    </div>
  )
}
}