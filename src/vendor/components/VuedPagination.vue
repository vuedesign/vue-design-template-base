<template>
    <div class="vued-pagination">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vued-pagination'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .vued-pagination{
        text-align: right;
        padding-top: 20px;
        margin: 0 -10px;
        padding-left: 10px;
    }
</style>
