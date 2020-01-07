import React,{useEffect} from 'react';
import useStore  from '../../../utils/useState'
import {useObserver} from 'mobx-react-lite'

const  Special: React.FC = () => {
  let store = useStore();
  let {Special} = store;
  useEffect(()=>{
    // Special.getSpecialData()
  },[])
  return useObserver(()=>(
    <div className="specai-wrap">
      专题
    </div>
  ));
}

export default Special;
