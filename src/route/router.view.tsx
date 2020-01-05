import * as React from 'react';
import * as Router from 'react-router-dom';
// 获取范型接口
import { IRouterConfig } from './index.d';

const IRouterView=({routes}:IRouterConfig)=>{
    return <Router.Switch>
       {
          routes.map((item:any,index:number)=>{
            //   判断是路由还是重定向
              if(item.type==='route'){
                //   创建路由组件标签
                  const Com=item.component;
                //   渲染路由
                  return <Router.Route key={index}  path={item.path} render={
                    //   render渲染路由标签
                      (props:Router.RouteProps)=>{
                        //   判断有没有后代路由
                        const readireChildren:IRouterConfig =item.children;
                        if(readireChildren){
                            // 有后代
                            return <Com {...props} routes={readireChildren} ></Com>
                        }else{
                            // 无后代
                            return <Com {...props} ></Com>
                        }
                      }
                  } ></Router.Route>
              }
              if(item.type==='redirect'){
                //  重定向
                return <Router.Redirect to={item.to} from={item.from} ></Router.Redirect>
              } 
            //   容错
              return null
          })
       }
      
    </Router.Switch>
}

export default IRouterView

