import axios from 'axios'

const apiClient = axios.create({
  //   baseURL: 'https://my-json-server.typicode.com/mpoppell/training',
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getTotalEvents() {
    return apiClient.get('/events')
  },
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    console.dir(event)
    return apiClient.post('/events', event)
  },
}
