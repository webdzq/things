import React, {Component} from 'react'
import {history  } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }

  

  goRoute() {
     
    this.props.history.push({pathname:'/roat/2',search: '?sort=name',state: { price: 18 }});
    // console.log(this);
  }

  render() {
    return (
      <div className="home_index">
     
        <span onClick={this.goRoute.bind(this)}>home_index</span>
          
      </div>
    )
  }

}