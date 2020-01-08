import React, { useState } from 'react'

import * as Router from 'react-router-dom'

import style from './css/index.module.css'
interface ItemType{
    FooterList:object[]
}

export default  (props:ItemType)=>{
  const [curIndex,setCurIndex] = useState(0)
         return <div className={style.footer_wrap}>
                   {
                      props.FooterList.map((item:any,index:number)=>{
                         return <Router.Link  onClick={()=>{setCurIndex(index)}} className={`${style.a} ${curIndex===index?style.active:''}`} key={index} to={item.path} > <i className ={item.icon} ></i> <p>{item.text}</p></Router.Link>
                      })
                   }
                 </div>
}



