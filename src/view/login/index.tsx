import React, { useState } from 'react';
import style from './css/index.module.css'

import Alert from '../../components/login/alert'

import userStore from '../../utils/useState'
import {useObserver} from 'mobx-react-lite'

import { History } from 'history'

interface Types {
      history:History
}

const  LoginPage: React.FC<Types> = (props) => {
   let store = userStore();
   let { Home }=store
 
   const [phone, setPhone] = useState("15323807318")
   const [pass, setPass] = useState("123456")
   const [flag,setFlag]=useState(true)
   const [title,setTitle]=useState("")
 

   const Login = () => {
        
           if(!/^1[3456789]\d{9}$/.test(phone)){
             setFlag(false)
             setTitle("手机号输入错误")
             return
           }
           if(!/\d{6}$/.test(pass)){
            setFlag(false)
            setTitle("密码输入错误")
            return
           }
           Home.userlogin({
              mobile:phone,
              password:pass
           }).then(res=>{
             props.history.push('/homepage/home')
           })
   }
  return useObserver(()=> (
    <div className={style.login_wrap}>
        <div className={style.Logo}>
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div className={style.LogoMain}>
            <div className={style.inputWrap}>
                  <input type="text" placeholder="请输入手机号" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
            <div className={style.inputWrap}>
                  <input type="password" placeholder="请输入登录密码" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
            </div>
            <div className={style.loginBtn} onClick={Login} >
                  <span>登录</span>
            </div>
        </div>
        <Alert flag={flag} title={title} ></Alert>
    </div>
  )
  )
}

export default LoginPage;
