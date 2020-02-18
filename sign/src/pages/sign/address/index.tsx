import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import { View, Text, Form, Input, Button } from '@tarojs/components';
class Address extends Component{
    config: Config={
        navigationBarTitleText:'添加面试'
    }
    state={
        company:'',
        phone:'',
        time:'',
        address:'',
        info:''
    }
    componentDidShow(){}
    componentDidHide(){}
formSubmit(e){
    console.log(this.state)
}
formResrt(){
    this.setState({
        company:'',
        phone:'',
        time:'',
        address:'',
        info:''
    })

}
goLocation(){
    wx.navigateTo({
        url:'/pages/sign/location/index'
    })
}
    render(){
        return(
           <View className='box'>
               <View className="mian">面试信息</View>
               <Form className='text' onSubmit={this.formSubmit.bind(this)} onReset={this.formResrt.bind(this)}>
                   <View className='address'> 
                       <Text>公司名称</Text>
                       <Input  placeholder='请输入公司名称' value={this.state.company} onInput={e=>this.setState({company:e.detail.value})} placeholder-class="placeholderStyle"/>
                       </View>
                   <View className='address'> 
                       <Text>公司电话</Text>
                       <Input  placeholder='请输入面试联系人电话' value={this.state.phone} onInput={e=>this.setState({phone:e.detail.value})} placeholder-class="placeholderStyle"/>
                       </View>
                   <View className='address'> 
                       <Text>面试时间</Text>
                       <Input  placeholder='面试时间' value={this.state.time} onInput={e=>this.setState({time:e.detail.value})} placeholder-class="placeholderStyle"/>
                       </View>
                   <View className='address'> 
                       <Text>面试地址</Text>
                       <Input  placeholder='请选择面试地址' onClick={this.goLocation} placeholder-class="placeholderStyle"/>
                       </View>
                       <View className='bei'>
                          
                           <Input placeholder='备注信息' value={this.state.info} onInput={e=>this.setState({info:e.detail.value})} placeholder-class="placeholderStyle"/>
                       </View>
                       <View className="button">

                       <Button form-type='submit'>确认</Button>
                       <Button form-type='reset'>重置</Button>
                       </View>
                       
                 

               </Form>
              

           </View>
        )
    }
}
export default Address as ComponentClass
