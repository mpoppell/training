<script>
// import TheWelcome from '@/components/TheWelcome.vue'
import RangeSelector from '@/components/RangeSelector.vue'
import CustomAlert from '@/components/CustomAlert.vue'
import ProductList from '@/components/ProductList.vue'

import { useMainStore } from '../stores/cart'

export default {
  components: {
    // Product,
    ProductList,
    CustomAlert,
    RangeSelector
  },
  setup() {
    const productCart = useMainStore()
    return {
      productCart
    }
  },
  data() {
    return {
      max: 50,
      products: []
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(item => item.price < Number(this.max))
    }
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  }
}
</script>

<template>
  <main>
    <section class="container">
      <range-selector v-model="max" :products="filteredProducts" />
      <custom-alert
        v-if="productCart.cartTotal > 100"
        type="danger"
        close="true"
      >
      </custom-alert>
      <product-list :products="filteredProducts"></product-list>
    </section>
  </main>
</template>
