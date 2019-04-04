import Vue from 'vue';

let Design = {
    name: 'VueDesign',
    version: '__VERSION__'
};

Design.plugins = (pluginsPath) => {
    loadFile(pluginsPath, []).forEach(plugin => {
        const { name, options = {} } = plugin;
        Vue.use(plugin[name], options);
    });
};

Design.filters = (filtersPath) => {
    const filters = loadFile(filtersPath, {});
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key]);
    });
};

Design.directives = (directivesPath) => {
    const directives = loadFile(directivesPath, {});
    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key]);
    });
};

Design.components = () => {
    const components = require.context('@/vendor/components', false, /\.vue$/);
    components.keys().map(key => {
        Vue.component(components(key).default.name, components(key).default);
    });
};

Design.mixin = (mixinPath) => {
    Vue.mixin(loadFile(mixinPath, {}));
};

Design.use = (path, options = {}) => {
    const plugin = loadFile(path, {});
    Vue.use(plugin, options);
    return Design;
};

function loadFile(path, defaultValue) {
    if (!path) {
        return defaultValue;
    }
    if (typeof path === 'string') {
        const newPath = path.replace('@/', '');
        const moduleData = require(`@/${newPath}`);
        return 'default' in moduleData ? moduleData.default : moduleData;
    }
    return path || defaultValue;
}

export default Design;
