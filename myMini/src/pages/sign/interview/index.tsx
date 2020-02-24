import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import { getSignListAction } from '../../../actions/sign'

import { AtTabs, AtTabsPane, AtActivityIndicator } from 'taro-ui'

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
    console.log("state...", state)
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
        curIndex: 0,
        dargStyle: {//下拉框的样式
            bottom: 0 + 'px'
        },
        updaStyle: {
            top: 0 + 'px'

        },
        downDragStyle: {//下拉图标的样式
            height: 0 + 'px'
        },
        upDragStyle: {//上拉图标样式
            height: 0 + 'px'
        }
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

    // 滚动触发
    onScroll = (e) => {
        console.log("e....",e)
    }
    //滚动到顶部/左边，会触发 scrolltoupper 事件
    onScrollToUppers = () => {
        console.log("上拉");

    }
    // 滚动到底部/右边，会触发 scrolltolower 事件
    onScrollToLowers = () => {
        console.log("下拉");

    }
    //获取当前年月日时分秒
    setTime = (time): string => {
        let date = new Date(time * 1);
    
        let y = date.getFullYear();
        let MM: any = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;//月补0
        let d: any = date.getDate();
        d = d < 10 ? ('0' + d) : d;//天补0
        let h: any = date.getHours();
        h = h < 10 ? ('0' + h) : h;//小时补0
        let m: any = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;//分钟补0
        let s: any = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;//秒补0

        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }

    render() {
        let { curIndex } = this.state
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

                 <ScrollView
                    className="dragUpdata"
                    scrollY={true}
                    onScroll={(e) => this.onScroll(e)}
                    onScrollToUpper={() => this.onScrollToUppers()}
                    onScrollToLower={() => this.onScrollToLowers()}
                >
                    <View className='main'>
                        {/* {
                            this.props.list.length > 0 && this.props.list.map((item, index) => {
                                return <View className="item" key={index} >
                                    <Text className="item_text" > {item.description}</Text>
                                    <Text className="item_text" > {item.company}{item.address} </Text>
                                    <Text className="item_text" >面试时间:<Text>{this.setTime(item.start_time)}</Text> </Text>
                                    <Text className='mess' >未开始</Text>
                                    <Text className='remind' >未提醒</Text>
                                </View>
                            })
                        } */}

                    </View>
                </ScrollView>

                <View className='upDrag'>
                        <AtActivityIndicator mode='center' content="加载中。。。"></AtActivityIndicator>
                </View>
            </View >
        )
    }
}


export default SignList as ComponentClass;


