
<template>
    <div class="users-group-list">
        <vued-filter>
            <ul class="left">
                <li>
                    <el-button type="primary" size="small" @click="handleAddClick">新增</el-button>
                </li>
            </ul>
            <ul class="right">
                <li>
                    <el-input type="text" placeholder="用户组" v-model="address" size="small"></el-input>
                </li>
                <li>
                    <el-input type="text" v-model="name" size="small"></el-input>
                </li>
                <li>
                    <el-select style="width: 110px" v-model="type" placeholder="请选择" size="small">
                        <el-option label="超级管理员" value="supper"></el-option>
                        <el-option label="管理员" value="admin"></el-option>
                    </el-select>
                </li>
            </ul>
        </vued-filter>
        <el-table
            size="medium"
            v-loading="loading"
            :data="data"
            style="width: 100%;border-radius: 3px;">
            <el-table-column
                prop="name"
                label="用户组"
                width="180">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
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
                width="140">
                <template slot-scope="scope">
                    <el-button @click="handleViewClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="handleEditClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
            <div slot="empty" class="table-empty"></div>
        </el-table>
        <vued-pagination>
            <pagination
                @current-change="handleCurrentChange"
                :current-page="filters.page"
                :total="total"
            ></pagination>
        </vued-pagination>
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { filtersCommit } from '@/vued';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters('users/group', [
            'filters',
            'data',
            'total',
            'loading'
        ]),
        name: filtersCommit('users/group', 'name'),
        address: filtersCommit('users/group', 'address'),
        type: filtersCommit('users/group', 'type', 0)
    },
    watch: {
        filters: {
            handler(nv, ov) {
                this.$store.dispatch('users/group/find');
            },
            deep: true
        }
    },
    created() {
        this.$store.commit('users/group/FILTERS', {
            page: Number(this.$route.params.page)
        });
        this.$store.dispatch('users/group/find');
    },
    mounted() {
    },
    methods: {
        handleAddClick() {
            this.$router.push({ name: 'users-group-add' });
        },
        handleEditClick({ id }) {
            this.$router.push({ name: 'users-group-edit', params: { id } });
        },
        handleDelClick({ id }) {
            // this.$router.push({ name: 'users-group-update' });
        },
        handleViewClick({ id }) {
            this.$router.push({ name: 'users-group-view', params: { id } });
        },
        handleCurrentChange(page) {
            this.$store.commit('users/group/FILTERS', { page });
            this.$router.push({
                name: 'users-group',
                params: {
                    page
                }
            });
        }
    }
};
</script>

<style lang="scss">

</style>
