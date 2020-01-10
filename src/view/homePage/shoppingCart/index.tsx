import React, { useEffect } from 'react';
import style from './css/indexs.module.scss'
import useStore from '../../../utils/useState'
import { useObserver } from 'mobx-react-lite'
// import isCheck from '../../../static/img/isCheck.png'
// import noCheck from '../../../static/img/noCheck.png'
import { History } from 'history'
interface topicType {
  history: History
}
const ShoppCart: React.FC<topicType> = (props) => {
  let store = useStore()
  let { ShoppCart } = store;
  // console.log(ShoppCart.total)
  useEffect(() => {
    ShoppCart.getShop();


  }, [ShoppCart]);
  let clickFn = (id: number) => {
    props.history.push('/particular', id)
  }
  return useObserver(() => (
    <div className={style.tabPageContent}>
      {
        ShoppCart.list.map((item, index) => {
          return <div className={style.count} key={index}>
            <div className={style.serviceList}>
              <ul>
                <li>
                  <span>★</span>
                  30天无忧退货
            </li>

              </ul>
              <ul>
                <li>
                  <span>★</span>
                  48小时快速退款
            </li>

              </ul>
              <ul>
                <li>
                  <span>★</span>
                  满88元免邮费
            </li>

              </ul>
            </div>
            <div className={style.cartGoodsListWrap} >
              <div className={style.cartGoodsItem}>
                <div className={style.isCheckItem}>
                  <img src='' alt="" />
                </div>
                <div className={style.goodsImg}>
                  <img src={item.list_pic_url} alt="" onClick={() => clickFn(item.id)} />
                </div>
                <div className={style.cartGoodsMsg} key={index}>
                  <div>{item.goods_name}</div>
                  <div></div>
                  <div>￥{item.retail_price}</div>

                </div>
                <div className={style.cartGoodsNum}>
                  x{item.number}
                </div>
              </div>
            </div>
          </div>

        })
      }
      {
        ShoppCart.total.map((item, i) => {
          return <div className={style.cartGoodsDo} key={i}>
            <div className={style.isCheckItem}>

            </div>
            <div className={style.cartMsgAll}>
              已选({item.goodsCount})
    ￥{item.goodsAmount}
            </div>
            <div className={style.cartAllDoButton}>编辑</div>
            <div className={style.cartAllDoButtonpay}>下单</div>
          </div>
        })
      }
      





    </div>
  )

  )

}


export default ShoppCart;
