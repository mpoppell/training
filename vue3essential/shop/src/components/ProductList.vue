<template>
  <transition-group name="products" appear>
    <div
      v-for="product in products"
      id="item-list"
      :key="product.id"
      class="row align-items-center"
    >
      <product :item="product" />
    </div>
  </transition-group>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  components: {
    Product
  },
  props: ['products']
}
</script>

<style></style>
