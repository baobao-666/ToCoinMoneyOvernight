import React, { useState } from 'react';
import './login.css'

import Alert from '../../components/login/alert'

const  LoginPage: React.FC = () => {
    
   const [phone, setPhone] = useState("15323807318")
   const [pass, setPass] = useState("123456")

   const Login = () => {
         console.log('====================================');
         console.log(phone,pass);
         console.log('====================================');
        if(!/^1[3456789]\d{9}$/.test(phone)){
         let myalert = document.createElement('Alert')
        } 
   }
  return (
    <div className="login-wrap">
        <div className="Logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div className="LogoMain">
            <div className="inputWrap">
                  <input type="text" placeholder="请输入手机号" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
            <div className="inputWrap">
                  <input type="password" placeholder="请输入登录密码" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
            </div>
            <div className="loginBtn" onClick={Login} >
                  <span>登录</span>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
