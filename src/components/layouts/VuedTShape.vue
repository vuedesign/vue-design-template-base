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

<style scoped>
    .vued-t-shape{
        height: 100%;
        width: 100%;
    }
    .vued-t-shape-header{
        height: 48px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    .vued-t-shape-body{
        position: absolute;
        top: 48px;
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
    }
    .vued-t-shape-mainer{
        position: relative;
        height: 100%;
        overflow-x: hidden;
    }
</style>
