import React, { useEffect } from 'react';
import { useObserver } from "mobx-react-lite"
import { History } from 'history'
//mobx数据
import useStore from "../../../utils/useState"
import style from "./css/indexs.module.scss"
interface topicType {
  history: History
}
const Cart: React.FC<topicType> = (props) => {
  let store = useStore();
  let { ShoppCart } = store;
  useEffect(() => {
    //初次数据复制
    ShoppCart.setaAddress();
  }, [])
  let clickFn = (id: number) => {
    props.history.push('/particular', id)
  }

  
  return useObserver(() => <>

    <div className={style.cart}>
      <div className={style.cartHead}>
        <p><span>★</span> 30天无忧退货</p>
        <p><span>★</span>48小时快速退款</p>
        <p><span>★</span>满88元免邮费</p>
      </div>
      <div className={style.cartMain}>
        {
          ShoppCart.cartList.map((item, index) => {
            return <div key={index} className={style.ListItem}>
              <div className={style.isCheckItem} onClick={() => {
                if (ShoppCart.num === 1) {
                  ShoppCart.oneSelect(item.checked, item.product_id)
                } else {
                  ShoppCart.setIndex(index)
                }

              }}>
                {ShoppCart.num === 1 ? <img src={item.checked === 1 ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"} alt="" />
                  : <img src={ShoppCart.index.some((item) => item === index) ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"} alt="" />
                }
              </div>
              <div className={style.Item} onClick={() => clickFn(item.id)}>
                <img src={item.list_pic_url} alt="" / >
              </div>
              {ShoppCart.num === 1 ?
                <div className={style.commodity}>
                  <div className={style.ItemMsg}>
                    <div>{item.goods_name}</div>
                    <div></div>
                    <div>￥{item.retail_price}</div>
                  </div>
                  <div className={style.ItemNum}>x{item.number}</div>
                </div>
                : <div className={style.selected}>
                  <div className={style.selects}>已选择:</div>
                  <div className={style.countOp}>
                    <div className={style.color}>￥199</div>
                    <div className={style.num}>
                      <div onClick={()=>{
                        ShoppCart.setCount(item,"-")
                      }}>-</div>
                      <div>{item.number}</div>
                      <div onClick={() => {
                        ShoppCart.setCount(item, "+")
                      }}>+</div>
                    </div>
                  </div>
                </div>}
            </div>
          })
        }
      </div>
      {/* 这是底部 */}
      <div className={style.cartFooter}>
        {ShoppCart.num === 1 ? <div className={style.trade}>
          <div className={style.img} onClick={() => {
            ShoppCart.isSelect()
          }}>
            <img src={ShoppCart.cartTotal.checkedGoodsCount === ShoppCart.cartTotal.goodsCount ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"} alt="" />
          </div>
          <div className={style.select}>
            <p>
              <span>已选({ShoppCart.cartTotal.checkedGoodsCount})</span>
              <span>￥{ShoppCart.cartTotal.checkedGoodsAmount}</span>
            </p>
          </div>
          <div className={style.editor} onClick={() => {
            ShoppCart.numIS(0)
          }}>编辑</div>
          <div className={style.place}>下单</div>
        </div>
          //    这是删除页面
          : <div className={style.delete}>
            <div className={style.img} onClick={() => {
              ShoppCart.wholeDelete()
            }}>
              <img src={ShoppCart.whole ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"} alt="" />
            </div>
            <div className={style.select}>
              <p>
                <span>已选({ShoppCart.index.length})</span>
              </p>
            </div>
            <div className={style.editor} onClick={() => {
              ShoppCart.numIS(1)
            }}>完成</div>
            <div className={style.place} onClick={()=>{
            alert(111111)
            }}>删除所选</div>
          </div>
        }
      </div>
    </div>
  </>)
}

export default Cart;