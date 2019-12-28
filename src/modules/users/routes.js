/**
 * Created by wujian on 2018/3/18.
 */
import group from './group/routes';
import user from './user/routes';

export default {
<<<<<<< HEAD
    path: 'users',
=======
    path: '/users',
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    name: 'users',
    meta: {
        label: '用户中心'
    },
<<<<<<< HEAD
    component: () => import('./Index'),
=======
    component: () => import('./pages/Index'),
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    redirect: 'users/user',
    children: [
        ...group,
        ...user
    ]
};
