// 获取范型接口
import { IRouterItem } from './index.d'

// 一级路由
import HomePage from '../view/homePage/index'
import LoginPage from '../view/login/index';
import Detail from '../view/detail/index'

// 二级路由
import HomeCode from '../view/homePage/home/index'
import ClassifyCode from '../view/homePage/classify/index'
import MyMessingCode from '../view/homePage/myMessing/index'
import ShoppingCartCode from '../view/homePage/shoppingCart/index'
import SpecialCode from '../view/homePage/special/index'




/**
 * 路由数据列表
 * type 类型 普通路由 route  重定向redirect
 * path 导航栏显示路由路径
 * component 路由组件
 * children 后代路由
 * to 跳转去那里
 * from 来自哪里
 */
const RouterConfig:IRouterItem[]=[
   {
    type:"route",
    path:'/homepage',
    component:HomePage,
    children:[
        {
            type:"route",
            path:'/homepage/home',
            component:HomeCode,
            children:[]
           },
           {
            type:"route",
            path:'/homepage/classify',
            component:ClassifyCode,
            children:[]
           },
           {
            type:"route",
            path:'/homepage/myMessing',
            component:MyMessingCode,
            children:[]
           },
           {
            type:"route",
            path:'/homepage/shoppingCart',
            component:ShoppingCartCode,
            children:[]
           },
           {
            type:"route",
            path:'/homepage/special',
            component:SpecialCode,
            children:[]
           },{
            type:"redirect",
            from:"/homepage",
            to:"/homepage/home"
           }
    ]
   },
   {
    type:'route',
    path:'/detail',
    component:Detail
   },
   {
    type:"route",
    path:'/login',
    component:LoginPage,
    children:[]
   },
    {
     type:"redirect",
     from:"/",
     to:"/homepage"
    }
]

export default RouterConfig