import React from 'react'

import style from './css/index.module.css'

import { brandListType, brandItemType } from '../../../store/types/home';

const Code:React.FC<brandListType> = (props) =>{
     return <div className = { style.wrap } >
                <div className = { style.title } >
                      { props.title }
                </div>
                <div className = { style.list } >
                    {
                      props.brandList.map((item: brandItemType, index:number )=>{
                             return <div key = { index } className = { style.item } >
                                          <img className = { style.img } src={ item.new_pic_url } alt=""/>
                                          <div className = { style.name } > { item.name } </div>   
                                          <div className = { style.price } > { item.floor_price }元起 </div>   
                                    </div>
                      })
                    }
                </div>
            </div>
}

export default Code
