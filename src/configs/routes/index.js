/**
 * 注：vued依赖本文件, 不能删
 */

import root from '@/configs/routes/root';
import admin from '@/configs/routes/admin';

export default [
    {
        path: '/',
        name: 'HelloWorld',
        component: () => import('@/modules/global/components/Home')
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            label: '首页'
        },
        redirect: 'admin/dashboard',
        component: () => import('@/modules/global/components/servers/VuedAdmin'),
        children: admin
    },
    ...root,
    {
        path: '*',
        redirect: '/error'
    }
];
