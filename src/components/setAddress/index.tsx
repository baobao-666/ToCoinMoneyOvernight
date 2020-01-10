import React from 'react'

import style from './css/index.module.css'

import HeaderCode from '../headerCode/index'
import { Button, PickerView } from 'antd-mobile';

import addList from './address'


const Code: React.FC = () => {
        return <div className={style.wrap} >
                <HeaderCode title={"新增地址"} icons={false}  ></HeaderCode>
                <div className ={ style.conter } >
              <input className ={ style.input  }  placeholder="姓名"  type="text"/>
              <input className ={ style.input  }  placeholder="手机号"  type="text"/>
              <PickerView
              data={addList}
              value={['02', '02-1', '02-1-1']}
              />
              <input className ={ style.input  }  placeholder="详细地址"  type="text"/>

                </div>
                <div className = {style.footer} >
                <Button className = { style.button } >取消</Button>
                <Button className = { style.button }  type="primary" >确认</Button>
                </div>
        </div>
}
export default Code