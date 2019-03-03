import Vue from 'vue';

const API_URL = '/api/v1/operate/activity';

export const find = params => Vue.ajax.get(API_URL, { params });

export const findOne = id => Vue.ajax.get(`${API_URL}/${id}`);

export const update = (id, data = {}) => Vue.ajax.put(`${API_URL}/${id}`, data);

export const create = (data = {}) => Vue.ajax.post(API_URL, data);

export const destroy = id => Vue.ajax.delete(`${API_URL}/${id}`);

export const updateOne = (id, name) => Vue.ajax.patch(`${API_URL}/${id}`, name);
