<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
<script>
export default {
  props: { event: {} },
  //   inject: ['GStore'],
  methods: {
    register() {
      // If registration API call is successful
      this.$store.state.flashMessage =
        'You are successfully registered for ' + this.$store.state.event.title

      setTimeout(() => {
        this.$store.state.flashMessage = ''
      }, 3000)
      // Push back to the event details
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.$store.state.event.id },
      })
    },
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    next((comp) => {
      comp.$store.dispatch('fetchEvents', routeTo.query.page)
    })
    // .then((response) => {
    //     next((comp) => {
    //       comp.events = response.data
    //       comp.totalEvents = response.headers['x-total-count']
    //     })
    //   })
    //   .catch(() => {
    //     next({ name: 'NetworkError' })
    //   })
  },
}
</script>
