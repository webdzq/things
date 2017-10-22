import React, {Component} from 'react'
import classNames from 'classnames'
import './hello.less'

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: '1'
    }
  }

  changeName() {
    this.setState({
      name: this.state.name === '1' ? '2' : '1'
    })
  }

  render() {
    let box = classNames({
      'box': true,
      'color': this.state.name === '2'
    })
    return (
      <div className={box}>
        <span onClick={this.changeName.bind(this)}>click men to change name</span> <br/>
        <span>{this.state.name}</span>
      </div>
    )
  }
}

