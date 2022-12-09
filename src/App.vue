<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/partials/Header.vue'
import Landing from './components/Landing.vue'
import Projects from './components/Projects.vue'
import Timeline from './components/Timeline.vue'
import CollectionItem from './components/partials/CollectionItem.vue'
</script>

<template>
  <Header />
  <Landing />
  <Projects></Projects>
  <Timeline></Timeline>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

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
