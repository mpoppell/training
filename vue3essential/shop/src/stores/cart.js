import { computed } from 'vue'
import { defineStore } from 'pinia'

// export const productCart = defineStore({
//   id: 'productCart',
//   state: () => ({
//     cart: [],
//     displayCart: false,
//     cartTotal: computed(() =>
//       this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
//     )
//   }),
//   actions: {
//     addToCart(item) {
//       this.cart.push({ item, id: item.id })
//     }
//   }
// })

export const productCart = defineStore('productCart', () => {
  const cart = []
  const displayCart = false
  const cartTotal = computed(() =>
    this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
  )
  return { cart, displayCart, cartTotal }
})

export const useMainStore = defineStore('productCart', {
  // a function that returns a fresh state
  state: () => ({
    cart: []
    // displayCart: 'false'
    // cartTotal: computed(() =>
    //   this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
    // )
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    // doubleCounter: state => state.counter * 2
    cartTotal: state =>
      state.cart.reduce((inc, item) => Number(item.price) + inc, 0)
    // use getters in other getters
    // doubleCounterPlusOne(): number {
    //   return this.doubleCounter + 1
    // }
  },
  // optional actions
  actions: {
    // reset() {
    //   // `this` is the store instance
    //   this.counter = 0
    // }
    addToCart(item) {
      this.cart.push(item)
    }
  }
})
