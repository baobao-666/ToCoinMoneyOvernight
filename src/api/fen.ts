import requst from '../utils/request'

//获取分类数据
export const getFendate = () => requst.get('/catalog/index')


// 获取根据分类ID获取当前分类信息和子分类

export const getFendateId = (params:object) => requst.get('/catalog/current',params)


// 获取分类ID分类Nav数据

export const getFendateNav = (params:any) => requst.get(`/goods/category?id=${params}`)


// 根据分类Id或者制造商Id获取商品

export const getFendateBox = (params:any) => requst.get(`/goods/list?page=${params.page}&size=${params.size}&categoryId=${params.categoryId}`)


// 获取商品查询的相关信息

export const getFendateQuery = () => requst.get('/search/index')


//商品查询模糊查询关键字

export const getFendateDim = (params:any) => requst.get('/search/helper',{keyword:params})


// 删除商品查询的历史记录

export const getFendateClear = () => requst.get('/search/clearhistory')
