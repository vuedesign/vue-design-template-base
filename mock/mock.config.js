module.exports = {
    response(data) {
<<<<<<< HEAD
        return {
            status: 200,
            data: Object.assign(data, {
=======
        if (data.list && Array.isArray(data.list)) {
            Object.assign(data, {
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
                pagination: {
                    page: 1,
                    size: 20,
                    total: 100,
                    next: null,
                    prev: null
                }
            })
<<<<<<< HEAD
=======
        }
        return {
            status: 200,
            data
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
        };
    },
    port: 3000,
    prefix: '/api/v1',
    delay: 500
};
