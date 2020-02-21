import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'

// 关联数据库
import { connect } from '@tarojs/redux'

// 接口
import { getIntervie } from '../../../actions/sign'
import { View, Text } from '@tarojs/components'

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
    params: {
        status: number,
        page: number,
        pageSize: number
    }

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Intervie {
    props: IProps;
}

@connect(state => {
    console.log(state.sign.data, "11111111111111");

    return {
        list: state.sign.data
    }
}, dispatch => {
    return {
        getSignList: (params) => {
            dispatch(getIntervie(params))
        }
    }
})

class Intervie extends Component<{}, PageState> {
    config: Config = {
        navigationBarTitleText: "面试列表"
    }
    state = {
        params: {
            status: 2,
            page: 1,
            pageSize: 10
        },
        tabList: [{
            title: "未开始",
            id: 1
        }, {
            title: "已打卡",
            id: 2
        }, {
            title: "已放弃",
            id: 3
        }, {
            title: "全部",
            id: 4
        }]
    }
    componentDidShow() {
        let params = { ... this.state.params }
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params)

    }
    setTime = (time):string =>  {
     
            let date = new Date(time);
            console.log(date);
            
             //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let y = date.getFullYear();
            let MM:any = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;//月补0
            let d:any = date.getDate();
            d = d < 10 ? ('0' + d) : d;//天补0
            let h:any = date.getHours();
            h = h < 10 ? ('0' + h) : h;//小时补0
            let m:any = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;//分钟补0
            let s:any = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;//秒补0
            return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
        
    }
    render() {
        return (<View className='wrap' >
            <View className="tabheader" >
                {
                    this.state.tabList.map((item, index) => {
                        return <Text key={index} >{item.title}</Text>
                    })
                }
            </View>
            <View className='context'>
                {
                    this.props.list.length > 0 && this.props.list.map((item, index) => {
                        return <View className="item" key={index} >
                            <Text className="item_text" > {item.description}{item.address} </Text>
                            <Text className="item_text" > {item.company} </Text>
                            <Text className="item_text" >面试时间:<Text>{this.setTime(item.create_time)}</Text> </Text>
                            <Text className='mess' >未开始</Text>
                            <Text className='remind' >未提醒</Text>
                        </View>
                    })
                }

            </View>


        </View>)
    }


}


export default Intervie