import requst from '../utils/request'

class HomeApi{
   
     //获取首页数据
  getHomeData = (params: any) => requst.get('/', params)

}

export default new HomeApi()