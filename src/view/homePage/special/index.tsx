
import React,{useEffect} from 'react';
import useStore  from '../../../utils/useState'
import {useObserver} from 'mobx-react-lite'
import './index.css'

const page = 4;
const size = 20;
const  Special: React.FC = () => {
  let store = useStore();
  let {Special} = store;
  useEffect(()=>{
    Special.getSpecialData({page,size})
  },[Special]);

  let changeDetail= (id:number)=>{
    console.log(id,'id')
  }
  return useObserver(()=>(
    <div className="specai-wrap">
        {
          Special.list.map((item,index)=>{
            return <div className="specialele" key={index} onClick={()=>changeDetail(item.id)}>
                  <img src={item.scene_pic_url} alt=""/>
                  <div>{item.title}</div>
                  <div>{item.subtitle}</div>
                  <p>{item.price_info}元起</p>
                  <div></div>
            </div>
          })
        }
      
    </div>
  ));
}

export default Special;
