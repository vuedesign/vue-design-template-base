<template>
    <div>
        <slot v-if="isFinish" />
        <div class="loading-inner"
            v-loading="!isFinish"
            element-loading-text="拼命加载中..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(240, 240, 240, 0.5)"
            v-else
        ></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'loading',
    computed: {
        ...mapGetters('loading', [
            'isFinish'
        ])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading-inner {
        color: red;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
