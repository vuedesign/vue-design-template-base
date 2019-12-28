<template>
    <div class="vue-design-breadcrumb">
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
    name: 'vue-design-breadcrumb',
    computed: mapGetters('admin', ['breadcrumbs'])
};
</script>

<style lang="scss">
    .vue-design-breadcrumb{
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
