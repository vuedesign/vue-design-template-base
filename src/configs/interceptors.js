<<<<<<< HEAD
/**
 * 注：vued依赖本文件, 不能删
 */

import { store } from '@/vued';
import { SUCCESS_STATUS_CODE } from '@/configs/constants';
=======
import { store } from 'vue-design-core';
import { SUCCESS_STATUS_CODE } from './constants';
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988

// let token = 'VHJK324567YU345667POIU';
export const isTimestampDisabled = false;

/**
 * ajax请求成功
 * @param config
 * @returns {*}
 */
export const ajaxRequestSuccess = (config) => {
<<<<<<< HEAD
=======
    console.log('config', config);
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    return config;
};

/**
 * ajax请求失败
 * @param error
 * @returns {Promise<never>}
 */
<<<<<<< HEAD
export const ajaxRequestFailure = (error) => {
    return Promise.reject(error);
};
=======
export const ajaxRequestFailure = error => Promise.reject(error);
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988

/**
 * ajax返回成功
 * @param response
 * @returns {*}
 */
export const ajaxResponseSuccess = (response) => {
    if (response.status === SUCCESS_STATUS_CODE) {
        return response.data;
    }
    return Promise.reject(response);
};

/**
 * ajax返回失败
 * @param error
 * @returns {Promise<never>}
 */
<<<<<<< HEAD
export const ajaxResponseFailure = (error) => {
    return Promise.reject(error);
};

export const routerBeforeEach = ({ to, from, next }) => {
    store.commit('global/BREADCRUMB', to);
    store.commit('global/SEO_TITLE', to);
=======
export const ajaxResponseFailure = error => Promise.reject(error);

export const routerBeforeEach = ({ to, from, next }) => {
    store.commit('admin/BREADCRUMB', to);
    store.commit('admin/SEO_TITLE', to);
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    next();
};

export const routerBeforeResolve = ({ to, from, next }) => {
    next();
};

<<<<<<< HEAD
export const routerAfterEach = ({ to, from }) => {
};
=======
export const routerAfterEach = ({ to, from }) => {};
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
