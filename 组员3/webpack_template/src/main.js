import React from 'react';
import {render} from 'react-dom'
import App from './App'
import Hello from '@/components/Hello/Hello'
import {BrowserRouter} from 'react-router-dom';


render(
  <BrowserRouter>
    <App />
    {/* <Hello/> */}
  </BrowserRouter>, 
  document.getElementById('app')
)