<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/component">Component Managed</router-link> |
      <router-link to="/vuex">Vuex Managed</router-link> |
      <router-link to="/promise">Promise Managed</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  max-width: 60%;
}
body {
    margin-bottom:50px;
}
footer {
    position: fixed;
    height: 50px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
}
</style>
