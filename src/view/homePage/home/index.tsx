import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'

import userStore from '../../../utils/useState'

import Banner from '../../../components/home/banner/index'

const  Home: React.FC = () => {

  let store = userStore();
  let { Home } = store
  
  useEffect(()=>{
    Home.getHomeData()
  },[])

  
  
  return useObserver(()=>( 
    <div className="home-wrap">

       {
        // <Banner Bannerlist={ Home.list && Home.list[Home.itemKey[0]]} > </Banner>
       Home.itemKey.map((item:string,index:number)=>{
       
          return  Home.list[item].map((val:any,ind:number)=>{
              return <div key={ind} > {val.id} </div>
            })
       })
     }
    </div>
   )
  );
}

export default Home;
