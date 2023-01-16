<template>
  <div class="col-2 m-auto">
    <button class="btn btn-success" @click="productCart.addItem(item)">
      +
    </button>
  </div>
  <div class="col-sm-4">
    <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
  </div>
  <div class="col">
    <h3 class="text-primary">{{ item.name }}</h3>
    <p class="mb-0">{{ item.description }}</p>
    <div class="h5 float-right">
      <span class="label"></span>
      <curr :amt="item.price"></curr>
    </div>
  </div>
</template>

<script>
import Curr from '@/components/Curr.vue'
import { useMainStore } from '../stores/cart'
// import { storeToRefs } from 'pinia'

export default {
  components: { Curr },
  props: ['item'],
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
  }
}
</script>

<style>
.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease-in-out;
}

.products-enter-from {
  opacity: 0;
  transform: translateX(300px);
}

.products-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>
