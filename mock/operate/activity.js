module.exports = {
    '/operate/activity GET': cxt => {
        console.log('cxt.params', cxt.query, cxt.query.page);
        const listKey = `list|${cxt.query.size}`;
        return {
            [listKey]: [
                {
                    'id|+1': 1,
                    name: '@cname()',
                    thumb: '@image("64")',
                    region: '@cname()',
                    date: '@date()',
                    time: '@time()',
                    delivery: false,
                    type: [1, 2, 3, 4],
                    resource: '@cname()',
                    desc: '@cname(20)'
                }
            ]
        }
    }
};
