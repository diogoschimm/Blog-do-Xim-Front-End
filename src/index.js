import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes'; 
import Store from './Redux/Store';

import './index.css';  

ReactDOM.render(  
  <Provider store={Store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
 
