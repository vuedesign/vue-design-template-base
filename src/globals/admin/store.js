
// import Vue from 'vue';
import { config } from 'vue-design-core';
import { list2tree } from '@vendors/utils';
import * as types from './types';

const state = {
    branchTitle: 'VueDesign',
    breadcrumbs: [],
    asideMenu: [],
    permission: [],
    actions: [],
    asideActive: ''
};

const actions = {
    findMenu: ({ commit }) => new Promise((resolve, reject) => {
        const data = config('menuAside.json');
        commit(types.ASIDE_MENU, data);
    }),
    permission: ({ commit }) => new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = config('permission.json');
            // commit('PERMISSION', data);
            const menuData = list2tree(data);
            console.log('menuData', menuData);
            commit(types.ASIDE_MENU, menuData);
        }, 100);
    })
};

const mutations = {
    [types.BREADCRUMB](state, to) {
        const { matched } = to;
        const breadcrumbs = [];
        matched.forEach((item, index) => {
            breadcrumbs.push({
                name: item.name,
                label: item.meta.label
            });
        });
        state.breadcrumbs = breadcrumbs;
    },
    [types.ASIDE_MENU](state, asideMenu) {
        state.asideMenu = asideMenu;
    },
    [types.PERMISSION](state, permission) {
        state.permission = permission;
    },
    [types.ACTIONS](state, actions) {
        state.actions = actions;
    },
    [types.ASIDE_ACTIVE](state, asideActive) {
        state.asideActive = asideActive;
    },
    [types.SEO_TITLE](state, to) {
        const label = to.meta.label;
        document.title = `${state.branchTitle}-${label}`;
    }
};

const getters = {
    breadcrumbs: state => state.breadcrumbs,
    menu: state => state.menu,
    asideMenu: state => state.asideMenu,
    headerMenuActive: state => state.headerMenuActive,
    actions: state => state.actions,
    asideActive: state => state.asideActive
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
