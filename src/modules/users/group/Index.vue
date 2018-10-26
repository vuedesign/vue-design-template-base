
<template>
    <div class="users-group-list">
        <el-table
            :data="data"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <router-view />
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
        ...mapGetters('users/group', [
            'filters',
            'data',
            'total'
        ])
    },
    created() {
        this.$store.dispatch('users/group/find');
    },
    methods: {
        handleClick() {
            this.$router.push({ name: 'users-group-update' });
        }
    }
};
</script>

<style lang="scss">
</style>
