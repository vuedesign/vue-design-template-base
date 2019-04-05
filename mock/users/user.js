module.exports = {
    '/users/user GET': cxt => {
        return {
            'list|20': [
                {
                    'id|+1': 1,
                    date: '@datetime',
                    name: '@cname',
                    type: '@integer(1, 2)',
                    address: '@csentence(15,20)'
                }
            ]
        }
    }
};
