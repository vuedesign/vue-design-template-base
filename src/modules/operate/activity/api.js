<<<<<<< HEAD
import Vue from 'vue';

const API_URL = '/api/v1/operate/activity';

export const find = params => Vue.ajax.get(API_URL, { params });

export const findOne = id => Vue.ajax.get(`${API_URL}/${id}`);

export const update = (id, data = {}) => Vue.ajax.put(`${API_URL}/${id}`, data);

export const create = (data = {}) => Vue.ajax.post(API_URL, data);

export const destroy = id => Vue.ajax.delete(`${API_URL}/${id}`);

export const updateOne = (id, name) => Vue.ajax.patch(`${API_URL}/${id}`, name);
=======
import { http } from 'vue-design-core';

const API_URL = '/api/v1/operate/activity';

export function find(params = {}) {
    return http({
        method: 'get',
        url: API_URL,
        params
    });
}

export function findOne(id, params = {}) {
    return http({
        method: 'get',
        url: `${API_URL}/${id}`,
        params
    });
}

export function update(id, data = {}) {
    return http({
        method: 'put',
        url: `${API_URL}/${id}`,
        data
    });
}

export function create(id, data = {}) {
    return http({
        method: 'post',
        url: API_URL,
        data
    });
}

export function destroy(id, data = {}) {
    return http({
        method: 'delete',
        url: `${API_URL}/${id}`,
        data
    });
}

export function updateOne(id, data = {}) {
    return http({
        method: 'patch',
        url: `${API_URL}/${id}`,
        data
    });
}
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
