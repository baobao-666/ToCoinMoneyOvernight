import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'
import style from './scss/index.module.css'

import useStore from '../../utils/useState'
import { Location } from 'history'
import { categorysType } from '../../store/types/categorys'

interface Proptype{
    location:Location
    id:number
}

const Categorys: React.FC<Proptype> = (props) => {

    let store = useStore();
    let { Categorys } = store
    let id:Proptype = props.location.state;

    useEffect(() => {
        Categorys.getFendateNav(id)
    }, [Categorys])

    console.log("************")

    return useObserver(() => <>
        <div className={style.categorys_page}>
            <div className={style.header}>
                <div className={style.left}>&lt;</div>
                <div className={style.title}>奇趣分类</div>
                <div className={style.right}></div>
            </div>
            <div className={style.tabWrap}></div>
            <div className={style.categoryDetail}></div>
            <div className={style.goodsList}></div>
        </div>
    </>)
}

export default Categorys