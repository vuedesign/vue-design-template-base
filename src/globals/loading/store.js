const state = {
    isFinish: false
};

const actions = {};

const mutations = {
    UPDATE_LOADING_STATE(state, isFinish) {
        state.isFinish = isFinish;
    }
};

const getters = {
    isFinish: state => state.isFinish
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
