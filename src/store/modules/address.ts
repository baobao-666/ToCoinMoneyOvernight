import {observable, action} from 'mobx'

import { getAddressList } from '../../api/address';
import { AddType } from '../types/address';

export default class {
    @observable
    AddList: AddType[] =[]
    @action
    async getAddressList(){
        let res:any = await getAddressList();
        console.log('====================================');
        console.log(res);
        console.log('====================================');
    }

}