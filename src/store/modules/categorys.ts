import {observable,action, computed} from 'mobx'
import { getFendateNav } from '../../api/fen'
import { categorysType } from '../types/categorys'

export default class CreateStore{
    @observable
    list:any[]=[];

    @action
    async getFendateNav(id:any){
        console.log(id)
        let res = await getFendateNav(id)
        console.log(res,"***********")
    }

}