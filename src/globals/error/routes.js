/**
 * Created by wujian on 2018/3/18.
 */

export default {
    path: '/error',
    name: 'error',
    meta: {
        label: '错误'
    },
    component: () => import('./pages/Index'),
    redirect: 'error/404',
    children: [
        {
            path: '403',
            name: '403',
            meta: {
                label: '403'
            },
            component: () => import('./pages/403')
        },
        {
            path: '404',
            name: '404',
            meta: {
                label: '404'
            },
            component: () => import('./pages/404')
        },
        {
            path: '500',
            name: '500',
            meta: {
                label: '500'
            },
            component: () => import('./pages/500')
        },
        {
            path: '502',
            name: '502',
            meta: {
                label: '502'
            },
            component: () => import('./pages/502')
        }
    ]
};
