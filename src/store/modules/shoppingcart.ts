
import { shopCartType, ItemTypes } from '../types/shoppingcart'

// 引入mobx
import { observable, action } from 'mobx'
import { getShop, getDet,getData } from '../../api/shop';



// 定义数据
export default class CreateStore {
  @observable
  list: shopCartType[] = [];
  @observable
  total: shopCartType[] = []
  @observable
  det: shopCartType[] = [];
  @observable
  data: shopCartType[] = [];  
  @observable
  attribute: shopCartType[] = []
  @observable
  Lunbolist: ItemTypes[] = []
  @observable
  comment: shopCartType[] = []
  @observable
  counts: shopCartType[] = []
  @observable
  pic: shopCartType[] = []
  @observable
  getList:shopCartType[] = []

  
 
 
  

@action
  async getShop() {
    let res: any = await getShop();
    this.list = res.cartList
    this.total = [res.cartTotal]
    // console.log(res)
  }
  @action
  async getDet(params: object) {
    let res: any = await getDet(params)
    this.det = [res.info]
    this.data = res.issue
    this.Lunbolist = res.gallery
    this.attribute = res.attribute
    this.comment = [res.comment.data]
    this.counts = [res.comment.count]
    this.pic = [res.comment.data.pic_list]
  
    // console.log(res.issue)
    // console.log(res.info)
    //  console.log(res.gallery)
    //  console.log(res.attribute)
    //  console.log(res.comment.count)
    //  console.log(res.comment.data)
    //  console.log(res.comment)
    // console.log(res)
    //  console.log(res.categoryList)
    //  console.log(res.comment.data.pic_list)
}
  @action
  async getData(params:object){
    let res:any=await getData(params)
    this.getList =[res.goodsList]
    console.log(res.goodsList)
  }

}