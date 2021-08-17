// import Dashboard from './components/admin/DashboardComponent.vue'
// import Profile from './components/admin/ProfileComponent.vue'
import User from './components/admin/UserComponent.vue'

export const routes = [
    {
        path:'/dashboard',
        component:User
    },
    {
        path:'/profile',
        component:User
    },
    { 
        path:'/users',
        component:User
    },
 
 
];
