// 获取范型接口

import {IRouterConfig} from "./index.d"

// 引入路由计算组件
import RouterView from "./router.view"

import * as React from "react"


const RootRouter=({routes}:IRouterConfig)=>{
    // 引入数据计算组件传参 传入泛型接口
    return  <RouterView routes={routes}/>
}

export default RootRouter