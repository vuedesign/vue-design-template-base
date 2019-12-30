<style>

</style>

<template>
    <div class="users">
        {{ moduleNumber }}
        <img :src="logo">
        dashboard
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import logo from '@assets/logo.png';

export default {
    name: 'dashboard',
    data() {
        return {
            logo
        };
    },
    computed: {
        ...mapGetters('dashboard', [
            'moduleNumber'
        ])
    },
    created() {
        this.$store.commit('dashboard/MODULE_NUMBER', 100);
    }
};
</script>
