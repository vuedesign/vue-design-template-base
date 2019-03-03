import { store } from '@/vued';
export default {
    action: (el, binding) => {
        console.log('store', store.state.global.actions);
        if (binding.value.indexOf(binding.arg) > -1) {
            el.style.display = 'inline-block';
        } else {
            el.style.display = 'none';
        }
    },
    focus: {
        // 指令的定义
        inserted: (el) => {
            el.focus();
        }
    }
};
