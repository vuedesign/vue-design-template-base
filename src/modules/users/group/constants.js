<<<<<<< HEAD
import { list2map } from '@/vendor/utils';
=======
import { list2map } from '@vendors/utils';
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988

export const typeList = [
    {
        label: '全部',
        value: -1
    },
    {
        label: '超级管理员',
        value: 1
    },
    {
        label: '管理员',
        value: 2
    }
];

export const typeMap = list2map(typeList);
