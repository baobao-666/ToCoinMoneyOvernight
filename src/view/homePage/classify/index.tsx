import React, { useState, useEffect } from 'react';
import './css/index.css'
import { useObserver } from 'mobx-react-lite'
import {History} from 'history'

import useStore from '../../../utils/useState'
    

interface Proptype{
      history:History
}

const ClassFiy: React.FC<Proptype> = (props) => {

      let store = useStore();
      let { ClassFiy } = store;

      useEffect(() => {
            ClassFiy.getFendate()
      }, [ClassFiy])

      // let Cli = (ele: number) => {
      //       console.log()
      // }

      let Jump = (item:any) => {
            console.log(item.id)
            props.history.push({pathname:'/categorys',state:item.id})
      }
      return useObserver(() => (
            <div className="classfiy-wrap">
                  <div className="searchWrap">
                        <div className="searchInput">
                              <i></i>
                              <span>搜索商品，共239款好物</span>
                        </div>
                  </div>
                  <div className="categogContet">
                        <div className="leftContent">
                              {
                                    ClassFiy.list && ClassFiy.list.map((item, index) => {
                                          return <div key={index} className={ClassFiy.curIndex==index?"active":""}  onClick={() => { ClassFiy.Cli(item, index) }}>{item.name}</div>
                                    })
                              }
                        </div>
                        <div className="rightContent">
                              <div className="categoryWrap">
                                    <div className="categoryLogo">
                                          <img src={ClassFiy.curUrl} alt=""/>
                                          <div>{ClassFiy.curTit}</div>
                                    </div>
                                    <div className="categoryTitle">
                                          <div className="line"></div>
                                          <div className="text">{ClassFiy.curName}分类</div>
                                          <div className="line"></div>
                                    </div>
                                    <div className="subCategory">
                                          {     
                                          ClassFiy.rightList.length ?
                                                ClassFiy.rightList.map((item: any, index: number) => {
                                                      return <a key={index}  onClick={()=>Jump(item)}>
                                                            <img src={item.wap_banner_url}></img>
                                                            <div className="subCategoryItemName">{item.name}</div>
                                                      </a>
                                                }) : ClassFiy.curList.map((item: any, index: number) => {
                                                      return <a key={index} className="categoryWrap" onClick={()=>Jump(item)}>
                                                            <img src={item.wap_banner_url}></img>
                                                            <div className="subCategoryItemName">{item.name}</div>
                                                      </a>
                                                })
                                          }
                                    </div> 
                              </div>        
                        </div>                        
                  </div>
            </div>
      ));
}

export default ClassFiy;
