/* eslint-disable @typescript-eslint/no-unused-vars */
// 引入mobx
import {observable, action} from 'mobx'

import { getHomeData }  from '../../api/home'

export default class CreateStore{


   @observable
   list:any={} //全部数据
   @observable
   itemKey: string[] = [] //键的集合


   @action
    async  getHomeData(){
    const res:any = await getHomeData()
    console.log('====================================');
    console.log(res);
    console.log('====================================');
       this.list = res
       this.itemKey = Object.keys(res)
}
}