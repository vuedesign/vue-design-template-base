export const actionOfType = (store) => {
    return (type) => {
        let actions = (store.state.global && store.state.global.actions) || [];
        return actions.indexOf(type) > -1;
    };
};
