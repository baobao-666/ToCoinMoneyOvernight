
import {shopCartType, ItemTypes} from '../types/shoppingcart'
 
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
     @observable
     attribute:shopCartType[]=[]
     @observable
     Lunbolist:ItemTypes[]=[]
     @observable
     comment:shopCartType[]=[]
      @observable
      counts:shopCartType[]=[]
   
     
    

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
    this.Lunbolist=res.gallery
    this.attribute=res.attribute
    this.comment=[res.comment.data]
     this.counts=[res.comment.count]
    //  console.log(res.issue)
    //  console.log(res.info)
    //  console.log(res.gallery)
    //  console.log(res.attribute)
     console.log(res.comment.count)
     console.log(res.comment.data)
     console.log(res.comment)
     console.log(res)

    }
    
}