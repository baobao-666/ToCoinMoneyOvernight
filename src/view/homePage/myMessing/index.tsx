import React, { useEffect, useState } from 'react';
import style from './css/index.module.css'

import { Toast } from 'antd-mobile'

import { Types } from '../../../store/types/login'


const My: React.FC<Types> = (props) => {

    const [name, setName] = useState('普通用户')
    const [phone, setphone] = useState()
    const useList = [
        {
            icon: "icon iconfont icon-collect",
            title: "我的收藏",
            path: "/shoppCollects"
        },
        {
            icon: "icon iconfont icon-dizhi",
            title: "地址管理",
            path: "/address"
        },
        {
            icon: "icon iconfont icon-dingdan",
            title: "我的订单"
        },
        {
            icon: "icon iconfont icon-zhou",
            title: "周末拼单"
        },
        {
            icon: "icon iconfont icon-huaban",
            title: "优惠券"
        },
        {
            icon: "icon iconfont icon--",
            title: "优选购"
        },
        {
            icon: "icon iconfont icon-hongbao",
            title: "我的红包"
        },
        {
            icon: "icon iconfont icon-VIp",
            title: "会员plus"
        },
        {
            icon: "icon iconfont icon-yao",
            title: "邀请返利"
        },
        {
            icon: "icon iconfont icon-yijian",
            title: "意见反馈"
        },
        {
            icon: "icon iconfont icon-kefu",
            title: "客服咨询"
        },
        {
            icon: "icon iconfont icon-zhanghuanquan",
            title: "账户安全"
        }
    ]
    useEffect(() => {
        if (localStorage.getItem("mobile")) {
            setphone(localStorage.getItem("mobile"))
        } else {
            setName('暂无用户')
        }
    }, [])

    const alertError = () => {
        Toast.fail('亲,该功能暂未开启请稍后', 1);
    }
    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("mobile")
        props.history.push("/login")
    }

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
                {
                    useList.map((item, index) => {
                        if (item.path) {
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            return <a href={item.path} className={style.a} key={index} >
                                <i className={`${item.icon} ${style.i}  `} ></i>
                                <div className={style.title} >{item.title}</div>
                            </a>
                        } else {
                            return <div className={style.item} key={index} onClick={() => { alertError() }}  >
                                <i className={`${item.icon} ${style.i}  `} ></i>
                                <div className={style.title} >{item.title}</div>
                            </div>
                        }
                    })
                }
            </div>
            <div onClick={() => { logOut() }} className={style.loginOut}>退出登录</div>

        </div>
    );
}

export default My;
