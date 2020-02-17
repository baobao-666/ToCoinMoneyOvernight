import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import { View,Text } from '@tarojs/components';
class Address extends Component{
    config: Config={
        navigationBarTitleText:'添加面试'
    }
    render(){
        return(
           <View className='box'>
               <View className="mian">面试信息</View>
               <View className='text'>
                   <View className='address'> 
                       <Text>公司名称</Text>
                       <input type="text" placeholder='请输入公司名称'/>
                       </View>
                   <View className='address'> 
                       <Text>公司电话</Text>
                       <input type="text" placeholder='请输入面试联系人电话'/>
                       </View>
                   <View className='address'> 
                       <Text>面试时间</Text>
                       <input type="text" />
                       </View>
                   <View className='address'> 
                       <Text>面试地址</Text>
                       <input type="text" placeholder='请选择面试地址'/>
                       </View>
                 

               </View>
               <View>
                   备注信息
               </View>
               <View>
                 <textarea ></textarea>
               </View>

           </View>
        )
    }
}
export default Address as ComponentClass
