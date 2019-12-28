/**
 * Created by wujian on 2018/3/18.
 */
import activity from './activity/routes';

export default {
    path: 'operate',
    name: 'operate',
    meta: {
        label: '用户运营'
    },
<<<<<<< HEAD
    component: () => import('./Index'),
=======
    component: () => import('./pages/Index'),
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    redirect: 'operate/activity',
    children: [
        ...activity
    ]
};
