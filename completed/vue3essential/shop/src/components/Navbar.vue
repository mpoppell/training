<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/checkout">Checkout</RouterLink>
      <cart />
    </nav>
  </div>
</template>

<script>
import Cart from './Cart.vue'

export default {
  components: {
    Cart
  }
}
</script>

<style></style>
