import React from 'react';
import IRouterView from '../../route/router.view';

import './css/index.css'

import FooterTab from '../../components/footertab/index';

import '../../static/icon/iconfont.css'

interface ItemType{
    routes: any,
    history:any
}

const FooterList:object[]=[
    {
        path:'/homepage/home',
        text:'首页',
        icon:'icon iconfont icon-shouye'
    },
    {
        path:'/homepage/classify',
        text:'分类',
        icon:'icon iconfont icon-bangzhuzhongxin'
    },
    {
        path:'/homepage/myMessing',
        text:'我的',
        icon:'icon iconfont icon-wode'
    },
    {
        path:'/homepage/shoppingCart',
        text:'购物车',
        icon:'icon iconfont icon-duozhongzhifu'
    },
    {
        path:'/homepage/special',
        text:'专题',
        icon:'icon iconfont icon-pinpai'
    }
]

export default (props:ItemType) => {
  return (
    <div className="home-wrap">
      <main>
           <IRouterView routes={props.routes} ></IRouterView>
      </main>
      <FooterTab FooterList={FooterList} ></FooterTab>
    </div>
  );
}


