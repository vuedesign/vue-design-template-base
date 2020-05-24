export default [
    {
        path: '/',
        name: 'entry',
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
