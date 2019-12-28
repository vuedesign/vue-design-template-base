<template>
    <vued-t-shape>
        <vued-header slot="header"></vued-header>
        <vued-aside slot="aside" v-if="asideMenu"></vued-aside>
        <vued-body slot="body">
            <router-view/>
        </vued-body>
    </vued-t-shape>
</template>

<script>
import { mapGetters } from 'vuex';
import VuedTShape from '../components/VuedTShape';
import VuedAside from '../components/VuedAside';
import VuedHeader from '../components/VuedHeader';
import VuedBody from '../components/VuedBody';

export default {
    name: 'vued-admin',
    components: {
        VuedTShape,
        VuedAside,
        VuedHeader,
        VuedBody
    },
    computed: {
        ...mapGetters('admin', [
            'asideMenu'
        ])
    },
    watch: {
        asideMenu: {
            handler(nv, ov) {
                if (nv && nv.length > 0) {
                    const actions = this.getActions(nv, this.$route.name);
                    this.$store.commit('admin/ACTIONS', actions);
                }
            },
            deep: true
        },
        '$route'() {
            const actions = this.getActions(this.asideMenu, this.$route.name);
            this.$store.commit('admin/ACTIONS', actions);
        }
    },
    created() {
        this.$store.dispatch('admin/findMenu');
        // this.$store.dispatch('global/permission');
    },
    methods: {
        getActions(data, path) {
            let actions = [];
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

            setActions(data, path);
            return actions;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
