<style>

</style>

<template>
    <div class="auth">
        auth
        <ul>
            <li>{{uuid}}</li>
            <li>{{username}}</li>
        </ul>
        <router-view />
   </div>
</template>

<script>
export default {
    name: 'auth',
    data() {
        return {
            uuid: '',
            username: ''
        };
    },
    created() {
        this.$ajax.get('/node/user-info').then(res => {
            console.log(res);
        });
    },
    methods: {
    }
};
</script>
