<style>
.dashboard{
    text-align: center;
}
</style>

<template>
    <div class="dashboard">
        <br />
        <br />
        <img src="@assets/logo.png">
        <h2>dashboard</h2>
        <br />
        <br />
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
