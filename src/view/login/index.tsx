import React, { useState } from 'react';
import style from './css/index.module.css'


import userStore from '../../utils/useState'
import {useObserver} from 'mobx-react-lite'

import { History } from 'history'

import { Toast } from 'antd-mobile'

interface Types {
      history:History
}

const  LoginPage: React.FC<Types> = (props) => {
   let store = userStore();
   let { Home }=store
 
   const [phone, setPhone] = useState("15323807318")
   const [pass, setPass] = useState("123456")
 

   const Login = () => {
        
           if(!/^1[3456789]\d{9}$/.test(phone)){
             Toast.fail('手机号码错误', 1);
             return
            }
            if(!/\d{6}$/.test(pass)){
              Toast.fail('密码错误', 1);
            return
           }
           Home.userlogin({
              mobile:phone,
              password:pass
           }).then(res=>{
             Toast.success('登录成功', 1);
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
    </div>
  )
  )
}

export default LoginPage;
