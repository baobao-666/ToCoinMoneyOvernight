import {observable,action} from 'mobx'
import { getFendateNav ,getFendateBox} from '../../api/fen'

export default class CreateStore{
    @observable
    list:any[]=[];
    @observable
    filterList:any[]=[];

    @observable
    curName:any;

    @observable
    curTit:any;

    @observable
    page:number = 1;

    @observable
    size:number = 1000;

    // @observable
    // curIndex:any

    @observable
    goodsList:any[]=[]

    @action
    async getFendateNav(id:any){
        let res:any = await getFendateNav(id)
        // console.log("res",res)
        // console.log("res111111.....",res.brotherCategory)
        this.list = res.brotherCategory
        this.curName = res.currentCategory.name;
        this.curTit = res.currentCategory.front_desc;
    }

    @action
    async getFendateBox(id:number){
        let params ={
            page:this.page,
            size:this.size,
            categoryId:id
        }
        // console.log('params...',params)
        let res:any = await getFendateBox(params)
        // console.log("filterCategory======>",res)
        this.filterList = res.data
        this.goodsList = res.goodsList
    }   

}