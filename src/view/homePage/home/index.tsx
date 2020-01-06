import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'

import userStore from '../../../utils/useState'


const  Home: React.FC = () => {

  let store = userStore();
  let {Home}=store
  useEffect(()=>{
    Home.getHomeData()
  },[])

  return useObserver(()=> 
    <div className="home-wrap">
      首页
    </div>
  );
}

export default Home;
