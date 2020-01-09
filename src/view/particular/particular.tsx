import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../utils/useState'
import style from './css/del.module.scss'
import ShoppCart from '../homePage/shoppingCart/index';
import { History } from 'history'
interface detadetType {
    location: Location
    history: History
}
const Particular: React.FC<detadetType> = (props) => {
    let store = useStore()
    let { ShoppCart } = store



    useEffect(() => {
        let id = 1138001
        ShoppCart.getDet({ id })

    }, [ShoppCart])
    let goFn = () => {
        props.history.push('/homepage/shoppingCart')
    }

    return useObserver(() => (
        <div className={style.noTabPageContent}>

            {
                ShoppCart.det.map((item, index) => {
                    return <div className='noTabPageContent' key={index}>
                        <div className={style.headers}>
                            <div className={style.left} onClick={() => goFn()}>&lt;</div>
                            <div className={style.title}>{item.name}</div>
                            <div className={style.right}></div>
                        </div>
                        <div className={style.banner}>

                        </div>
                        <div className={style.nav}>
                            <p>
                                <i></i>
                                <span>30天无忧退货</span>
                            </p>
                            <p>
                                <i></i>
                                <span>48小时快速退款</span>
                            </p>
                            <p>
                                <i></i>
                                <span>满80元免运费</span>
                            </p>
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
                            <div>x0</div>
                            <div>选择规格</div>
                        </div>
                     

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
                }</div>
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
                <div className={style.goodsPageDo}>
                    <div className={style.isLike}></div>
                    <div className={style.cartNum}></div>
                    <div className={style.addCart}>加入购物车</div>
                    <div className={style.payGoods}>立即购买</div>
                </div>
            </div>


        </div>



    ))
}

export default Particular