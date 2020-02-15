export interface shopCartType {
    list_pic_url: string,
    goods_name: string,
    retail_price: number,
    number: number,
    id: number,
    name: string,
    goods_brief: string,
    question: string,
    answer: string,
    goods_id: number,
    value: string,
    goods_desc: any,
    counter_price: number,
    count: number,
    add_time: string,
    content: string,
    pic_url: string,
    goodsCount: number,
    goodsAmount: number,
    checkedGoodsCount:number,
    checkedGoodsAmount:number,
    checked:number,
    product_id:number,
   


}
//轮播
export interface ItemTypes {
    id: number,
    img_url: string,
    img_desc: string,
    sort_order: any,
    goods_id: number

}
export interface Type {
    Lunbolist: ItemTypes[]

}