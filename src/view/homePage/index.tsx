import React from 'react';
import IRouterView from '../../route/router.view';

import * as Router from 'react-router-dom'

import './css/index.css'

interface ItemType{
    routes: any,
    history:any
}

const FooterList:object[]=[
    {
        path:'/homepage/home',
        text:'首页'
    },
    {
        path:'/homepage/classify',
        text:'分类'
    },
    {
        path:'/homepage/myMessing',
        text:'我的'
    },
    {
        path:'/homepage/shoppingCart',
        text:'购物车'
    },
    {
        path:'/homepage/special',
        text:'专题'
    }
]

export default (props:ItemType) => {
  return (
    <div className="home-wrap">
      <main>
           <IRouterView routes={props.routes} ></IRouterView>
      </main>
      <footer>
      {
       FooterList.map((item:any,index:number)=>{
          return  <Router.NavLink key={index} to={item.path} >{item.text}</Router.NavLink>
        })
      }
     
      </footer>
    </div>
  );
}


