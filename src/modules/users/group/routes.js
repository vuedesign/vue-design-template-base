export default [
    {
        path: 'group/:page',
        name: 'users-group',
        meta: {
            label: '用户组'
        },
<<<<<<< HEAD
        component: () => import('./Index'),
=======
        component: () => import('./pages/Index'),
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
        children: [
            {
                path: 'add',
                name: 'users-group-add',
                meta: {
                    label: '新增用户'
                },
<<<<<<< HEAD
                component: () => import('./Add')
=======
                component: () => import('./pages/Add')
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
            },
            {
                path: 'edit/:id',
                name: 'users-group-edit',
                meta: {
                    label: '编辑用户'
                },
<<<<<<< HEAD
                component: () => import('./Edit')
=======
                component: () => import('./pages/Edit')
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
            },
            {
                path: 'view/:id',
                name: 'users-group-view',
                meta: {
                    label: '编辑用户'
                },
<<<<<<< HEAD
                component: () => import('./View')
=======
                component: () => import('./pages/View')
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
            }
        ]
    }
];
