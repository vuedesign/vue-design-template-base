/**
 * Created by wujian on 2018/3/18.
 */
import group from './group/routes';
import user from './user/routes';

export default {
    path: 'users',
    name: 'users',
    meta: {
        label: '用户中心'
    },
    component: () => import('./Index'),
    redirect: 'users/user',
    children: [
        ...group,
        ...user
    ]
};
