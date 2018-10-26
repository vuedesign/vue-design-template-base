<template>
  <div class="home">
      <h2>{{ msg }}</h2>
      <router-link to="/admin" >admin</router-link>
  </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            msg: 'welcome to Your Vued App'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        text-align: center;
    }
    h2{

        line-height: 300px;
    }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
