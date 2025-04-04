import {createRouter, createWebHistory} from 'vue-router';
import HomeComp from '../components/HomeComp'
import RandomMealComp from '../components/RandomMealComp'
import SearchComp from '../components/SearchComp'
import RecipeComp from '../components/RecipeComp'
import CategoryComp from '../components/CategoryComp'
import NotFoundComp from '../components/NotFoundComp'

const routes=[
    {
        path: '/',
        name: 'Home',
        component:HomeComp,
    },
    {
        path: '/random',
        name: 'RandomMeal',
        component:RandomMealComp,
    },
    {
        path: '/search/:recipeName',
        name: 'Search',
        component:SearchComp,
    },
    {
        path: '/recipe/:recipeId',
        name: 'Recipe',
        component:RecipeComp,
    },
    {
        path: '/category/:categoryName',
        name: 'Category',
        component:CategoryComp,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component:NotFoundComp,
    },
    
];

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})

// router.beforeEach((to, from, next) => {
//     console.log('Auth', to.meta.auth);
//     console.log('UserName', store.state.username);
//     if(to.meta.auth == true && store.state.username == null)
//     next('/userlogin');
//     else if(to.meta.auth == false && store.state.username != null){
//         next('/home');
//     }
//     else{
//         next();
//     }
// })

export default router