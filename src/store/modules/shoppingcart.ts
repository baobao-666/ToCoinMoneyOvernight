
import {shopCartType} from '../types/shoppingcart'
 
// 引入mobx
import {observable,action,computed} from 'mobx'
import { getShop,getDet} from '../../api/shop';

// 定义数据
export default class CreateStore{
    @observable
    list:shopCartType[]=[];
    @observable
     det:shopCartType[]=[];
     @observable
     data:shopCartType[]=[];
     
    

    @action
    async getShop(){
        let res:any=await getShop();
        this.list=res.cartList
      // console.log(res)
    }
    @action
    async getDet(params:object){
    let res:any=await getDet(params)
    this.det=[res.info]
    this.data=res.issue
     console.log(res.issue)
     console.log(res.info)
    }
   
}