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
                                 return <span key={index}>{item.name}</span>
                                 })   
                              }
                        </div>
                        <div className="rightContent"></div>
                  </div>
            </div>
      ));
}

export default ClassFiy;
