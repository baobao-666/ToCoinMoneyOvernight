
// 引入mobx
import {observable,action} from 'mobx'
import { getFendate,getFendateId,getFendateNav} from '../../api/fen'
import { observer } from 'mobx-react-lite';
import { AsyncResource } from 'async_hooks';
// 定义数据
export default class CreateStore{
    @observable
    list:any[]=[];

    @observable
    curIndex:number= 0;
  
    @observable
    rightList:Array<any>= [];
  
    @observable
    curList: Array<any>= [];

    @observable
    curName: any;

    @observable
    curUrl: any;
    
    @observable
    curTit: any;
  
    @observable
    funnyList: any;

    @action
    async getFendate(){
        let res:any = await getFendate();
        this.list = res.categoryList;
        this.curList = res.currentCategory.subCategoryList;
        this.curName = res.currentCategory.name;
        this.curTit = res.currentCategory.front_name
        this.curUrl = res.currentCategory.wap_banner_url
    }
    @action
    async Cli(item:any,index:number){
        let res:any = await getFendateId({id:item.id});
        this.rightList = res.currentCategory.subCategoryList
        this.curName =res.currentCategory.name;
        this.curTit = res.currentCategory.front_name;
        this.curUrl = res.currentCategory.wap_banner_url;
        this.curIndex = index;
    }

    // @action
    // async Jump(item?:any){
    //     let res:any = await getFendateNav(item.id)
    //     console.log("res****",res.brotherCategory)
    //     this.funnyList=res.brotherCategory
    // }
  
}