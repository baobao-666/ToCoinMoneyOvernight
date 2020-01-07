import requst from '../utils/request'

//获取首页数据
export const getHomeData = () => requst.get('/')

// 登录接口
export const userlogin = (params:object) => requst.post('/auth/loginByMobile',params)


