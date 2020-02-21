import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'

type PageStateProps = {
    list: Array<{
        [key: string]: any
    }>
}
type PageDispatchProps = {
    getSignList: (params) => void
}
type PageOwnProps = {}

type PageState = {
    status: number,
    page: number,
    pageSize: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface SignList {
    props: IProps
}
@connect(state => {
    return {
        list: state.sign.list
    }
}, dispatch => {
    return {
        getSignList: (params) => {
            dispatch(getSignListAction(params))
        }
    }
})
class SignList extends Component<{}, PageState>{
    config: Config = {
        navigationBarTitleText: '面试列表'
    }
    state = {
        params:{
            status: 2,
            page: 1,
            pageSize: 10,
        },
       tabList:[
            {
                title: '未完成',
                id:1
            },
            {
                title: '未打卡',
                id:2
            },
            {
                title: '已放弃',
                id:3
            },
            {
                title: "全部",
                id:4
            }
        ],
        cur: 0



    }
    componentDidShow() {
        let params = { ...this.state.params };
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params)
    }
    componentDidHide() { }
Fn(index){
    this.setState({
        cur:index
    })
}
    render() {
        
        return (
            <View className='wrap'>
                <View className='tab'>
                    {
                        this.state.tabList.map((item, index) => {
                            return <Text key={index} className={this.state.cur==index?'active':""} onClick={this.Fn.bind(this,index)}>{item.title}</Text>
                        })
                    }
                </View>
                <View>
                {
                    this.props.list.length > 0 && this.props.list[this.state.cur].map((item, index) => {
                        return <View className="item" key={index} >
                            <Text className="item_text" > {item.description}{item.address} </Text>
                            <Text className="item_text" > {item.company} </Text>
                            <Text className="item_text" >面试时间:<Text></Text> </Text>
                            <Text className='mess' >未开始</Text>
                            <Text className='remind' >未提醒</Text>
                        </View>
                    })
                }

                </View>
               

            </View>
        )
    }
}
export default SignList as ComponentClass



