/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from 'react'
import {useObserver} from 'mobx-react-lite'
import useStore from '../../utils/useState'
import './css/index.css';
import {History} from 'history'
import '../../static/icon/iconfont.css'
interface detailType{
    location:Location,
    history:History,
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
        Special.getCommentData({valueId:state,typeId,page,size});
        // 相关专题数据
        Special.getRelatedDate({id:state})
    },[Special, state]);
    // 放回上一级
    let changeProv=()=>{
        props.history.goBack()
    }
    //更多评论数据
    let commentRrite=()=>{
        props.history.push('/moreComment',state);
    } 

    //  相关专题详情
    let changeDetail= (id:number)=>{  
        props.history.push('/detail',id);
      } 
    
    // 留言
    let leave=()=>{
        props.history.push('/commentWrite',state);
    }
    return useObserver(()=>(
        <div className='detail'>
            {Special.detailData.map((item,index)=>{
                return <div key={index} className='detail'>
                    <div className='header'>
                        <div className="left" onClick={()=>changeProv()}><i className='icon iconfont icon-mjiantou-copy'></i></div>
                        <div className="title">{item.title}</div>
                        <div className="right"></div>
                    </div>
                    <main>
                    <div dangerouslySetInnerHTML={{__html:item.content}} />
                    <div className="tieleLine">
                        <span>精选留言</span> <i className='icon iconfont icon-yijian' onClick={leave}></i>
                    </div>
                    <div className='content'>
                        {
                            Special.commentData.length===0?
                            <div className='liuyan'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAB9CAMAAACbBc3CAAAABGdB
                            TUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADDUExURUdwTK2trZmZmZiYmJmZmZqampmZmZmZmZmZmZqampmZmZeXl5mZmZmZmbOzs5mZmZqa
                            mpmZmZqampmZmZmZmZmZmZmZmZmZmZmZmZmZmZiYmJmZmZmZmZmZmZmZmfHx8eXl5ZiYmJCQkPPz8+7u7piYmPDw8O3t7fT09Orq6u7u7u7u
                            7unp6e/v7+Xl5Y6Ojuzs7I2NjfLy8unp6fT09O7u7u/v7/Hx8aysrMfHx+Hh4dXV1bu7u6GhoaqqqpmZmezs7Hgxy5kAAAA/dFJOUwAGbXaq
                            FPSjWSQMnhyXAkV/3S+Ht5D71E7syj3DNmLnCyn+1MDl9ND+40wYMYgkvD7SanqXo12r7e2rrc5YRuxjAZQAAAZYSURBVGjevVtpd5paFGVG
                            5hlkVGiJQxKbNGnz2vfeOvz/X9UDmNSoqCiX+6GrKythe6Z99jkXKYrUoWlqzKOzk1Hx7CAbFY8p01HdmVjyqO703XHdCeyoeC7EY8KpQsmP
                            iTcBblR3euOGT7Zg1OpLYdzqY0DpoAEyeBwcI2uZ8VQicHzpq0fQAsEj4+UpRIcVEkAwJRS+acjs/cRIAJz+xsl5PGFYkzVNlmUm01Q93sNl
                            +/OjcxGAs/tBSVOWCwTYO2GiZfGZzy2bAFafZi+nUzGonx64HCdqjuk4jsmwjhtYYQPqMvkJ55YAbA8twxscPtOPlCyX9/6M5qV0okW11YnT
                            4a/cB1HqwRSOBb6lTfLuT8inmVjbmWTHHKsyxuVohgsgaMb51iKxro+OdW6pZzrDJLbYSx+RM/jrviddXUT45wHTp2vShoZGOlc12hSTJJj0
                            lsi2ggFg+hOgI0DJXkV2KdZ20rO2U3SldnXoJwn4vUxk0ZW3qCtVQ/q62Dkp1oB3o7jKQrAu/MSxANbtfcOOAC6izNi6IXK7nItpY17gCACG
                            GuZgV/AuyJSh4JAw0FVn4YYcSu3gtIUIN6zCkCxwTmn+AZ25ra2w+5G8cOrDXD23dM5lHIgEpBoLAt8hwQMiYtuD5Lg3fZsEHCUnR0cz7hI2
                            uC5nBJCOxNUiNv+ahx7F+ZCUtsdQBWAcfASS2xJjf3xRBYHo+OvuGaicZ/KbTvzZfTkIKlG8ve2PQ9i8Ov13uEsKwSaMJ1tCvkNxCfGFBbtD
                            MgmQ38RKQvSu1dUuBh94Q2J8VKPbNX5kjON5miJefDgt7RRi3kcjQtfSP7/fH/CQFlg+9Dxd7VwV3jlGrC3dzKqng92TmtuxMZ1OepxpV2j0
                            ZFvjvFV3hseqWpMNoLYNoFqH72FVVT/J4r0vtDFddOp7VVXfyeIZ25VhVlMNurN6IYtnC67e4qEK/IF4j2Tx1CDiWyrFFP6KeD8IU6gbNDLG
                            wNlX/4J4b4QZRiztNo4sNa/xvuqEC6LVEAYSzXw2Ap7X9twYuJHw/Ma+1E8oegw8LWxabi5Ysj4GHlc2+cmXODiMgKe7QUvYAUrrGm8xJ4rH
                            Bwm/1WpZg7fakOWzUKS3ecpSC8Qj3CAm79PzBAvwtSJOaOa7KpPgmVrXeLN7oukpvEtsy8+bgifaAWXrY8DUMICNQ0lmaPz3grUezx6qzoyR
                            p6yJohBVIddqPpHj6v9t/21+gEIwPxe+D+VGl37cdMDjJc970eE9zsHxT98y6JFg78xHSpsxh5qw+V1a5lVVlU4e9TQ7pbszSrML+UK0JJRP
                            SxETDawlWnX3QGpc+bQTkUssibsmgmReymH3dmUMfGs0ISFVyFvweWCXI5i0NT8jIeu1g82jAQXfpuhq+BAaUB7cRoiYMm8N4GLovqQGR5ZX
                            fFhkdFMT1ddhLaTFoy8boEfTzV1r4dOQeE7HuxQsFPbTso3heshS6FqselBK69bC2ct8MDhh2r1DeOa3gNXbMFnDgGCckGzwrD7MWsDFehjr
                            Tl2TyWihfd9maTV7vJXbdO2Udc1veFD8f//aAt46gcouhPF5hxfa/Oc2iDfVRWpBdMHl+NQqnjdPjSC9qR2yAMpFezIeg0htXmsTF1ePFHEC
                            wqVbwAybEzVf3DDCSAqAm19OQBpFbVZX46kOQMjoPQgP+bWp+8UVFSF5KOY0qVeklXbjdIUAjut3Zdy0Z2ZxcqsuFv0mComNAASu700NqjW5
                            FfizHp0wZVw0LWL7r96dGu+tR8HT9kS0oDYtu2Yz7QBHt/r+nH26rKZT0y0bQe8yV75q48E3Wm8IZrUXPz1lTDyO06y1OTeywnqyKF3NnORX
                            M5EGCd1KmX28OPw7n/hCWAYJh0ixettmQ4GInn/Cq59nYCKoWdZuqY04tXNJ5Qd5/XAPb/PyeE+pnkXsUmQHb07dv6yWX+Zx5Js8Sbw2fov5
                            elEt3x6cguSVjwLf9HaYWDzeVcvf5nMRkLvdbfDmDX1WiHb3r1iAIlFk8Z62mmk5+68sSpLGNXjuS6Ozl8vVP0W/3nKlfes6fMu7X2FhETau
                            xdu8tsYVnESNgUfj4PLLL4JRvvKioD6jfqNx2jhfKVAg4Y2gsMb6Po8ICbZqVxoJDvsRgMWM936/EfncqF8G4SVyVwN/AIB49xDcFbzUAAAA
                            AElFTkSuQmCC" alt=""/>
                            <div>等你来留言</div></div>:
                            <div>
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
                                 {
                                     Special.commentData.length>4? <p className='moreComment' onClick={()=>commentRrite()}>查看更多评论</p>:''
                                 }
                                 
                            </div>
                        }
                       
                    </div>
                        <div className="recomCommnet">
                            <p>推荐主题</p>
                            {
                                Special.relatedDate.map((ele,i)=>{
                                    return <div className='recomImg' key={i} onClick={()=>changeDetail(ele.id)}>
                                        <img src={ele.scene_pic_url} alt=""/>
                                        <p>{ele.title}</p>
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