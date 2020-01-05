export interface IRouterItem{  //定义一个泛型接口  定义路由跳转
    path?:string,
    type:string,
    from?:string,
    component?:any,
    redirect?:string,
    children?:any[],
    to?:string
}



export interface IRouterConfig{  
    routes:IRouterItem[]
}