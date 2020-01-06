// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action,computed} from 'mobx'
import {getSpecialData} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[];

    
    @action
    async getSpecialData(list:specialType[]){
        let res =await getSpecialData(list);
        this.list = res;
    }
}