<template>
    <div class="vued-t-shape">
        <header class="vued-t-shape-header">
            <slot name="header"></slot>
        </header>
        <section class="vued-t-shape-body">
            <aside v-if="$slots.aside" class="vued-t-shape-aside">
                <slot name="aside"></slot>
            </aside>
            <section class="vued-t-shape-mainer">
                <slot name="breadcrumb" v-if="$slots.breadcrumb"></slot>
                <slot name="body"></slot>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'vued-t-shape',
    created() {
        document.getElementsByTagName('html')[0].setAttribute('class', 'admin');
    }
};
</script>

<style lang="scss" scoped>
    @import "~styles/variables.scss";
    .vued-t-shape{
        height: 100%;
        width: 100%;
    }
    .vued-t-shape-header{
        height: $header-bar-size;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    .vued-t-shape-body{
        position: absolute;
        top: $header-bar-size;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    .vued-t-shape-aside{
        width: auto;
        height: 100%;
        z-index: 1;
        float: left;
        position: relative;
        // background-color: #f5f5f5;
        background-color: #eef5f9;
    }
    .vued-t-shape-mainer{
        position: relative;
        height: 100%;
        overflow-x: hidden;
        background-color: #fff;
    }
</style>
