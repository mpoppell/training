<template>
  <div class="events">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <div class="col">
        <router-link
          id="page-prev"
          :to="{ name: EventList, query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
        >
          &#60; Previous
        </router-link>
      </div>

      <div class="col page-numbers">
        <router-link
          class="page-number"
          v-for="page in totalPages"
          :key="page"
          :to="{ name: EventList, query: { page: page } }"
        >
          {{ page }}
        </router-link>
      </div>
      <div class="col">
        <router-link
          id="page-next"
          :to="{ name: EventList, query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
        >
          Next &#62;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

// import router from '@/router'
// import EventService from '@/services/EventService.js'
// import { watchEffect } from 'vue' // <--- Have to import it

export default {
  name: 'EventList',
  props: { page: {} },
  components: {
    EventCard,
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    next((comp) => {
      comp.$store.dispatch('fetchTotalEvents')
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
  beforeRouteUpdate(routeTo) {
    this.$store.dispatch('fetchTotalEvents')
    return this.$store.dispatch('fetchEvents', routeTo.query.page)

    // return EventService.getEvents(10, parseInt(routeTo.query.page) || 1)
    //   .then((response) => {
    //     this.events = response.data
    //     this.totalEvents = response.headers['x-total-count']
    //   })
    //   .catch(() => {
    //     return { name: 'NetworkError' }
    //   })
  },
  computed: {
    totalPages() {
      //   console.dir(`this.$store.state.totalPages`)
      //   console.dir(this.$store.state.totalPages)
      return parseInt(
        Math.ceil(this.$store.state.totalEvents / this.$store.state.perPage)
      )
    },
    hasNextPage() {
      return this.page < this.totalPages
    },
    events() {
      //   console.dir(this.$store.state.events)
      //   console.dir(this)
      return this.$store.state.events
    },
  },
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
  justify-content: space-between;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.page-numbers {
  text-align: center;
}
.col {
  width: 100%;
}
.page-number {
  padding: 0 0.5rem;
}

#page-prev {
  text-align: left;
  float: left;
}

#page-next {
  text-align: right;
  float: right;
}
</style>
