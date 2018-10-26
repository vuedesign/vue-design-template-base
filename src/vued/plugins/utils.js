/**
 * Created by n.see on 2018/10/25.
 */
import { getURL } from '../global/helpers';

const Utils = {};

Utils.install = (Vue, options = {}) => {
    const urls = options.urls || {};
    Vue.prototype.$getURL = (type, payload) => {
        return getURL(urls || {}, type, payload);
    };
    Vue.getURL = (type, payload) => {
        return getURL(urls, type, payload);
    };
};

export default Utils;
