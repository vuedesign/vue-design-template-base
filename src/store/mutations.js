import {
    BREADCRUMB
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
    }
};
