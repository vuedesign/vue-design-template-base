<template>
    <div class="vued-body">
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello vue'
        };
    }
};
</script>

<style>
    .vued-body{
        height: auto;
        padding: 20px 16px;
        padding-top: 0;
    }
</style>
