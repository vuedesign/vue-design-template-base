/**
 * Created by wujian on 2018/3/18.
 */

const state = {
    moduleNumber: 0
};

const getters = {
    moduleNumber: state => state.moduleNumber
};

const mutations = {
    MODULE_NUMBER: (state, data) => {
        state.moduleNumber = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    modules: {}
};
