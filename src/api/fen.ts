import requst from '../utils/request'

//获取分类数据
export const getFendate = () => requst.get('/catalog/index')


// 获取根据分类ID获取当前分类信息和子分类

export const getFendateId = (params:object) => requst.get('/catalog/current',params)


// 获取分类ID分类Nav数据

export const getFendateNav = (params:any) => requst.get(`/goods/category/id=${params}`)