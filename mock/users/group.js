module.exports = {
    '/users/group GET': cxt => {
        return {
            'list|20': [
                {
                    'id|+1': 1,
                    date: '@DATETIME',
                    name: '@cname',
                    type: '@integer(1,2)',
                    address: '@csentence(15,20)'
                }
            ]
        }
<<<<<<< HEAD
=======
    },
    '/users/group/:groupId GET': cxt => {
        return {
            'id|+1': 1,
            date: '@DATETIME',
            name: '@cname',
            type: '@integer(1,2)',
            address: '@csentence(15,20)'
        };
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    }
};
