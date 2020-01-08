
// 引入mobx
import {observable,action,computed} from 'mobx'
import { getFendate } from '../../api/fen'
// 定义数据
export default class CreateStore{
    @observable
    list:any[]=[];
    current:Number = 0
    @action
    async getFendate(){
        let res:any = await getFendate();
        console.log(res,"11111111111111")
         this.list = res.categoryList;
        //  this.currList=res.categoryList.subCategoryList
        //  console.log(this.currList,"------")
    }
    
  
}