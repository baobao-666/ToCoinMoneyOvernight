// 获取范型接口
import { IRouterItem } from './index.d'

// 一级路由
import HomeCode from '../view/home/index'
import ClassifyCode from '../view/classify/index'
import MyMessingCode from '../view/myMessing/index'
import ShoppingCartCode from '../view/shoppingCart/index'
import SpecialCode from '../view/special/index'

// 二级路由

// 暂无二级





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
     path:'/home',
     component:HomeCode,
     children:[]
    },
    {
     type:"route",
     path:'/classify',
     component:ClassifyCode,
     children:[]
    },
    {
     type:"route",
     path:'/myMessing',
     component:MyMessingCode,
     children:[]
    },
    {
     type:"route",
     path:'/shoppingCart',
     component:ShoppingCartCode,
     children:[]
    },
    {
     type:"route",
     path:'/special',
     component:SpecialCode,
     children:[]
    },
    {
     type:"redirect",
     from:"/",
     to:"/home"
    }
]

export default RouterConfig