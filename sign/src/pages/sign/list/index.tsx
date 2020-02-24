import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import {getSignListAction} from '../../../actions/sign'
import { ITouchEvent } from '@tarojs/components/types/common'



type PageStateProps = {
  list: Array<{
    [key:string]: any
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

interface Intervie {
  props: IProps;
}

const tabList = ['未开始','已开始','已放弃','全部']

@connect(state=>{
  return {
    list: state.sign.data
  }
}, dispatch=>{
  return {
    getSignList: (params)=>{
      dispatch(getSignListAction(params))
    }
  }
})
class Intervie extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '面试列表'
  }

  state={
    status: 2,
    page: 1,
    pageSize: 10
  }

  componentDidShow () {
    let {page, status, pageSize} = this.state;
    let params = {page, status, pageSize};
    if (params.status === 2){
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide () { }

  changeStatus=(e:ITouchEvent)=>{
this.setState({
    status:e.target.dataset.status
})
  }
goDetail=(e:ITouchEvent)=>{
    wx.navigateTo({url:'/pages/sign/detail/index?id='+e.currentTarget.dataset.id})

}
setTime = (time): string => {

    let date = new Date(time * 1);
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
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
  

  render () {
    
    return (
      <View className='wrap'>
        <View className='tab'>{
          tabList.map((item, index)=>{
            return <Text key={index} data-status={index} className={index==this.state.status?'active':''} onClick={this.changeStatus}>{item}</Text>
          })
        }</View>
        <View className="cons">{
          this.props.list.map((item)=>{
            return <View className='item' onClick={this.goDetail} data-id={item.id}>
              <Text className='item_'>{item.company}</Text>
              <Text className='item_'>{item.address.address}</Text>
              <Text className='item_'>面试时间:{this.setTime(item.start_time)}</Text>
              <View className='btn'>
                  <Text>未开始</Text>
                  <Text>未提醒</Text>
              </View>
            </View>

          })
        }</View>
      </View>
    )
  }
}


export default Intervie as ComponentClass;
