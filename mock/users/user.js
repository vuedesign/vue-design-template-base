module.exports = {
    '/users/user GET': cxt => {
        return {
            'list|20': [
                {
                    'id|+1': 1,
                    name: '@cname',
                    birthday: '@date',
                    email: '@email',
                    address: '@csentence(15,20)'
                }
            ]
        }
    }
};
