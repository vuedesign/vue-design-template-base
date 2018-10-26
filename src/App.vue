<template>
  <div id="vue-design-app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        // cookie
        this.$cookies.set('TEST_COOKIE_1', {
            username: 'wujian====',
            age: 18
        });
        console.log('cookie = ', this.$cookies.get('TEST_COOKIE_1'), this.$cookies.getJSON('TEST_COOKIE'));
    }
};
</script>

<style>
@import "assets/styles/reset.css";
#vue-design-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
