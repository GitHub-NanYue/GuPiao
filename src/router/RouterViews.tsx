import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

export default (props: { routes: { map: (arg0: (item: any, index: any) => JSX.Element | undefined) => React.ReactNode; }; })=>{
    return <Switch>{
        props.routes.map((item:any,index:any)=>{
            if(item.redirect){
                return <Redirect from={item.path} exact key={index} to={item.redirect} />
            }else{
                return <Route path={item.path} key={index} render={props=>{
                    if(item.children){
                        return <item.component routes={item.children} {...props} />
                    }else{
                        return <item.component {...props} />
                    }
                }} />
            }
        })
    }</Switch>
}
