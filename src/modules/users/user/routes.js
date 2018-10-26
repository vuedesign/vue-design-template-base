export default [
    {
        path: 'user',
        name: 'users-user',
        meta: {
            label: '用户'
        },
        component: () => import('./Index'),
        children: [
            {
                path: 'create',
                name: 'users-user-create',
                meta: {
                    label: '创建用户'
                },
                component: () => import('./Update')
            },
            {
                path: 'update',
                name: 'users-user-update',
                meta: {
                    label: '编辑用户'
                },
                component: () => import('./Update')
            }
        ]
    }
];
