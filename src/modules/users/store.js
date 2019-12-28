/**
 * Created by wujian on 2018/3/18.
 */

import user from './user/store';
import group from './group/store';

export default {
    namespaced: true,
    modules: {
        user,
        group
    }
};
