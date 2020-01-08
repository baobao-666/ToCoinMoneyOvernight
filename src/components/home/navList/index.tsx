import React from 'react'
import style from './css/index.module.css'

import { NavTypes, NavItem } from '../../../store/types/home'

const Nav:React.FC<NavTypes> = (props) =>{
   return <div className={style.nav_wrap}>
   {
       props.NavList.map((item:NavItem,index:number)=>{
           return <div key={index} className={style.item} >
                    <div className={style.logo}>
                      <img src={item.icon_url} alt=""/>
                    </div>
                    <div className={style.text}>
                      {item.name}
                    </div>
                  </div>
       })
   }
   </div>
}

export default Nav
