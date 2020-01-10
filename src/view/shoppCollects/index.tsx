import React, { useEffect } from 'react'
import style from './css/index.module.css'
import userStore from '../../utils/useState'
import HeaderCode from '../../components/headerCode/index'
import { useObserver } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'


const Code: React.FC = () => {
       let store = userStore();
       let { ShoppCollects } = store;
       let history = useHistory()
       useEffect(() => {
              ShoppCollects.getShoppcollect({ typeId: 0 })
       }, [])

       return useObserver(() => (<div className={style.wrap} >
              <HeaderCode title={'easyLikeGoods'} ></HeaderCode>
              {
                     ShoppCollects.allList.map((item, index) => {
                            return <div key={index} className={style.item} onClick={()=>{history.push('/particular',item.id) }  }  >
                                   <div className={style.logo} >
                                          <img src={item.list_pic_url} className={style.img} alt="" />
                                   </div>
                                   <div className={style.title}>
                                          <div className={style.myname} >{item.name}</div>
                                          <div className={style.mess} >{item.goods_brief}</div>
                                          <div className={style.price} >￥{item.retail_price}  </div>
                                   </div>
                            </div>
                     })
              }
       </div>))
}

export default Code