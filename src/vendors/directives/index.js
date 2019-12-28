// import { store } from '@vd/vue-design-core';

export default {
    action: (el, binding) => {
        // console.log('store', store.state.global.actions);
        const $el = el;
        if (binding.value.indexOf(binding.arg) > -1) {
            $el.style.display = 'inline-block';
        } else {
            $el.style.display = 'none';
        }
    },
    focus: {
        // 指令的定义
        inserted: (el) => {
            el.focus();
        }
    }
};
