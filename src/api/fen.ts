import requst from '../utils/request'

class ClassFiyApi{
   
     //获取分类数据
  getFendate = (params: any) => requst.get('/goods/category', params)

}

export default new ClassFiyApi()