import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'

class HomeCode extends Component {
    config: Config = {
        navigationBarTitleText: '一面而就'
    }
    render() {
        return (
            <view className='wrap' >
                主页面
        </view>
        )
    }

}
export default HomeCode as ComponentClass;
