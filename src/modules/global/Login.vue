<style>

</style>

<template>
    <div class="login">
        <el-input v-model="formData.username" placeholder="请输入内容"></el-input>
        <el-input v-model="formData.password" placeholder="请输入内容"></el-input>
        <el-button @click="handleLoginClick">登录</el-button>
   </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        handleLoginClick() {
            this.$ajax.post('/node/login', this.formData).then(res => {
                if (res.code === 1) {
                    localStorage.setItem('token', res.data.token);
                    this.$router.push({
                        name: 'auth'
                    });
                }
            });
            console.log('formData', this.formData);
        }
    }
};
</script>
