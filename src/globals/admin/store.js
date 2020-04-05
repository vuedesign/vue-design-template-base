
import * as types from './types';

const state = {
    branchTitle: 'VueDesign'
};

const actions = {};

const mutations = {
    [types.SEO_TITLE](state, to) {
        const { label } = to.meta;
        document.title = `${state.branchTitle}-${label}`;
    }
};

const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
