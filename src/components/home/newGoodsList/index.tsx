import React from 'react'

import style from './css/index.module.css'

import {useHistory} from 'react-router-dom'
import { newGoodsItemType, newGoodsListType } from '../../../store/types/home'

const Code:React.FC <newGoodsListType> = (props) =>{
  let histort = useHistory()
    return <div className = { style.wrap } >
                <div className = { style.title } >
                   { props.title }
                </div>
                <div className = { style.list} >
                  {
                    props.newGoodsList.map((item:newGoodsItemType,index:number)=>{
                            return <div key = { index } className = { style.item } onClick = { ()=>{histort.push('/particular',item.id)} } >
                                           <div className={ style.logo } >
                                               <img className={style.img} src={ item.list_pic_url } alt=""/>
                                           </div>
                                           <div className = { style.name } >{ item.name } </div>
                                           <div className = { style.price } > ￥{ item.retail_price } </div>
                                   </div>
                    })
                  }
                </div>

               
           </div>
}
 
export default Code