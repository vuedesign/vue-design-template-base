/**
 * 注：vued依赖本文件, 不能删
 */

import { store, router } from '@/vued';

let token = 'VHJK324567YU345667POIU';
export const isTimestampDisabled = false;

/**
 * ajax请求成功
 * @param config
 * @returns {*}
 */
export const ajaxRequestSuccess = (config) => {
    console.log('store:', store);
    console.log('router:', router);
    return config;
};

/**
 * ajax请求失败
 * @param error
 * @returns {Promise<never>}
 */
export const ajaxRequestFailure = (error) => {
    return Promise.reject(error);
};

/**
 * ajax返回成功
 * @param response
 * @returns {*}
 */
export const ajaxResponseSuccess = (response) => {
    return response.data;
};

/**
 * ajax返回失败
 * @param error
 * @returns {Promise<never>}
 */
export const ajaxResponseFailure = (error) => {
    return Promise.reject(error);
};

export const routerBeforeEach = ({ to, from, next }) => {
    console.log('routerBeforeEach', to, from);
    console.log('token:', token);
    store.commit('BREADCRUMB', to);
    next();
};

export const routerBeforeResolve = ({ to, from, next }) => {
    next();
};

export const routerAfterEach = ({ to, from }) => {
    console.log(store);
};
