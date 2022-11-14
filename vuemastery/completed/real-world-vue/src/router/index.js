import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'
import EventLayout from '../views/event/EventLayout.vue'
import EventDetails from '../views/event/EventDetails.vue'
import EventEdit from '../views/event/EventEdit.vue'
import EventRegister from '../views/event/EventRegister.vue'
import EventCreate from '../views/EventCreate.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'
import NProgress from 'nprogress'
// import EventService from '@/services/EventService.js'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/events/create',
    name: 'EventCreate',
    component: EventCreate,
  },
  //   http://localhost:8080/events/123
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      store.dispatch('fetchEvent', to.params.id)
      // beforeEnter: (to, from, next) => {
      //   .catch((error) => {
      //     if (error.response && error.response.status == 404) {
      //       next({
      //         name: '404Resource',
      //         params: { resource: 'event' },
      //       })
      //     } else if (error == 'Error: Network Error') {
      //       next({ name: 'NetworkError' })
      //     } else {
      //       next({
      //         name: 'ErrorDisplay',
      //         params: { error: error },
      //         props: true,
      //         component: ErrorDisplay,
      //       })
      //     }
      //   })
    },
    children: [
      // <-----
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
        beforeEnter: (to) => {
          return store.dispatch('fetchEvent', to.params.id)
        },
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
        meta: { requireAuth: true },
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return { path: '/events/' + to.params.afterEvent }
    },
  },
  {
    path: '/about-us',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    redirect: { name: 'AboutView' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    component: ErrorDisplay,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from) => {
  NProgress.start()
  const notAuthorized = false
  if (to.meta.requireAuth && notAuthorized) {
    store.state.flashMessage = 'Sorry, you are not authorized to view this page'
    setTimeout(() => {
      store.state.flashMessage = ''
    }, 3000)
    if (from.href) {
      return false
    } else {
      return { path: '/' }
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
