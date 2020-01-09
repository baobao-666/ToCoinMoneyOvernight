/* eslint-disable @typescript-eslint/no-unused-vars */
// 引入mobx
import {observable, action} from 'mobx'

import { getHomeData, userlogin }  from '../../api/home'

import { ItemType, NavItem, newGoodsItemType, brandItemType, hotGoodsItemType, topicItemType, categoryItemType } from '../types/home'
export default class CreateStore{


   @observable
   list: any = {} //全部数据

   @observable
   itemKey: string[] = [] //键的集合

   @observable
   BannerList: ItemType[] = [] //轮播数据

   @observable
   NavList: NavItem[]  = []

   @observable
   newGoodsList: newGoodsItemType[] = [] //新品商品数据

   @observable
   brandList: brandItemType[] = [] 
   
   @observable
   hotGoodsList: hotGoodsItemType[] = []

   @observable
   topicList: topicItemType[] = []

   @observable
   categoryList: categoryItemType[] = []

   @action
    async getHomeData(){
    const res:any = await getHomeData()
    console.log('====================================');
    console.log(res);
    console.log('====================================');
    if(res){
      this.list = res
      this.itemKey = Object.keys(res)
      this.BannerList = this.list[this.itemKey[0]]   
      this.NavList = this.list[this.itemKey[1]]
      this.newGoodsList = this.list[this.itemKey[2]]
      this.brandList = this.list[this.itemKey[4]]
      this.hotGoodsList = this.list[this.itemKey[3]]
      this.topicList = this.list[this.itemKey[5]]
      this.categoryList = this.list[this.itemKey[6]]
    }
   }
   @action //登录接口返回token存入本地
   async userlogin(params:object){
      const res:any = await userlogin(params)
      if(res.errno === 0){
        localStorage.setItem('token',res.data.sessionKey)
        localStorage.setItem('mobile',res.data.mobile)
      }
   }
}