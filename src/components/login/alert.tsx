import React from 'react'

import style from './css/index.module.css'
interface ItemType{
    flag:boolean,
    title?:string
}

export default (props:ItemType)=>{
    return <div className={`${style.alert_wrap} ${props.flag?style.active:''}`} >
                {props.title}
           </div>
}
