// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action} from 'mobx'
import {
    getSpecialData,
    getSpecialDetailDate
} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[]; // 专题数据
    detailData:specialType[]=[]  //详情数据

    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        this.list = res.data;
        console.log(res.data,'data');
    }
    async getSpecialDetailDate(obj:Object){
        const res:any =await getSpecialDetailDate(obj);
        console.log(res);
        
        // this.detailData = res.data;
    }

}