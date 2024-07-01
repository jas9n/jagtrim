<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GlobalNav from './components/GlobalNav.vue';
import GlobalFooter from './components/GlobalFooter.vue';
</script>

<template>
  <header>
    <GlobalNav />
  </header>
  <RouterView />
  <footer>
    <GlobalFooter />
  </footer>
</template>

<style>
</style>
