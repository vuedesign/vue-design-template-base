export default [
    {
        path: 'group/:page',
        name: 'users-group',
        meta: {
            label: '用户组'
        },
        component: () => import('./Index'),
        children: [
            {
                path: 'add',
                name: 'users-group-add',
                meta: {
                    label: '新增用户'
                },
                component: () => import('./Add')
            },
            {
                path: 'edit/:id',
                name: 'users-group-edit',
                meta: {
                    label: '编辑用户'
                },
                component: () => import('./Edit')
            },
            {
                path: 'view/:id',
                name: 'users-group-view',
                meta: {
                    label: '编辑用户'
                },
                component: () => import('./View')
            }
        ]
    }
];
