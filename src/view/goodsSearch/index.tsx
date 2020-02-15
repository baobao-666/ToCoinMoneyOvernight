import React, { useEffect } from 'react';

import { useObserver } from 'mobx-react-lite';
import style from './scss/index.module.css'
import useStore from '../../utils/useState'

const GoodsSearch: React.FC = () => {

    let store = useStore();
    let { GoodsSearch } = store

    useEffect(() => {
        GoodsSearch.getFendateQuery();

    }, [])

    let Dow = (e: any) => {
        console.log(e.keyCode)
        if (e.keyCode == 13) {
            GoodsSearch.getFendateDim(e.target.value)
        }
    }

    let Clear = () => {
        GoodsSearch.getFendateClear()

    }

    return useObserver(() => <>
        <div className={style.goodsSearch_wrap}>
            <div className={style.noTabPageContent}>
                <div className={style.searchPage}>
                    <div className={`${style.searchFix} icon iconfont icon-mjiantou-copy`} onClick={() => { window.history.back() }}></div>
                    <div className={style.Input}>
                        <div className={style.searchInputWrap}>
                            <div className={`${style.goBack} icon iconfont icon-zoom`}></div>
                            <div className={style.icon}>
                                <input type="text" placeholder={GoodsSearch.defaultKeyword} onKeyDown={(e) => { Dow(e) }} />
                                <div className={style.cancel}>取消</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.searchGoods}>
                    <div className={style.searchConditionWrap}>
                        <div className={style.left}>综合</div>
                        <div className={style.center}>
                            <span>价格</span>
                            <span></span>
                        </div>
                        <div className={style.right}>居家分类</div>
                    </div>
                    <div className={style.goodsList}>
                        <div className={style.searchItemWrap}>
                            <div className={style.title}>
                                <span>历史记录</span>
                                <i className="icon iconfont icon-huishouzhan" onClick={() => { Clear() }}></i>
                            </div>
                            <div className={style.listWrap}>
                                {
                                    GoodsSearch.historyKeywordList.length > 0 ? GoodsSearch.historyKeywordList.map((item, index) => {
                                        return <span key={index}>{item}</span>
                                    }):null
                                }
                            </div>
                        </div>
                        <div className={style.searchItemWrap}>
                            <div className={style.title}>
                                <span>热门搜索</span>
                            </div>
                            <div className={style.listWrap}>
                                {
                                    GoodsSearch.hotKeywordList.map((item, index) => {
                                        return <span key={index}>{item.keyword}</span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default GoodsSearch