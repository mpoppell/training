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

  return { cart, displayCart }
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
    cartTotal() {
      let sum = 0
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty
      }
      return sum
    }

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
    },
    addItem(product) {
      let whichProduct
      let existing = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })
      if (existing.length) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    subtractItem(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--
      } else {
        this.cart.splice(id, 1)
      }
    }
  }
})
