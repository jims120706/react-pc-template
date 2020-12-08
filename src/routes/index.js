import Loadable from 'react-loadable';
import { Spin } from 'antd';
const Loading = () => <Spin />


const Page1 = Loadable({
  loader: () => import('../views/Page1'),
  loading: Loading
})
const Page2 = Loadable({
  loader: () => import('../views/Page2'),
  loading: Loading
})
const Page3 = Loadable({
  loader: () => import('../views/Page3'),
  loading: Loading
})
const Page4 = Loadable({
  loader: () => import('../views/Page4'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading
})

const routes = [
  {
    path: '/',
    redirect: '/page1',
    notMenu: true,
    auth: true
  },
  {
    path: '/page1',
    component: Page1,
    routeName: '页面一',
    auth: true
  },
  {
    path: '/page2',
    component: Page2,
    routeName: '页面二',
    auth: true
  },
  {
    path: '/login',
    component: Login,
    routeName: '页面二',
    notMenu: true,
  },
]

const asyncRoute = [
  {
    path: '/page3',
    component: Page3,
    routeName: '页面二',
    auth: true
  },
  {
    path: '/page4',
    component: Page4,
    routeName: '页面二',
    auth: true
  },
]


export default routes
export {
  asyncRoute
}