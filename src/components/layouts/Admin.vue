<template>
    <vued-t-shape>
        <vued-header slot="header"></vued-header>
        <vued-aside slot="aside"></vued-aside>
        <vued-body slot="body">
            <router-view/>
        </vued-body>
    </vued-t-shape>
</template>

<script>
import VuedTShape from '@/components/layouts/VuedTShape';
import VuedAside from '@/components/servers/VuedAside';
import VuedHeader from '@/components/servers/VuedHeader';
import VuedBody from '@/components/servers/VuedBody';
export default {
    name: 'admin',
    components: {
        VuedTShape,
        VuedAside,
        VuedHeader,
        VuedBody
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
