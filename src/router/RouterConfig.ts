import Home from '../views/home'

export default {
    routes:[{
        path:'/index',
        component:Home,
        children:[{
            path:'/index/home',
            component:null
        }]
    },{
        path:'/',
        redirect:'/index/home'
    }]
}