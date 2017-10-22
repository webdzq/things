import React, {Component} from 'react';

import getRouter from './router/index'

import Hello from '@/components/Hello/Hello'
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        {getRouter()}
      </div>
    )
  }
}