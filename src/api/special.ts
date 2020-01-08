import request from '../utils/request';

    //获取专题数据
export let getSpecialData = (params: any)=>{
    return  request.get('/topic/list',{page:params.payload,size:params.size})
}
    // 专题详情
export let getSpecialDetailDate = (params: any)=>{
    
    return  request.get('/topic/detail',{id:params.id});
}

    // 专题评论
export let getCommentData = (params: any)=>{
    console.log(params);
    
    return  request.get('/comment/list',params);
}

