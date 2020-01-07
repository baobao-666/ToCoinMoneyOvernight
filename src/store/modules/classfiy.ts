// 引入泛型
import {classfiyType} from '../types/classfiy'
// 引入mobx
import {observable,action,computed} from 'mobx'
import { getFendate } from '../../api/fen'
// 定义数据
export default class CreateStore{
    @observable
    list:classfiyType[]=[]
    @action
    async getFendate(){
        let res:any = await getFendate();
        console.log(res,"11111111111111")
         this.list = res.categoryList;
    }
    
  
}