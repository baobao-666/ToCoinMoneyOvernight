import React from 'react'

import style from './css/index.module.css'

import { useHistory } from 'react-router-dom'

import { hotGoodsListType, hotGoodsItemType } from '../../../store/types/home'

const Code:React.FC <hotGoodsListType> = (props) =>{
        let history = useHistory()
       return <div className = { style.wrap } >
                   <div className = { style.title } >
                         {props.title}
                   </div>
                     {
                         props.hotGoodsList.map((item:hotGoodsItemType,index:number)=>{
                           return <div className = { style.list } key = { index } onClick = { ()=> {history.push('/particular', item.id )} } >
                                    <div className = { style.logo } >
                                       <img className = { style.img } src = { item.list_pic_url } alt=""/>
                                    </div>
                                    <div className = { style.mess } >
                                          <div className = { style.titles } >
                                               {item.name}
                                          </div>
                                          <div className = { style.ls } >
                                               { item.goods_brief }
                                          </div>
                                          <div className = { style.price } >
                                               ￥{ item.retail_price }
                                          </div>
                                    </div>
                                  </div>
                         })
                     }
              </div>
}

export default Code