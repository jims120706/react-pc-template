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
const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading
})

const routes = [
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
    routeName: '页面二'
  },
]


export default routes