<!-- Try using heroku to set up live in Universal mode https://devcenter.heroku.com/articles/heroku-cli -->
<!-- For SSG, use netlify, heroke or github pages -->
<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: `Event listing`
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },
  components: {
    EventCard
  },
  computed: mapState({
    events: state => state.events.events
  })
}
</script>
