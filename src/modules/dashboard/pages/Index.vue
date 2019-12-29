<style>

</style>

<template>
    <div class="users">
        {{ moduleNumber }}
        <img src="@assets/logo.png">
        dashboard
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'dashboard',
    data() {
        return {};
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
