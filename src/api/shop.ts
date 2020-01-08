import request from '../utils/request';

//购物车
export let getShop = ()=>{
    return  request.get('/cart/index')
}
