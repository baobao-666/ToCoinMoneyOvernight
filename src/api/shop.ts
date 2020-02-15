import request from '../utils/request';

//购物车
export let getShop = ()=>{
    return  request.get('/cart/index')
}
//详情页
export let getDet = (params:any)=>{
    return  request.get('/goods/detail',{id:params.id})
}
//相关数据
export let getData=(params:any)=>{
  
    return request.get('/goods/related',{id:params.id})
    
}
//购物车全选和反选
export let getchecked=(isChecked:number,productIds:string|number)=>{
    return request.post('/cart/checked',{isChecked,productIds})
}
//更新数据
export let update=(goodsId:number,id:number,number:number,productId:number)=>{
    return request.post('cart/update',{goodsId,id,number,productId})
}
export let getdelete=(productIds:string|number)=>{
    return request.post('/cart/delete',{productIds})
}

