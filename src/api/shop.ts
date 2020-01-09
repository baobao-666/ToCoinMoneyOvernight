import request from '../utils/request';

//购物车
export let getShop = ()=>{
    return  request.get('/cart/index')
}
export let getDet = (params:any)=>{
    return  request.get('/goods/detail',{id:params.id})
}

// //获取数量
// export let getNmu = ()=>{
//     return  request.get('/cart/goodscount')
// }//是否选中
// export let getPitch = (params:any)=>{
//     return  request.post('/cart/checked',params)
// }

