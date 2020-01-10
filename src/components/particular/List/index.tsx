import React  from 'react'/* eslint-disable @typescript-eslint/no-unused-expressions */
import style from './css/index.module.css'
import { categoryItemType } from '../../../store/types/home'

const List:React.FC<categoryItemType> = (props) =>{
       return <div className = { style.wrap } >
                <div className = {style.title} >{props.name}</div>
                <div className = { style.conte } >
                   {
                     props.goodsList.map((val,index)=>{
                        return <div className = { style.item } key = { index } >
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
                  
                </div>

              </div>
}

export default List