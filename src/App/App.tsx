import React from 'react';
import style from './app.module.css';

// 引入路由
import Route from '../route/index'
import routes from '../route/router.config'


const App: React.FC = () => {
  return (
    <div className={style.App_wrap}>
       <Route routes={routes} ></Route>
    </div>
  );
}

export default App;
