import Vue from 'vue';

export default (config = {}) => {
    const { store, router } = config;
    return (options = {}) => {
        const { App } = options;
        // delete options.App;
        const app = new Vue({
            store,
            router,
            render: h => h(App),
            ...options
        });
        return app;
    };
};
