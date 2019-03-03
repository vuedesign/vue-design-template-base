module.exports = {
    '/users/group GET': cxt => {
        return {
            'list|20': [
                {
                    'id|+1': 1,
                    date: '@DATETIME',
                    name: '@NAME',
                    type: ['supper', 'admin'],
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        }
    }
};
