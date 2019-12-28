<<<<<<< HEAD
import Vue from 'vue';

const API_URL = '/api/v1/users/user';

export const find = params => Vue.ajax.get(API_URL, { params });

export const findById = (id) => Vue.ajax.get(`${API_URL}/${id}`);

export const update = (data = {}, id) => Vue.ajax.put(`${API_URL}/${id}`, data);

export const updateState = (name, id) => Vue.ajax.patch(`${API_URL}/${id}`, name);

export const create = (data = {}) => Vue.ajax.post(API_URL, data);

export const destroy = (id) => Vue.ajax.delete(`${API_URL}/${id}`);
=======
import { http } from 'vue-design-core';

const API_URL = '/api/v1/users/user';

export const find = params => http.get(API_URL, { params });

export const findById = id => http.get(`${API_URL}/${id}`);

export const update = (data = {}, id) => http.put(`${API_URL}/${id}`, data);

export const updateState = (name, id) => http.patch(`${API_URL}/${id}`, name);

export const create = (data = {}) => http.post(API_URL, data);

export const destroy = id => http.delete(`${API_URL}/${id}`);
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
