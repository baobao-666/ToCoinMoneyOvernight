import React from 'react'

import style from './css/index.module.css'
import { Carousel, WingBlank } from 'antd-mobile';

import { useHistory } from 'react-router-dom'

import { topicItemType, topicListType } from '../../../store/types/home'

const Code:React.FC<topicListType> = (props) => {
  let history = useHistory()
          return <div className = { style.wrap } >
                           <div className = { style.title } >
                               {props.title}
                           </div>
                           <WingBlank
                            style = { { margin:0 } }
                            className = {style.banner}
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
                                           className={style.a}
                                           key={index}
                                           style={{
                                             display: 'block',
                                             position: 'relative'
                                           }}
                                           onClick = { ()=>{ history.push('/detail',val.id) }  }
                                         >
                                         <img
                                          src={val.item_pic_url}
                                          alt=""
                                          className = { style.img }
                                          style={{ width: '100%', verticalAlign: 'top'  }}
                                          />
                                          <div className = { style.mess } >
                                            {val.title} <span className = { style.span } >￥ {val.price_info}元起</span>
                                          </div>
                                          <div className = { style.time } >
                                             { val.subtitle }
                                          </div>
                                        </a>
                                    ))
                                  }
                             </Carousel>
                          </WingBlank>
                 </div>
}

export default Code