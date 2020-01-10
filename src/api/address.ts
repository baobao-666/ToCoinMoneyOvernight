import request from '../utils/request'

export const getAddressList = () => request.get('/address/list')