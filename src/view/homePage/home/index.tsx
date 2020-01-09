import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'

import userStore from '../../../utils/useState'

import style from './css/index.module.css'

import { categoryListType } from '../../../store/types/home'

// 轮播组件
import Banner from '../../../components/home/banner/index'
// 导航组件
import NavCode from '../../../components/home/navList/index'

// 新商品组价
import NewListCode from '../../../components/home/newGoodsList/index'

// 制造商组件
import BrandListCode from '../../../components/home/brandListCode/index'

// 热门商品
import HotGoodsCode from '../../../components/home/hotGood/index'

// 带间距轮播
import BannerTwo from '../../../components/home/banner2/index'

// 家具种类 categoryList
import CategoryCode from '../../../components/home/cateCode/index'

const  Home: React.FC = () => {

  let store = userStore();
  let { Home } = store
  

  useEffect(()=>{
    Home.getHomeData()
  },[])

  
  
  return useObserver(()=>( 
    <div className={style.home_wrap}> 
       <Banner Bannerlist = { Home.BannerList }></Banner>
       <NavCode NavList = { Home.NavList }  ></NavCode>
       <BrandListCode title={ '品牌制造商提供' } brandList = { Home.brandList } ></BrandListCode>
       <NewListCode title = { '新品首发' } newGoodsList = { Home.newGoodsList }  ></NewListCode>
       <HotGoodsCode title = { '人气推荐' } hotGoodsList = { Home.hotGoodsList } ></HotGoodsCode>
       <BannerTwo title = { '专题精选' } topicList = { Home.topicList} ></BannerTwo>
       {
         Home.categoryList.map((item:categoryListType,index:number)=>{
           return  <CategoryCode key = { index }  categoryItem = { item }  ></CategoryCode>
         })
       }
    </div>
   )
  );
}

export default Home;
