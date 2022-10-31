<template>
  <p>
    {{ event.time }} on {{ event.date }} @
    {{ event.location }}
  </p>
  <p>{{ event.description }}</p>
</template>
<script>
export default {
  props: ['event'],
  //   inject: ['event'],
  //   computed: {
  //     event() {
  //       return this.$store.state.event
  //     },
  //   },
}
// console.dir(this)
</script>
