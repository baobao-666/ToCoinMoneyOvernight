import React, { useState, useEffect } from 'react'
import { AreaType } from '../utils/types';
import style from './Area.module.scss'
const Area = (props: { areaTree: AreaType[] }) => {
    let data = props.areaTree.length ? props.areaTree[0].children as AreaType[] : []
    console.log("=========>", props.areaTree)
    return <>
        <div className={style.clearfix}>

            <div className={style.up_tips}>
                <span className={style.gnbl}></span>
                中国疫情（包括港澳台）
            <span className={style.tips}>7:00-10:00为更新高峰，数据如有滞后请谅解。</span>
            </div>

            <div className={style.abroad}>
                <div className={style.placeItem}>
                    <h2 className={style.blue}>地区</h2>
                    <div className={style.blue}>新增确诊</div>
                    <div>累计确诊</div>
                    <div>治愈</div>
                    <div>死亡</div>
                    <div>病死率</div>
                </div>
                <div>
                    {
                        data.map((item, index) => {
                            let num: any = (item.total.dead / item.total.confirm).toFixed(2)
                            let sum = num * 100
                            return (
                                <div className={style.placeItem} key={index}>
                                    <h2 className={style.blue}>{item.name}</h2>
                                    <div className={style.blue}>{item.today.confirm}</div>
                                    <div>{item.total.confirm}</div>
                                    <div>{item.total.heal}</div>
                                    <div>{item.total.dead}</div>
                                    <div>{sum}%</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className={style.uPtips}>
                <span className={style.gnbls}></span>
                海外国家
            <span className={style.tip}>
                    确诊 395 例，死亡 1 例
            </span>
            </div>
            <div className={style.placeItem} id="placeNav">
                <h2 className={style.blue}>地区</h2>
                <div>确诊</div>
                <div>治愈</div>
                <div>死亡</div>
            </div>
            <div>

            </div>
            {
                props.areaTree && props.areaTree.map((item, index) => {
                    return <div className={style.placeItem} key={index}>
                        <h2 className={style.blue}>{item.name}</h2>
                        <div className="confirm">{item.total.confirm}</div>
                        <div className="heal">{item.total.heal}</div>
                        <div className="dead">{item.total.dead}</div>
                    </div>
                })
            }

        </div>


    </>
}


export default Area
