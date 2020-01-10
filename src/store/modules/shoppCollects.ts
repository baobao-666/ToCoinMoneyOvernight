// 引入mobx
import { observable, action } from 'mobx'

import { ShoppCollectType } from '../types/ShoppCollects'

import { getShoppcollect } from '../../api/shoppCollects'

// 定义数据
export default class CreateStore {
    @observable
    allList: ShoppCollectType[] = []

    @action
    async getShoppcollect(params: object) {
        let res:any = await getShoppcollect(params);
        this.allList = res
    }
}