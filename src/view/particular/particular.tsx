import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../utils/useState'
import style from './css/del.module.scss'
import ShoppCart from '../homePage/shoppingCart/index';



interface detadetType {
    location: Location
}
const Particular: React.FC<detadetType> = (props) => {
    let store = useStore()
    let { ShoppCart } = store



    useEffect(() => {
        let id = 1166008
        ShoppCart.getDet({ id })

    }, [ShoppCart])

    return useObserver(() => (
        <div className={style.noTabPageContent}>

            {
                ShoppCart.det.map((item, index) => {
                    return <div className='noTabPageContent' key={index}>
                        <div className='header'>
                            <div className={style.left}>&lt;</div>
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
                        <div className={style.goodsAttribute}>

                        </div>
                    </div>

                })
            }


        </div>


    ))
}

export default Particular