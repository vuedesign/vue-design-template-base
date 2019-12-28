<<<<<<< HEAD
import { to } from '@/vued';
=======
import { to } from 'vue-design-core';
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
import * as api from './api';

const types = {
    DATA: 'DATA',
    FILTERS: 'FILTERS',
    TOTAL: 'TOTAL',
<<<<<<< HEAD
    LOADING: 'LOADING'
=======
    LOADING: 'LOADING',
    DETAIL: 'DETAIL'
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
};

const state = {
    show: false,
    title: '',
    filters: {
<<<<<<< HEAD
        search: '',
        type: -1
    },
    data: [],
=======
        name: '',
        type: -1
    },
    data: [],
    detail: {},
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    total: 0,
    loading: false
};

const actions = {
<<<<<<< HEAD
    find: async({ commit }) => {
        commit(types.LOADING, true);
        const [err, res] = await to(api.find());
        if (err) {
            return;
        }
        console.log('res *** ', res);
        commit(types.DATA, res.list);
        commit(types.TOTAL, res.total);
        commit(types.LOADING, false);
    },
    findOne: async({ commit }, params) => {
        const [err, res] = await to(api.findById(params));
        if (err) {
            return;
        }
        commit(types.DATA, res.data);
=======
    find: async({ commit }, params) => {
        commit(types.LOADING, true);
        const [err, res] = await to(api.find(params));
        if (err) {
            return;
        }
        commit(types.DATA, res.list);
        commit(types.TOTAL, res.list.length);
        commit(types.LOADING, false);
    },
    findOne: async({ commit }, { groupId }) => {
        const [err, detail] = await to(api.findById(groupId));
        if (err) {
            return;
        }
        commit(types.DETAIL, detail);
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    }
};

const mutations = {
    [types.DATA](state, { key, value }) {
        state[key] = value;
    },
    [types.FILTERS](state, filters) {
        state.filters = Object.assign(state.filters, filters);
    },
    [types.DATA](state, data) {
        state.data = data;
    },
    [types.TOTAL](state, data) {
        state.total = data;
    },
    [types.LOADING](state, data) {
        state.loading = data;
<<<<<<< HEAD
=======
    },
    [types.DETAIL](state, data) {
        state.detail = data;
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
    }
};

const getters = {
    filters: state => state.filters,
<<<<<<< HEAD
    columns: state => state.columns,
    data: state => state.data,
    total: state => state.total,
    loading: state => state.loading
=======
    data: state => state.data,
    total: state => state.total,
    loading: state => state.loading,
    detail: state => state.detail
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
