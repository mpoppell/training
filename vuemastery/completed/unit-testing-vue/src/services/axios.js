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
  

export function getMessage() {
  return axios.get('http://localhost:3000/message').then(response => {
    return response.data
  })
}