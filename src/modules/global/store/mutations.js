import {
    BREADCRUMB,
    ASIDE_MENU,
    ASIDE_ACTIVE,
    PERMISSION,
    ACTIONS
} from './types';

export default {
    [BREADCRUMB](state, to) {
        const { matched } = to;
        let breadcrumbs = [];
        matched.forEach((item, index) => {
            breadcrumbs.push({
                name: item.name,
                label: item.meta.label
            });
        });
        state.breadcrumbs = breadcrumbs;
    },
    [ASIDE_MENU](state, asideMenu) {
        state.asideMenu = asideMenu;
    },
    [PERMISSION](state, permission) {
        state.permission = permission;
    },
    [ACTIONS](state, actions) {
        state.actions = actions;
    },
    [ASIDE_ACTIVE](state, asideActive) {
        state.asideActive = asideActive;
    }
};
