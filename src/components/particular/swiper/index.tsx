 import React  from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

import { ItemTypes, Type } from '../../../store/types/shoppingcart'

const  LunboList:React.FC<Type> =(props)=>{
  return <WingBlank 
         style={{margin:0}}
         >
           <Carousel
             autoplay={true}
             infinite
             beforeChange={(from, to) =>{}}
             afterChange={index =>{}}
           >
          {
            props.Lunbolist.map((val:ItemTypes) => (
                 // eslint-disable-next-line jsx-a11y/anchor-is-valid
                 <a
                  key={val.id}
                  href="#"
                  style={{ display: 'inline-block', width: '100%' }}
                 >
                   <img
                   src={val.img_url}
                   alt=""
                   style={{ width: '100%', verticalAlign: 'top' }}
                   />
                 </a>
               )
             )
          }
  </Carousel>
</WingBlank>
}

export default LunboList