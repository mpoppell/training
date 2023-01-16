<template>
  <div
    v-if="productCart.cart.length > 0 ? true : false"
    class="navbar navbar-light sticky-top mr-3"
  >
    test
    <div
      class="w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
    >
      <div
        class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
      >
        <div class="mb-2">
          <span class="font-weight-bold bg-white">
            <curr :amt="productCart.cartTotal"></curr
          ></span>
          <button
            id="cartDropdown"
            class="btn btn-sm btn-success ml-3"
            aria-haspopup="true"
            aria-expanded="false"
            @click="displayCart = !displayCart"
          >
            <fa icon="shopping-cart">Shopping Cart</fa>
            {{ productCart.cart.length }}
          </button>
        </div>
        <cart-dropdown v-if="displayCart" />
      </div>
    </div>
  </div>
</template>

<script>
import Curr from './Curr.vue'
import CartDropdown from './CartDropdown.vue'

// import { defineComponent, ref } from 'vue'
import { useMainStore } from '../stores/cart'

export default {
  components: {
    Curr,
    CartDropdown
  },
  setup() {
    const productCart = useMainStore()

    // extract specific store properties
    // const { counter, doubleCounter } = storeToRefs(main)

    return {
      // gives access to the whole store in the template
      productCart
      // gives access only to specific state or getter
      //   counter,
      //   doubleCounter
    }
  },
  data() {
    return {
      displayCart: false
    }
  }
  //   computed: {
  //     showCartList() {
  //       return productCart.cart.length > 0 ? true : false
  //     }
  //   },
}
</script>

<style></style>
