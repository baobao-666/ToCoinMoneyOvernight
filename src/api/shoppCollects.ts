import  request  from '../utils/request'

export const getShoppcollect = (params: any) => request.get('/collect/list',params)