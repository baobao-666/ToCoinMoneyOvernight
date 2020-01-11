import React, {useState, useEffect } from "react"
import useStore from "../../utils/useState"
import { useObserver } from "mobx-react-lite"
import './css/index.css'
import { History } from 'history'
import '../../static/icon/iconfont.css'

interface PropeType {
    history: History
    location: Location
    [name: string]: any
}

let Liuyan: React.FC<PropeType> = (props: any) => {
    const {state} = props.location as {state?:any};
    let store = useStore();
    let {Special} = store;
    //input方法
    let [tag,setTag] =useState('');
     // 放回上一级
     let changeProv=()=>{
        props.history.goBack()
    }
    
    // 输入
    let inputText = (e:any) => {
        setTag(e.target.value);
    }
    // 清空
    let closekOng=()=>{
        setTag('')
    }

    // 留言
    let leaveMessage=()=>{
        Special.addCommentData({content:tag,typeId:1,valueId:state});
        alert('添加成功！!');
        props.history.goBack()
    }
    return useObserver(() => (
        <div className="messagel">
            <div className='header'>
                        <div className="left" onClick={()=>changeProv()}><i className='iconfont icon-mjiantou-copy'></i></div>
                        <div className="title">填写留言</div>
                        <div className="right"></div>
                    </div>
                <div className="concent-box">
                    <textarea className="textarea" value={tag} onChange={(e)=>inputText(e)}></textarea>
                    {/* <p className="concent-p2"><span>0</span>/<span>80</span></p> */}
                </div>
                <div className="boxBtn">
                { tag.length?<button className="whiteQ" onClick={closekOng}>清空</button>:''}
                <button className="whiteL" onClick={leaveMessage}>留言</button>
                </div>
        </div>
    ))
}
export default Liuyan;