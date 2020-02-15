import React, { useState, useEffect } from 'react';
import './App.css';
import { TotalType, AreaType } from '../utils/types'
import { getDisease } from '../services/index'
// 引入模块
import Hospital from '../components/Hospital';
import Tip from '../components/Tip';
import Truth from '../components/Truth';
import Trace from '../components/Trace';
import Area from '../components/Area';
import Header from '../components/Header'
import Chart from '../components/Chart'
import Map from '../components/Map'
import News from '../components/News';




const App = () => {
  // 疫情概况
  let [total, setTotal] = useState<TotalType>();
  //疫情区域分布
  let [areaTree, setAreaTree] = useState<AreaType[]>([]);
  // 每日数据
  let [dayList, setDayList] = useState([]);
  // 每日新增数据
  let [dayAddList, setDayAddList] = useState([]);
  // 全国疫情分布
  let [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getDisease().then((res: any) => {
      res = JSON.parse(res.data);
       //console.log('res...', res);
      let { chinaTotal, chinaAdd, lastUpdateTime, areaTree, chinaDayList, chinaDayAddList } = res;
      // 赋值数据
      setTotal({ chinaTotal, chinaAdd, lastUpdateTime });
      setAreaTree(areaTree);
      setDayList(chinaDayList)
      setDayAddList(chinaDayAddList);
      let countryData = areaTree[0].children.map((item: any)=>{
        return {
          name: item.name,
          value: item.total.confirm
        }
      })
      setCountryData(countryData);
    })
  }, []);
  return (
    <div className="App">
      <Header total={total as TotalType} />
      <Map countryData={countryData}/>
      <Chart chinaDayAddList={dayAddList} chinaDayList={dayList}/>
      <News areaTree={areaTree.length?areaTree[0].children as AreaType[]:[]}/>
     <Area areaTree={areaTree} />
     <Trace />
      <Truth />
      <Hospital />
      <Tip />
    </div>
  );
}

export default App;
