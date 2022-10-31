<template>
  <img alt="Vue logo" src="@/assets/logo.png" />

  <div v-if="event.title">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
<script>
// export default {
//   inject: ['store'],
// }
// console.dir('this')
// console.dir(this)
// console.log(this.$store)
export default {
  computed: {
    event() {
      return this.$store.state.event
    },
  },
}
</script>
