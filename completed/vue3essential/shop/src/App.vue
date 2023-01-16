<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <header>
    <navbar />
  </header>

  <RouterView />
</template>

<style lang="scss">
@import '/node_modules/bootstrap/scss/bootstrap';
a {
  color: $purple !important;
}
</style>
