// import { reactive } from 'vue'

// export default reactive({ flashMessage: '', event: null })

import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: 'M Poppell',
    flashMessage: '',
    events: [],
    event: {},
    perPage: 4,
    totalEvents: 1,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_TOTAL_EVENTS(state, totalEvents) {
      state.totalEvents = totalEvents
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          // add event to vuex state
          commit('ADD_EVENT', event)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchEvents({ commit, state }, routeToPage) {
      EventService.getEvents(state.perPage, parseInt(routeToPage) || 1)
        .then((response) => {
          commit('SET_EVENTS', response.data)
          //   this.events = response.data
          //   this.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          {
            // eslint-disable-next-line
            ;('NetworkError')
          }
        })
    },
    fetchTotalEvents({ commit }) {
      EventService.getTotalEvents()
        .then((response) => {
          commit('SET_TOTAL_EVENTS', response.data.length)
        })
        .catch(() => {
          {
            // eslint-disable-next-line
            ;('NetworkError')
          }
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: '404Resource',
                params: { resource: 'event' },
              }
            } else {
              return { name: 'NetworkError' }
            }
          })
      }
    },
  },
  modules: {},
})
