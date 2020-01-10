import { observable, action } from 'mobx'
import { getFendateQuery, getFendateDim,getFendateClear } from '../../api/fen'

export default class CreateStore {

    @observable
    defaultKeyword: any;

    @observable
    historyKeywordList: any[] = [];

    @observable
    hotKeywordList: any[] = []

    @observable
    list: any[] = []  //历史记录
    
    @observable
    goodList:any

    @action
    async getFendateQuery() {
        let res: any = await getFendateQuery()
        console.log('res1111111111111111111111', res)
        this.defaultKeyword = res.defaultKeyword.keyword
        this.historyKeywordList = res.historyKeywordList
        // console.log(this.historyKeywordList,"111111111111111111")
        this.hotKeywordList = res.hotKeywordList
    }
    
    @action
    async getFendateDim(tat:any) {
        console.log('tat...............',tat)
        let res: any = await getFendateDim(tat)
        console.log('res==========>', res)
        this.list.push(res)
        console.log('this.list',this.list)
        // this.goodList = res
        // console.log(this.goodList)
    }
    
    @action
    async getFendateClear() {
        let res: any = await getFendateClear()
        console.log(res)
    }
}
    