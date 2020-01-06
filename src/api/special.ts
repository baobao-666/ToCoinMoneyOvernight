// import requst from '../utils/request'

// class SpecialApi{
   
//      //获取专题数据
//   getSpecialData = (params: any) => requst.get('/topic/list', params)

// }

// export default new SpecialApi()

import request from '../utils/request';

// 省市
export let getSpecialData = (params: any)=>{
    return  request.get('/topic/list',{params:{page:params.payload,size:params.size}})
}
