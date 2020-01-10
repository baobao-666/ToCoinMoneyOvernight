import request from '../utils/request';

//购物车
export let getShop = ()=>{
    return  request.get('/cart/index')
}
export let getDet = (params:any)=>{
    return  request.get('/goods/detail',{id:params.id})
}

export let getData=(params:any)=>{
    return request.get('/goods/related',{id:params.id})
}

