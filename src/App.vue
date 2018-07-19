<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/nosotros/">Nosotros</router-link></li>
      <li><router-link to="/servicios/">Servicios</router-link></li>
      <li><router-link to="/portafolio/">Potafolio</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
