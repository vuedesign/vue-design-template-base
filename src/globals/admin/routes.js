export default [
    {
        path: '/',
        name: 'admin',
        meta: {
            label: '首页'
        },
        redirect: {
            name: 'dashboard'
        },
        component: () => import('./pages/Index'),
        children: []
    }
];
