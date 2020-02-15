

export interface XHRType {
    errno: number,
    errmsg: string,
    data?: object
  }
  export interface ItemType {
    id: number,
    checked: boolean,
    name: string,
    num: number,
    price: number
  }
  
  export interface cartList {
    goods_name: string,
    retail_price: number,
    number: number,
    list_pic_url: string,
    checked: number,
    product_id: number,
    goods_id: number,
    id: number
    cartList: Array<Item>,
  }
  interface Item {
    id: number,
    user_id: number,
    session_id: number,
    goods_id: number,
    goods_sn: string,
    product_id: number,
    goods_name: string,
    market_price: number,
    retail_price: number,
    number: number,
    goods_specifition_name_value: string,
    goods_specifition_ids: string,
    checked: number,
    list_pic_url: string
  }
  
  
  export interface cartTotal {
    goodsCount: number,
    goodsAmount: number,
    checkedGoodsCount: number,
    checkedGoodsAmount: number,
    // cartTotal: cartTotalObject
  }
  
  interface cartTotalObject {
    goodsCount: number,
    goodsAmount: number,
    // checkedGoodsCount:number,
    checkedGoodsAmount: number,
  }
export interface cartTotal {
    goodsCount: number,
    goodsAmount: number,
    checkedGoodsCount: number,
    checkedGoodsAmount: number,
    // cartTotal: cartTotalObject
  }










