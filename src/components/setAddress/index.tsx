import React, { useEffect, useState } from 'react'

import style from './css/index.module.css'

import HeaderCode from '../headerCode/index'
import { Button, PickerView, Picker, List } from 'antd-mobile';

import addList from './address'




const Code: React.FC = () => {
        const [name, setname] = useState('')
        const [phone, setPhone] = useState('')
        const [addRess, setaddress] = useState('')
        const [city, setCity] = useState([2, 37, 403])
        const [cityinner, setCityinner] = useState('')
        useEffect(() => {
                setCh(city)
        }, [city])
        const setCh = (e: any) => {
                setCity(e)
                let province_id = e[0];
                let city_id = e[1];
                let region_id = e[2]
                let str = ''
                const provicess = addList.filter(item => {
                        return province_id === item.value
                })
                if (provicess.length === 1) {
                        str += provicess[0].label
                        const citys = provicess[0].children.filter(item => {
                                return city_id === item.value
                        })
                        if (citys.length === 1) {
                                str += `/${citys[0].label}`
                                const countrys = citys[0].children.filter(item => {
                                        return region_id === item.value
                                })
                                if (countrys.length === 1) {
                                        str += `/${countrys[0].label}`
                                }
                        }
                }
                setCityinner(str)
        }
        return <div className={style.wrap} >
                <HeaderCode title={"新增地址"} icons={false}  ></HeaderCode>
                <div className={style.conter} >
                        <input className={style.input} onChange={(e) => { setname(e.target.value) }} value={name} placeholder="姓名" type="text" />
                        <input className={style.input} onChange={(e) => { setPhone(e.target.value) }} value={phone} placeholder="手机号" type="text" />
                        <Picker
                                data={addList}
                                onChange={(e) => { setCh(e) }}
                        >
                                <List.Item arrow="horizontal">{cityinner}</List.Item>
                        </Picker>
                        <input className={style.inputs} onChange={(e) => { setaddress(e.target.value) }} value={addRess} placeholder="详细地址" type="text" />
                </div>
                <div className={style.footer} >
                        <Button className={style.button} >取消</Button>
                        <Button className={style.button} type="primary" >确认</Button>
                </div>
        </div>
}
export default Code