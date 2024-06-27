<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GlobalNav from './components/GlobalNav.vue';
</script>

<template>
  <header>
    <GlobalNav />
  </header>
  <RouterView />
</template>

<style>
</style>
