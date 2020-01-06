import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as Router from "react-router-dom"

import StoreContext  from  './context/index'
import store from './store/index'

ReactDOM.render( 
               <StoreContext.Provider value={store} >
                    <Router.BrowserRouter> 
                          <App /> 
                    </Router.BrowserRouter>
               </StoreContext.Provider>
                
                                         , document.getElementById('root'));
