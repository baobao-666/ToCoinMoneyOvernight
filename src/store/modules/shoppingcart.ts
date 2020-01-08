// 引入泛型
import {shopCartType} from '../types/shoppingcart'
// 引入mobx
import {observable,action,computed} from 'mobx'
import {getShop} from '../../api/shop'

// 定义数据
export default class CreateStore{
    @observable
    list:shopCartType[]=[];
  
    

    @action
    async getShop(){
        let res:any=await getShop();
        this.list=res.cartList
      
        console.log(res)
        
    }
}