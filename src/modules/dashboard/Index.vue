<template>
    <div class="dashboard-list">
        仪表板
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            createBabel: '新增用户组'
        };
    },
    computed: {
        ...mapGetters('users/user', [
            'filters',
            'data',
            'total'
        ])
    },
    created() {
        this.$store.dispatch('users/user/find');
    },
    methods: {
        handleClick() {
            this.$router.push({ name: 'operate-activity-update' });
        }
    }
};
</script>

<style lang="scss">

</style>
