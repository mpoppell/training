<template>
  <div class="container">
    <h1>Checkout</h1>

    <table class="table table-hover">
      <caption class="text-right h3">
        <b>Total:</b>
        <curr :amt="productCart.cartTotal"></curr>
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productCart.cart" :key="index">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                class="btn btn-success"
                @click="productCart.addItem(item.product)"
              >
                +
              </button>
              <button
                class="btn btn-outline-success"
                @click="productCart.subtractItem(index)"
              >
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <!-- <td class="text-right">{{ item.product.price }}</td> -->
          <td class="text-right"><curr :amt="item.product.price"></curr></td>
          <td class="text-right">
            <curr :amt="item.product.price * Number(item.qty)"></curr>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-success" to="/"
      >Keep Shopping</router-link
    >
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

<style></style>
