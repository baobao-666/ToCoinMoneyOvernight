import React, {useEffect} from 'react'
import {useObserver} from 'mobx-react-lite'
import useStore from '../../utils/useState'
import {History} from 'history'
const typeId = 1;
interface detailType{
    location:Location,
    history:History
}
const Write :React.FC<detailType> =(props)=>{
    const {state} = props.location as {state?:any};
    console.log(state);
    // 放回上一级
    let changeProv=()=>{
        props.history.push('/detail');
    }
    let store= useStore();
    let {Special} = store;
    useEffect(()=>{
        Special.getCommentData({valueId:state,typeId});
    },[Special,state])
    return useObserver(()=>(
        <div className='write'>
            <div className='header'>
                        <div className="left" onClick={()=>changeProv()}><i className='icon iconfont icon-mjiantou-copy'></i></div>
                        <div className="title">查看更多评论</div>
                        <div className="right"></div>
                    </div>
            {
                Special.commentData.map((val,ind)=>{
                    return <div key={ind} className='comment'>
                            <div>
                                <span> {
                                Object.values(val.user_info).length > 0 ?val.user_info.username:"匿名用户"
                                }</span>
                                    <span>{val.add_time}</span>
                            </div>
                            <div>
                                {val.content}
                            </div>
                        </div>
                        })
            }
        </div>
    ))
}

export default Write