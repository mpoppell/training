<template>
  <div class="dropdown-clip">
    <transition name="dropdown">
      <div class="list-group" aria-labelledby="cartDropdown">
        <div
          v-for="(item, index) in productCart.cart"
          :key="index"
          class="list-group-item d-flex justify-content-between"
        >
          <div>{{ item.qty }} x &nbsp;</div>
          <div>{{ item.product.name }} &nbsp;</div>
          <div class="ml-3 font-weight-bold">
            <curr :amt="item.product.price * Number(item.qty)"></curr>
          </div>
          <button
            class="btn btn-outline-success"
            @click="productCart.subtractItem(index)"
          >
            -
          </button>
        </div>
        <RouterLink to="/checkout">Checkout</RouterLink>
      </div>
    </transition>
  </div>
</template>

<script>
import Curr from '@/components/Curr.vue'

import { useMainStore } from '../stores/cart'

export default {
  components: {
    Curr
  },
  setup() {
    const productCart = useMainStore()
    return {
      productCart
    }
  }
}
</script>

<style>
.dropdown-clip {
  overflow: hidden;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease-in-out;
  transform: auto;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}
</style>
