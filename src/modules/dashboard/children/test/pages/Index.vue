<style>
.test{
    text-align: center;
}
</style>

<template>
    <div class="test">
        <br />
        <br />
        <img src="@assets/logo.png">
        <h2>VueDesign</h2>
        <br />
        <br />
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import logo from '@assets/logo.png';

export default {
    name: 'test',
    data() {
        return {
            logo
        };
    },
    computed: {
        ...mapGetters('dashboard/test', [
            'moduleNumber'
        ])
    },
    created() {
        this.$store.commit('dashboard/MODULE_NUMBER', 100);
    }
};
</script>
