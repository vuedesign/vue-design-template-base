/**
 * Created by wujian on 2018/3/18.
 */

import {
    FILTERS,
    DATA,
    TOTAL
} from './types';

export default {
    [DATA](state, { key, value }) {
        state[key] = value;
    },
    [FILTERS](state, filters) {
        state.filters = Object.assign(state.filters, filters);
    },
    [DATA](state, data) {
        state.data = data;
    },
    [TOTAL](state, data) {
        state.total = data;
    }
};
