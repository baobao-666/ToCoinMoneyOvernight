import React from 'react'

import * as Router from 'react-router-dom'

import './index.css'
interface ItemType{
    FooterList:object[]
}

export default (props:ItemType)=>{
         return <div className="footer_wrap">
                   {
                       props.FooterList.map((item:any,index:number)=>{
                         return  <Router.NavLink  key={index} to={item.path} > <i className={item.icon} ></i> <p>{item.text}</p></Router.NavLink>
                      })
                   }
                 </div>
}



