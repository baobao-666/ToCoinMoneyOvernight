/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'

import style from './css/index.module.css'
import {  categoryItemType } from '../../../store/types/home'

import { useHistory } from 'react-router-dom'

const Code:React.FC<categoryItemType> = (props) =>{
   let history = useHistory()
       return <div className = { style.wrap } >
                <div className = {style.title} >{props.name}</div>
                <div className = { style.conte } >
                   {
                     props.goodsList.map((val,index)=>{
                        return <div className = { style.item } key = { index } onClick = { ()=> {history.push('/particular', val.id )} } >
                                <div className = { style.logo } >
                                     <img className = { style.img } src={val.list_pic_url} alt=""/>
                                </div>
                                <div className = { style.mess } >
                                     <div className = { style.name } > { val.name } </div>
                                     <div className = { style.price } > ￥{ val.retail_price } </div>
                                </div>
                            </div>
                     })  
                   }
                   <div className = { style.item } onClick = { ()=> {history.push('/categorys', props.id )} } >
                      <div className = { style.some } >更多{ props.name }好物</div>
                      <span className={`icon iconfont ${style.icon}` }>&#xe60c;</span>
                   </div>
                </div>

              </div>
}

export default Code