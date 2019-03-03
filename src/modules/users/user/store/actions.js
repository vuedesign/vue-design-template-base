/**
 * Created by wujian on 2018/3/18.
 */
// import Vue from 'vue';
import * as types from './types';
import * as api from '../api';
import { to } from '@/vued';

export const find = async({ commit }) => {
    commit(types.LOADING, true);
    const [err, res] = await to(api.find());
    if (err) {
        return;
    }
    console.log('res *** ', res);
    commit(types.DATA, res.list);
    commit(types.TOTAL, res.total);
    commit(types.LOADING, false);
};

export const findOne = async({ commit }, params) => {
    const [err, res] = await to(api.findById(params));
    if (err) {
        return;
    }
    commit(types.DATA, res.data);
};
