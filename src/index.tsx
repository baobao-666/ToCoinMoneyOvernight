import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as Router from "react-router-dom"
import './config/rem'
import 'antd-mobile/dist/antd-mobile.css'

import StoreContext  from  './context/index'
import store from './store/index'
import './static/icon/iconfont.css'
ReactDOM.render( 
               <StoreContext.Provider value={store} >
                     <React.Suspense fallback = { <div> login.... </div> } >
                         <Router.BrowserRouter> 
                            <App /> 
                         </Router.BrowserRouter>
                     </React.Suspense>
               </StoreContext.Provider>               
                                         , document.getElementById('root'));
