import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'

import userStore from '../../../utils/useState'

import {Button} from 'antd-mobile'


const  Home: React.FC = () => {

  let store = userStore();
  let { Home }=store
  useEffect(()=>{
    Home.getHomeData()
  },[])

  return useObserver(()=> 
    <div className="home-wrap">
      {
       Home.itemKey.map((item:string,index:number)=>{
          return  Home.list[item].map((val:any,ind:number)=>{
              return <div key={ind} > {val.id} </div>
            })
       })
     }
     <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
    </div>
  );
}

export default Home;
