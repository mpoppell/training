<template>
  <p>
    {{ event.time }} on {{ event.date }} @
    {{ event.location }}
  </p>
  <p>{{ event.description }}</p>
  <button @click="increaseCapacity()">Increase Capacity</button>
</template>
<script>
// reactive reference
import { ref } from 'vue'
export default {
  props: ['event'],
  //   https://www.vuemastery.com/courses/vue-3-essentials/setup-and-reactive-references
  setup() {
    const capacity = ref(3)

    function increaseCapacity() {
      // <--- Our new function
      // TBD
    }
    return { capacity, increaseCapacity }
  },
  //   inject: ['event'],
  //   computed: {
  //     event() {
  //       return this.$store.state.event
  //     },
  //   },
}
// console.dir(this)
</script>
