<<<<<<< HEAD
export default {
    path: 'dashboard',
    name: 'dashboard',
    meta: {
        label: '仪表板'
    },
    component: () => import('./Index')
=======
/**
 * Created by wujian on 2018/3/18.
 */

export default {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
        label: '面板'
    },
    component: () => import('./pages/Index')
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
};
