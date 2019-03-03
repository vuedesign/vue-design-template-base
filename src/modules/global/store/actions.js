/**
 * Created by wujian on 2018/9/24.
 */
// import Vue from 'vue';
// import { router, store } from '@/vued';
import * as types from './types';
import { list2tree } from '@/vendor/utils';

export const findMenu = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const data = require('@/configs/menu.json');
        commit(types.ASIDE_MENU, data);
    });
};

export const permission = ({ commit }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = require('@/configs/permission.json');
            // commit('PERMISSION', data);
            const menuData = list2tree(data);
            console.log('menuData', menuData);
            commit(types.ASIDE_MENU, menuData);
        }, 100);
    });
};
