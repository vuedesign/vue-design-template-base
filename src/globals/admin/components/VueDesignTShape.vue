<template>
    <div class="vue-design-t-shape">
        <header class="vue-design-t-shape-header">
            <slot name="header"></slot>
        </header>
        <section class="vue-design-t-shape-body">
            <aside v-if="$slots.aside" class="vue-design-t-shape-aside">
                <slot name="aside"></slot>
            </aside>
            <section class="vue-design-t-shape-mainer">
                <slot name="breadcrumb" v-if="$slots.breadcrumb"></slot>
                <slot name="body"></slot>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'vuvue-designed-t-shape',
    created() {
        document.getElementsByTagName('html')[0].setAttribute('class', 'admin');
    }
};
</script>

<style lang="scss" scoped>
    @import "~@assets/styles/variables.scss";
    .vue-design-t-shape{
        height: 100%;
        width: 100%;
    }
    .vue-design-t-shape-header{
        height: $header-bar-size;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    .vue-design-t-shape-body{
        position: absolute;
        top: $header-bar-size;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    .vue-design-t-shape-aside{
        width: auto;
        height: 100%;
        z-index: 1;
        float: left;
        position: relative;
        // background-color: #f5f5f5;
        background-color: #eef5f9;
    }
    .vue-design-t-shape-mainer{
        position: relative;
        height: 100%;
        overflow-x: hidden;
        background-color: #fff;
    }
</style>
