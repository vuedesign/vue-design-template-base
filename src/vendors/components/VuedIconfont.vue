<template>
    <i :class="classNames"></i>
</template>

<script>
export default {
    name: 'vued-iconfont',
    props: {
        type: {
            type: String,
            require: true
        }
    },
    computed: {
        classNames() {
            return `icon iconfont icon-${this.type}`;
        }
    }
};
</script>

<style lang="scss">
</style>
