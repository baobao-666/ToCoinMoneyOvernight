import React  from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

interface Type {
    Bannerlist:ItemType[]
}

interface ItemType {
    id: number,
    ad_position_id: number,
    media_type: number,
    name: string,
    link: string,
    image_url:string,
    content: string,
    end_time: number,
    enabled: number
}

const  Banner:React.FC<Type> =(props)=>{
  return <WingBlank>
           <Carousel
             autoplay={true}
             infinite
             beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
             afterChange={index => console.log('slide to', index)}
           >
          {
            props.Bannerlist.map((val:ItemType) => (
                 // eslint-disable-next-line jsx-a11y/anchor-is-valid
                 <a
                  key={val.id}
                  style={{ display: 'inline-block', width: '100%', height:176 }}
                 >
                   <img
                   src={val.image_url}
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

export default Banner