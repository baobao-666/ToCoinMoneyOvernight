/* eslint-disable @typescript-eslint/no-unused-vars */
// 引入泛型
import {homeType} from '../types/home'
// 引入mobx
import {observable, action} from 'mobx'

import {getHomeData} from '../../api/home'

export default class CreateStore{
   @observable
   list:object[]=[]
   @action
 async  getHomeData(){
    let res = await getHomeData()
    console.log('====================================');
    console.log(res);
    console.log('====================================');
   }

}