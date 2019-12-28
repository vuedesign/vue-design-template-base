import cookies from 'js-cookie';

const install = (Vue, options = {}) => {
    Vue.cookies = cookies;
    Vue.prototype.$cookies = cookies;
};

export default {
    install
};
