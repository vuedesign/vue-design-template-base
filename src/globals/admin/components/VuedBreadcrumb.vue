<template>
    <div class="vued-breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                v-for="(item, index) in breadcrumbs"
                :key="index"
            >{{ item.label }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'vued-breadcrumb',
    computed: mapGetters('admin', ['breadcrumbs'])
};
</script>

<style lang="scss">
    .vued-breadcrumb{
        width: 100%;
        padding: 14px 16px;
        .el-breadcrumb__inner{
            color: #eee;
        }
        .el-breadcrumb__item:last-child{
            .el-breadcrumb__inner{
                color: #fff;
            }
        }
    }
</style>
