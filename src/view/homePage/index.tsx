import React from 'react';
import IRouterView from '../../route/router.view';

import style from './css/index.module.css'

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
        path:'/homepage/special',
        text:'专题',
        icon:'icon iconfont icon-pinpai'
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
    }
]

export default (props:ItemType) => {
  return (
    <div className={style.home_wrap}>
      <div className={style.main} >
           <IRouterView routes={props.routes} ></IRouterView>
      </div>
      <FooterTab FooterList={FooterList} ></FooterTab>
    </div>
  );
}


