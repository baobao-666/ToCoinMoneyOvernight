import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'

import { AtTabs, AtTabsPane } from 'taro-ui'

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
    pageSize: number,
    curIndex: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
    props: IProps;
}

@connect(state => {
    console.log("state...", state.sign.list)
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
class SignList extends Component<{}, PageState> {
    config: Config = {
        navigationBarTitleText: '面试列表'
    }

    state = {
        status: 2,
        page: 1,
        pageSize: 10,
        tablist: [
            {
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
            }
        ],
        curIndex: 0
    }

    componentDidShow() {
        let params = { ...this.state };
        if (params.status === 2) {
            delete params.status;
        }
        this.props.getSignList(params);
    }

    componentDidHide() { }

    changeC(index) {
        console.log(index)
        this.setState({
            curIndex: index
        })
    }
    //监听用户下拉刷新事件。
    onPullDownRefresh() {

    }

    // 监听用户上拉触底事件
    onReachBottom() { }



    render() {
        let { list } = this.props
        console.log("list===>", list)
        let { curIndex } = this.state
        // const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
        return (

        //     <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        //     <AtTabsPane current={this.state.current} index={0} >
        //       <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        //     </AtTabsPane>
        //     <AtTabsPane current={this.state.current} index={1}>
        //       <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        //     </AtTabsPane>
        //     <AtTabsPane current={this.state.current} index={2}>
        //       <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        //     </AtTabsPane>
        //   </AtTabs>

            <View className='wrap'>
                <View className="header" >
                    {
                        this.state.tablist.map((item, index) => {
                            return <Text key={index} onClick={() => this.changeC(index)} className={curIndex == index ? 'active' : ''}>{item.title}</Text>
                        })
                    }
                </View>
                <View className='main'>
                    {/* {
                             list.length > 0 && list.map((item, index) => {
                            return <View className="item" key={index} >
                                <Text className="item_text" > {item.description}{item.address} </Text>
                                <Text className="item_text" > {item.company} </Text>
                                <Text className='noStart' >未开始</Text>
                                <Text className='noRemind' >未提醒</Text>
                            </View>
                        })
                    } */}
                    <View className="items"></View>
                    <View className="items"></View>
                    <View className="items"></View>
                    <View className="items"></View>
                    <View className="items"></View>
                </View>

            </View>
        )
    }
}


export default SignList as ComponentClass;


