import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../utils/useState'
import style from './css/del.module.scss'
import { History } from 'history'
import Lunbolist from '../../components/particular/swiper/index';

interface detadetType {
    location: Location
    history: History
}
const Particular: React.FC<detadetType> = (props) => {
     let {state}=props.location as {state?:any}
    let store = useStore()
    let { ShoppCart } = store
    //  console.log(state)
    //    console.log(ShoppCart.getList)

    useEffect(() => {
      ShoppCart.getDet({ id:state })
      ShoppCart.getData({ id:state })

    }, [ShoppCart])
    let goFn = () => {
        props.history.goBack()
    }

    return useObserver(() => (
        <div className={style.noTabPageContent}>
            {
                ShoppCart.det.map((item, index) => {
                    return <div className='noTabPageContent' key={index}>
                        <div className={style.headers}>
                            <div className={style.left} onClick={() => goFn()}><i className='icon iconfont icon-mjiantou-copy'></i></div>
                            <div className={style.title}>{item.name}</div>
                            <div className={style.right}></div>
                        </div>
                        <Lunbolist Lunbolist={ShoppCart.Lunbolist}></Lunbolist>

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
                        <div className={style.name}>
                            <div className={style.goodsNameTitle}>
                                {item.name}
                            </div>
                            <div className={style.goodsNameSubTitle}>
                                {item.goods_brief}
                            </div>
                            <div className={style.goodsPriceTitle}>
                                ￥{item.retail_price}
                            </div>
                        </div>
                        <div className={style.goodsSize}>
                            <div></div>
                            <div>X{item.counter_price}</div>
                            <div>选择规格</div>
                        </div>


                    </div>

                })
            }
            
            {
                ShoppCart.pic.map((item, index) => {
                    return <div key={index}>

                    </div>
                })
            }



            <div className={style.goodsAttribute} >
                <div className={style.goodsAttributeLine}>—— 商品参数 ——</div>
                {
                    ShoppCart.attribute.map((it, indexs) => {
                        return <div className={style.goodsAttributeList} key={indexs}>
                            <div className={style.goodsAttributeItem}>
                                <div className={style.attributeLabel}>{it.name}</div>
                                <div className={style.attributeContent}>{it.value}</div>
                            </div>

                        </div>
                    })
                }
                {
                    ShoppCart.det.map((item, index) => {
                        return <div dangerouslySetInnerHTML={{ __html: item.goods_desc }} key={index} className={style.topicDetailImg} />
                    })
                }


            </div>
            <div className={style.goodsAttributes}>

                <div className={style.goodsAttributeLine}> —— 常见问题 ——</div>


                {
                    ShoppCart.data.map((ite, i) => {
                        return <div className={style.problemWrap} key={i}>
                            <div className={style.problemLabel}>
                                <span>√</span>
                                {ite.question}
                            </div>
                            <div className={style.problemContent}>
                                {ite.answer}
                            </div>

                        </div>
                    })
                }
                <div className={style.goodsAttribute}>
                    <div className={style.goodsAttributeLine}> ——大家都在看——</div>
                 </div>
                    <div className={style.goodsList}>
                    {
                        ShoppCart.getList.map((items, value) => {
                            console.log(items)
                            return   <div className={style.goodsList} key={value}>
                                    <div className={style.goodsItem}>
                                        <div className={style.goodsItemImg}>
                                            <img src={items.list_pic_url} alt="" />
                                        </div>
                                        <div className={style.goodsItemName}>
                                            {items.name}
                                        </div>
                                        <div className={style.goodsItemPrice}>
                                            {items.retail_price}
                                        </div>
                                    </div>

                                </div>

                           
                        })
                    }
               
 </div>

                <div className={style.goodsPageDo}>
                    <div className={style.isLike}><i className='icon iconfont icon-collect'></i></div>
                    <div className={style.cartNum}><i className='icon iconfont icon-qicheqianlian-
'></i></div>
                    <div className={style.addCart}>加入购物车</div>
                    <div className={style.payGoods}>立即购买</div>
                </div>
            </div>


        </div>



    ))
}

export default Particular