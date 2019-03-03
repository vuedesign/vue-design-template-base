<template>
    <vued-t-shape>
        <vued-header slot="header"></vued-header>
        <vued-aside slot="aside" v-if="$store.state.global.asideMenu"></vued-aside>
        <vued-body slot="body">
            <router-view/>
        </vued-body>
    </vued-t-shape>
</template>

<script>
import { mapGetters } from 'vuex';
import VuedTShape from '@/modules/global/components/layouts/VuedTShape';
import VuedAside from '@/modules/global/components/servers/VuedAside';
import VuedHeader from '@/modules/global/components/servers/VuedHeader';
import VuedBody from '@/modules/global/components/layouts/VuedBody';

export default {
    name: 'vued-admin',
    components: {
        VuedTShape,
        VuedAside,
        VuedHeader,
        VuedBody
    },
    computed: {
        ...mapGetters('global', [
            'asideMenu'
        ])
    },
    watch: {
        asideMenu: {
            handler(nv, ov) {
                if (nv && nv.length > 0) {
                    const actions = this.getActions(nv, this.$route.name);
                    this.$store.commit('global/ACTIONS', actions);
                }
            },
            deep: true
        },
        '$route'() {
            const actions = this.getActions(this.asideMenu, this.$route.name);
            this.$store.commit('global/ACTIONS', actions);
        }
    },
    created() {
        this.$store.dispatch('global/findMenu');
        // this.$store.dispatch('global/permission');
    },
    methods: {
        getActions(data, path) {
            let actions = [];
            setActions(data, path);
            function setActions(data, path) {
                data && data.length > 0 && data.forEach(item => {
                    if (item.name && item.name === path) {
                        if (item.actions && item.actions.length > 0) {
                            actions = item.actions;
                        }
                    } else {
                        setActions(item.children, path);
                    }
                });
            }
            return actions;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
