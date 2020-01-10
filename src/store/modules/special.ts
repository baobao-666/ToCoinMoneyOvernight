// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action} from 'mobx'
import {
    getSpecialData,         // 专题数据
    getSpecialDetailDate,   // 专题详情
    getCommentData,         // 专题评论
    getRelatedDate          // 推荐专题
} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[]; // 专题数据

    @observable
    detailData:specialType[]=[]  //详情数据

    @observable
    commentData:specialType[]=[]  //评论数据

    @observable
    relatedDate:specialType[]=[]  //推荐专题数据

    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        this.list = res.data;
    }
    @action
    async getSpecialDetailDate(obj:Object){
        const res:any =await getSpecialDetailDate(obj);
        this.detailData=[res]; 
        
    }

    @action
    async getCommentData(obj:Object){
        const res:any =await getCommentData(obj);
        this.commentData=res.data;
    }

    @action
    async getRelatedDate(obj:Object){
        const res:any =await getRelatedDate(obj);
        this.relatedDate=res;
    }

    
     

}