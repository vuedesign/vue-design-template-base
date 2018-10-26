export default [
    {
        name: 'dashboard',
        label: '仪表板',
        icon: 'el-icon-menu'
    },
    {
        name: 'users',
        label: '用户中心',
        icon: 'el-icon-share',
        children: [
            {
                name: 'group',
                label: '用户组'
            },
            {
                name: 'user',
                label: '用户'
            }
        ]
    }
];
