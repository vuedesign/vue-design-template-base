module.exports = {
    '/operate/activity GET': cxt => {
        console.log('cxt.params', cxt.query, cxt.query.page);
        const listKey = `list|${cxt.query.size}`;
        return {
            [listKey]: [
                {
                    'id|+1': 1,
                    name: '@csentence(8,10)',
                    thumb: '@image("64")',
                    region: '@integer(1,3)',
                    date: '@date()',
                    time: '@time()',
                    delivery: '@boolean',
                    type: '@range(1,4)',
                    resource: '@cname()',
                    desc: '@cname(20)'
                }
            ]
        }
    }
};
