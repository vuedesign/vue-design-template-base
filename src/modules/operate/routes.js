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
    component: () => import('./pages/Index'),
    redirect: 'operate/activity',
    children: [
        ...activity
    ]
};
