import React,{useEffect} from 'react'
import {useObserver} from 'mobx-react-lite'
import useStore from '../../utils/useState'
import './css/index.css';
import {History} from 'history'
interface detailType{
    location:Location,
    history:History
}
const typeId = 1;
const page = 1;
const size = 5;
const Detail:React.FC<detailType> =(props)=>{
    const {state} = props.location as {state?:any};
    const store = useStore();
    const {Special} = store;
    useEffect(()=>{
        // 详情数据
        Special.getSpecialDetailDate({id:state});
        // 评论数据
        Special.getCommentData({valueId:state,typeId,page,size})
    },[Special, state])
    let changeProv=()=>{
        props.history.push('homepage/special');
    }
    return useObserver(()=>(
        <div className='detail'>
            {Special.detailData.map((item,index)=>{
                return <div key={index} className='detail'>
                    <div className='header'>
                        <div className="left" onClick={()=>changeProv()}><span>&lt;</span></div>
                        <div className="title">{item.title}</div>
                        <div className="right"></div>
                    </div>
                    <main>
                    <div dangerouslySetInnerHTML={{__html:item.content}} />
                    <div className="tieleLine">
                        <span>精选留言</span> <i>留言</i>
                    </div>
                    <div className='content'>
                        {
                            Special.commentData.map((val,ind)=>{
                                return <div key={ind}>
                                    <div>
                                        <span> {
                                         Object.values(val.user_info).length > 0 ?val.user_info.username:"匿名用户"
                                        }</span>
                                        
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    </main>
                </div>
            })}
            
        </div>
    ))
}

export default Detail