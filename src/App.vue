<template>
    <div id="app">
        <loading>
            <router-view />
        </loading>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {};
    },
    async created() {
        await this.$store.dispatch('admin/findMenu');
        await this.$store.commit('loading/UPDATE_LOADING_STATE', true);
    }
};
</script>

<style lang="scss">
</style>
