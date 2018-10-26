export default [
    {
        path: 'group',
        name: 'users-group',
        meta: {
            label: '用户组'
        },
        component: () => import('./Index'),
        children: [
            {
                path: 'create',
                name: 'users-group-create',
                meta: {
                    label: '创建用户'
                },
                component: () => import('./Update')
            },
            {
                path: 'update',
                name: 'users-group-update',
                meta: {
                    label: '编辑用户'
                },
                component: () => import('./Update')
            }
        ]
    }
];
