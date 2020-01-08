import React, {useState, useEffect } from 'react';
import './css/index.css'
import {useObserver } from 'mobx-react-lite'

import useStore from '../../../utils/useState'

const ClassFiy: React.FC = () => {

      let store = useStore();
      let { ClassFiy } = store;

      useEffect(() => {
            ClassFiy.getFendate()
      },[ClassFiy])
      
      let Cli = (ele:number) => {
            ClassFiy.current=ele;
      }
      return useObserver(()=> (
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
                                 ClassFiy.list &&  ClassFiy.list.map((item,index)=>{
                                 return <div key={index} className="tabItem" onClick={()=>{Cli(index)}}>{item.name}</div>
                                 })   
                              }
                        </div>
                        <div className="rightContent">
                              {
                                    // ClassFiy.list[ClassFiy.current]&& ClassFiy.list[current].subCategoryList.map((item:any,index:number)=>{
                                    // return <div key={index}>{item}</div>
                                    // })
                              }
                        </div>
                  </div>
            </div>
      ));
}

export default ClassFiy;
