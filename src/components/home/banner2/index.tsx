import React from 'react'

import style from './css/index.module.css'
import { Carousel, WingBlank } from 'antd-mobile';

import { topicItemType, topicListType } from '../../../store/types/home'

const Code:React.FC<topicListType> = (props) => {
          return <div className = { style.wrap } >
                           <div className = { style.title } >
                               {props.title}
                           </div>
                           <WingBlank
                            style = { { margin:0 } }
                           >
                                 <Carousel className={ style.space_carousel }
                                   frameOverflow="visible"
                                   cellSpacing={10}
                                   slideWidth={0.8}
                                   dots={false}
                                   autoplay
                                   infinite
                                   beforeChange={(from, to) => {} }
                                   afterChange={index => {} }
                                 >
                                  {
                                    props.topicList.map((val:topicItemType, index:number) => (
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a
                                           key={index}
                                           href="#"
                                           style={{
                                             display: 'block',
                                             position: 'relative',
                                             boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                           }}
                                         >
                                         <img
                                          src={val.item_pic_url}
                                          alt=""
                                          style={{ width: '100%', verticalAlign: 'top' , overflow:'hidden'  }}
                                          />
                                          <div>111111</div>
                                        </a>
                                    ))
                                  }
                             </Carousel>
                          </WingBlank>
                 </div>
}

export default Code