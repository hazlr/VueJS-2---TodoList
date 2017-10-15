<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 :title="tooltip" :class="css">{{ employee }}</h2>
    <button @click="changeCss()">Change color</button>
    <button @click="changeText">Change Text</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      employee: 'John',
      tooltip: 'Hey I\'m a tooltip',
      css: 'yellowgreen',
    };
  },
  methods: {
    changeCss() {
      this.css = 'palevioletred';
    },
    changeText() {
      this.$el.innerHTML = 'Baisey !';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
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

.yellowgreen {
  color: yellowgreen;
}

.palevioletred {
  color: palevioletred;
}

button {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  padding: 1rem 1.5rem;
  width: 200px;
  border-radius: 5rem;
  background-color: #42b983;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: 0;
  & + button {
  margin-left: 1.5rem;
  }
}
</style>
