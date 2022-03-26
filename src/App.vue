<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/partials/Header.vue'
import Landing from './components/Landing.vue'
import Projects from './components/Projects.vue'
import Timeline from './components/Timeline.vue'
</script>

<template>
  <Header />
  <Landing />
  <Projects />
  <Timeline />
</template>

<style>

html, body { 
  box-sizing: border-box; 
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
