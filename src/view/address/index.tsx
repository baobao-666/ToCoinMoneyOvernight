import React, { useEffect } from 'react'

import style from './css/index.module.css'

import HeaderCode from '../../components/headerCode/index'
import SetAdd from '../../components/setAddress/index'

import useStore from '../../utils/useState'

const Code:React.FC = () => {
       const state = useStore()
       const { AddRess } =state
       useEffect(() => {
              AddRess.getAddressList()
       }, [])


       return <div className = { style.wrap } >
       <HeaderCode title = { '地址管理' } ></HeaderCode>
       <div className = { style.bod } ></div>
       <div className = { style.connter} >中心 </div>
       <div className = { style.footer} > 新建地址 </div>
       <SetAdd></SetAdd>
       </div>
}

export default Code