/**
 * Created by wujian on 2018/3/18.
 */

export default {
    show: false,
    title: '',
    filters: {
        search: ''
    },
    columns: [
        {
            title: '名称',
            key: 'name'
        },
        {
            title: '呢称',
            key: 'nickname'
        },
        {
            title: '邮箱',
            key: 'email'
        },
        {
            title: '年龄',
            key: 'age'
        },
        {
            title: '地址',
            key: 'address'
        }
    ],
    data: [],
    total: 0,
    loading: false
};
