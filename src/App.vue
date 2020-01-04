<template>
    <loading id="app">
        <router-view />
    </loading>
</template>

<script>
import { waiting } from '@/vendors/utils';

export default {
    name: 'App',
    data() {
        return {};
    },
    async created() {
        await this.$store.dispatch('admin/findMenu');
        await waiting(200);
        await this.$store.commit('loading/UPDATE_LOADING_STATE', true);
    }
};
</script>

<style lang="scss">
</style>
