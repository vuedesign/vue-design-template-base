module.exports = {
    response(data) {
        return Object.assign(data, {
            pagination: {
                page: 1,
                size: 20,
                total: 100,
                next: null,
                prev: null
            }
        });
    },
    port: 3000,
    prefix: '/api/v1',
    delay: 500
};
