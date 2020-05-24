/**
 * Created by wujian on 2018/3/18.
 */

export default [
    {
        path: 'test',
        name: 'test',
        meta: {
            label: '面板test'
        },
        component: () => import('./pages/Index')
    }
];
