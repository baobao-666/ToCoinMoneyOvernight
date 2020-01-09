import React, {useEffect, useState} from 'react';
import  style from './css/index.module.css'


const  My: React.FC = () => {
  
  const  [name,setName] = useState('普通用户')  
  const  [phone,setphone] = useState()  

  useEffect(()=>{
     if(localStorage.getItem("mobile")){
         setphone(localStorage.getItem("mobile"))
     }else{
         setName('暂无用户')
     }

  },[])  


  return (
    <div className={style.my_wrap} >
            <div className={style.userMsgWrap}>
                <div className={style.userLogo}></div>
                <div className={style.userMsgs}>
                      <div>{phone}</div>
                      <div>{name}</div>
                </div>
            </div>
            <div className={style.userPower}>
                <div className={style.item}>
                    <i className ="iconfont icon-order" ></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
                <div className={style.item}>
                    <i></i>
                    <div>我的收藏</div>
                </div>
            </div>
            <div className={style.loginOut}>退出登录</div>
            
    </div>
  );
}

export default My;
