<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GlobalNav from './components/GlobalNav.vue';
import GlobalFooter from './components/GlobalFooter.vue';
</script>

<template>
  <header>
    <GlobalNav />
  </header>
  <body>
    <RouterView :key="$route.fullPath"/>
  </body>
  <footer>
    <GlobalFooter />
  </footer>
</template>

<style>
html {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
