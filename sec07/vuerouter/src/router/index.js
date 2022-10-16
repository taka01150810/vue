import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/Booklist.vue'
import BookDetail from '@/components/BookDetail.vue'
import Item from '../views/Item.vue'
import NotFound from '@/components/NotFound.vue'
import User from '../views/User.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: { //s がつく
      default: HomeView,
      sub: HomeSub,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    props: route => ({
      id: Number(route.params.id), //URLはintにする
      title: route.params.title,
      content: route.params.content,
    })
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item,
    // beforeEnter: (to, from, next)=>{

    // }
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile,
      },
      {
        path: 'post',
        component: UserPost,
      },
    ]
  },
  {
    path: '*', // 上記のパスにマッチしないもの全て
    // redirect: '/',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  console.log(to)
  console.log(from)
  next() //移動する 
  // next(false) //移動しない
})

export default router
