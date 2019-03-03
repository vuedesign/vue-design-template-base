<style lang="scss">
</style>

<template>
    <div class="pagination">
        <el-pagination
            ref="pagination"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            background
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: {
        currentPage: {
            type: Number
        },
        total: {
            type: Number
        }
    },
    mounted() {
        this.$refs.pagination.internalCurrentPage = this.currentPage;
    },
    watch: {
        currentPage(page) {
            this.$refs.pagination.internalCurrentPage = page;
        }
    },
    methods: {
        handleCurrentChange(page) {
            this.$emit('current-change', page);
        }
    }
};
</script>
