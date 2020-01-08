import React,{useEffect} from 'react'
import {useObserver} from 'mobx-react-lite'
import useStore from '../../utils/useState'
// import {Location} from 'location'
interface detailType{
    location:Location,
    state:Number
}
const Detail:React.FC<detailType> =(props)=>{
    // const id = props.location.state;
    const store = useStore();
    const {Special} = store;
    useEffect(()=>{
        // console.log(id,'id');
        
        // Special.getSpecialDetailDate({id})
    })
    
    return useObserver(()=>(
        <div>
            详情
        </div>
    ))
}

export default Detail