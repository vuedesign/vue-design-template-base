<<<<<<< HEAD
import VueDesign from '@/vued';
// 导入组入口
import App from '@/App';

// 先加载UI组件库
VueDesign.use('@/vendor/UIComponent');

VueDesign.mixin('@/vendor/mixin');
VueDesign.plugins('@/vendor/plugins');
VueDesign.filters('@/vendor/filters');
VueDesign.directives('@/vendor/directives');
VueDesign.components();

VueDesign.extend({
    App
}).$mount('#vue-design-app');
=======
import VueDesign from 'vue-design-core';

/* eslint-disable no-new */
new VueDesign().$mount('#app');
>>>>>>> 2bf4d988353d0982800f43f5d540cc912e298988
