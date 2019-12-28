<template>
    <div class="vue-design-pagination">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vue-design-pagination'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .vue-design-pagination{
        text-align: right;
        padding-top: 20px;
        margin: 0 -10px;
        padding-left: 10px;
    }
</style>
