import React from 'react'

import style from './css/index.module.css'

import { useHistory  } from 'react-router-dom'

interface headerType {
    title?:string
    icons?:boolean

}

const Code: React.FC<headerType> = (props) => {
    let history = useHistory()
       return <div className={style.wrap} >
                <div className = {`${style.icon} icon iconfont icon-mjiantou-copy ${props.icons?'':style.blo} ` } onClick = { () => { history.goBack() } } ></div>
                {props.title}
       </div>
}

export default Code