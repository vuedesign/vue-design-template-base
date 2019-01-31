/**
 * Created by wujian on 2018/3/18.
 */

export default {
    path: '/auth',
    name: 'auth',
    meta: {
        label: 'auth'
    },
    component: () => import('./Index'),
    children: [
        {
            path: 'login',
            name: 'auth-login',
            meta: {
                label: '登录'
            },
            component: () => import('./Login')
        }
    ]
};
