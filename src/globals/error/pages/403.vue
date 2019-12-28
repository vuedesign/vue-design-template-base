
<template>
    <div class="page page-error page-403">{{ code }}</div>
</template>

<script>
export default {
    data() {
        return {
            code: '403'
        };
    }
};
</script>

<style>
    .page-error{
        font-size: 20px;
        color: red;
        line-height: 200px;
        text-align: center;
    }
</style>
