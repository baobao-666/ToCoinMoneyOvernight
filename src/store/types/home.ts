
// 轮播图泛型
export interface ItemType {
    id: number,
    ad_position_id: number,
    media_type: number,
    name: string,
    link: string,
    image_url: string,
    content: string,
    end_time: number,
    enabled: number,
}

export interface Type {
    Bannerlist: ItemType[]
}

// 导航数据
export interface NavItem {
     id: number
     name: string
     url: string
     icon_url: string
     sort_order: number
}

export interface NavTypes {
    NavList: NavItem[]
}

// 最新商品数据

export interface newGoodsListType {
    newGoodsList: newGoodsItemType[]
    title?:string
}

export interface newGoodsItemType {
    id: number
    name: string
    list_pic_url: string
    retail_price: number
}


// 制造商数据
export interface brandListType {
    brandList: brandItemType[] 
    title?:string
}

export interface brandItemType {
    id: number
    name: string
    list_pic_url: string
    simple_desc: string
    pic_url: string
    sort_order: number
    is_show: number
    floor_price: number
    app_list_pic_url: string
    is_new: number
    new_pic_url: string
    new_sort_order: number
}

// 床垫数据
export interface hotGoodsListType {
    hotGoodsList: hotGoodsItemType[]
    title?:string
}

export interface hotGoodsItemType {
    id: number
    name: string
    list_pic_url: string
    retail_price: number
    goods_brief: string
}

// 间距轮播图数据

export interface  topicListType {
    topicList: topicItemType[]
    title?:string
}


export interface  topicItemType {
    id: number
    title: string
    content: string
    avatar: string
    item_pic_url: string
    subtitle: string
    topic_category_id: number
    price_info: number
    read_count: string
    scene_pic_url: string
    topic_template_id: number
    topic_tag_id: number
    sort_order: number
    is_show: number
}

// categoryList 数据


export interface categoryItemType {
    id?: number
    name?: string
    goodsList: goodsListType[]
}

export interface goodsListType {
    id: number
    name: string
    list_pic_url: string
    retail_price: number
}
