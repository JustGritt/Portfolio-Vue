<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/partials/Header.vue'
import Landing from './components/Landing.vue'
</script>

<template>
  <Header />
  <Landing />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
