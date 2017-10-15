<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        msg: 'Here is the about component',
      };
    },
    methods: {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
