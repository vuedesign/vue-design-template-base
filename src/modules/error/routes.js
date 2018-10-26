/**
 * Created by wujian on 2018/3/18.
 */

export default {
    path: '/error',
    name: 'error',
    meta: {
        label: '错误'
    },
    component: () => import('../../components/layouts/Admin'),
    redirect: 'error/404',
    children: [
        {
            path: '403',
            name: '403',
            meta: {
                label: '403'
            },
            component: () => import('./403')
        },
        {
            path: '404',
            name: '404',
            meta: {
                label: '404'
            },
            component: () => import('./404')
        },
        {
            path: '500',
            name: '500',
            meta: {
                label: '500'
            },
            component: () => import('./500')
        },
        {
            path: '502',
            name: '502',
            meta: {
                label: '502'
            },
            component: () => import('./502')
        }
    ]
};
