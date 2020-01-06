
import React,{useEffect} from 'react';
import useStore  from '../../../utils/useState'
import {useObserver} from 'mobx-react-lite'
import './index.css'

const page = 4;
const size = 5;
const  Special: React.FC = () => {
  let store = useStore();
  let {Special} = store;
  useEffect(()=>{
    Special.getSpecialData({page,size})
  },[Special])
  return useObserver(()=>(
    <div className="specai-wrap">
        {
          Special.list.map((item,index)=>{
            return <div className="specialele" key={index}>
                  <img src={item.scene_pic_url} alt=""/>
                  <div>{item.title}</div>
                  <div>{item.subtitle}</div>
                  <p>{item.price_info}元起</p>
            </div>
          })
        }
      
    </div>
  ));
}

export default Special;
