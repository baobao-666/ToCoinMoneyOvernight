import React, { useEffect, useState } from 'react';
import { useObserver } from 'mobx-react-lite'
import style from './scss/index.module.css'

import useStore from '../../utils/useState'
import { History, Location } from 'history'
import { categorysType } from '../../store/types/categorys'

interface Proptype {
    histtory: History
    location: Location
    id: number
}

const Categorys: React.FC<Proptype> = (props) => {

    let store = useStore();
    let { Categorys } = store
    let id: Proptype = props.location.state;

    useEffect(() => {
        Categorys.getFendateNav(id)
    }, [Categorys])

    useEffect(() => {
        Categorys.getFendateBox(props.location.state)
    }, [Categorys])

    const [curIndex, setCurincex] = useState(0)

    let checkID = (id: number, index: number) => {
        Categorys.getFendateNav(id)
        Categorys.getFendateBox(id)
        setCurincex(index)
    }

    return useObserver(() => <>
        <div className={style.categorys_page}>
            <div className={style.header}>
                <div className={`${style.left} icon iconfont icon-mjiantou-copy`} onClick={() => { window.history.back() }}></div>
                <div className={style.title}>奇趣分类</div>
                <div className={style.right}></div>
            </div>
            <div className={style.tabWrap}>
                {
                    Categorys.list.map((item, index) => {
                        return <div key={index} className={curIndex === index ? style.active : ""} onClick={() => { checkID(item.id, index) }}>{item.name}</div>
                    })
                }
            </div>
            <div className={style.categoryDetail}>
                <div className={style.name}>{Categorys.curName}</div>
                <div className={style.tit}>{Categorys.curTit}</div>
            </div>
            <div className={style.goodsList}>
                {
                    Categorys.goodsList.map((item: any, index: number) => {
                        return <a key={index} className={style.goodsItem} >
                            <img src={item.list_pic_url} className={style.goodsItemImg}></img>
                            <div className={style.goodsItemName}>{item.name}</div>
                            <div className={style.goodsItemPrice}>￥{item.retail_price}元</div>
                        </a>
                    })
                }
            </div>
        </div>
    </>)
}

export default Categorys