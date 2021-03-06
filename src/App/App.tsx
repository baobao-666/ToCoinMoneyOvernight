import React from 'react';
import './App.css';

// 引入路由
import Route from '../route/index'
import routes from '../route/router.config'


const App: React.FC = () => {
  return (
    <div className="App-wrap">
       <Route routes={routes} ></Route>
    </div>
  );
}

export default App;
