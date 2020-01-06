import React from 'react';
import './login.css'

const  LoginPage: React.FC = () => {
  return (
    <div className="login-wrap">
        <div className="Logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div className="LogoMain">
            <div className="inputWrap">
                  <input type="text" placeholder="请输入手机号" value="15323807318"/>
            </div>
            <div className="inputWrap">
                  <input type="password" placeholder="请输入登录密码" value="123456"/>
            </div>
            <div className="loginBtn">
                  <span>登录</span>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
