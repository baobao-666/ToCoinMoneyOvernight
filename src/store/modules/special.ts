// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action} from 'mobx'
import {
    getSpecialData,  // 专题数据
    getSpecialDetailDate,   // 专题详情
    getCommentData          // 专题评论
} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[]; // 专题数据

    @observable
    detailData:specialType[]=[]  //详情数据

    @observable
    commentData:specialType[]=[]  //评论数据

    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        this.list = res.data;
        console.log(res,'专题数据');
    }
    @action
    async getSpecialDetailDate(obj:Object){
        const res:any =await getSpecialDetailDate(obj);
        this.detailData=[res]; 
        console.log(this.detailData,'详情数据');
        
    }

    @action
    async getCommentData(obj:Object){
        const res:any =await getCommentData(obj);
        this.commentData=res.data;
        console.log(res.data,'评论');
        
    }
     

}