import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const products = ref({
  "Elektronika": [
    { id: 1, name: "Słuchawki BT", description: "Bezprzewodowe słuchawki z ANC", price: 199.99, stock: 5, discount: 0 },
    { id: 2, name: "Klawiatura mechaniczna", description: "Przełączniki tacticle, Podświetlenie RGB", price: 279, stock: 6, discount: .2 },
    { id: 3, name: "Lampka biurowa", description: "Regulowalna barwa i jasność", price: 89.99, stock: 0, discount: 0 },
    { id: 4, name: "Klawiatura mechaniczna", description: "Przełączniki tacticle, Podświetlenie RGB", price: 279, stock: 6, discount: .2 },
    { id: 5, name: "Lampka biurowa", description: "Regulowalna barwa i jasność", price: 89.99, stock: 0, discount: 0 },
    { id: 6, name: "Klawiatura mechaniczna", description: "Przełączniki tacticle, Podświetlenie RGB", price: 279, stock: 6, discount: .2 },
    { id: 7, name: "Lampka biurowa", description: "Regulowalna barwa i jasność", price: 89.99, stock: 0, discount: 0 },
    { id: 8, name: "Klawiatura mechaniczna", description: "Przełączniki tacticle, Podświetlenie RGB", price: 279, stock: 6, discount: .2 },
    { id: 9, name: "Lampka biurowa", description: "Regulowalna barwa i jasność", price: 89.99, stock: 0, discount: 0 },
  ],
  "Dom": [
    { id: 10, name: "Dach", description: "dach do domu", price: 1.99, stock: 5, discount: 0 },
  ],
  "Książki": [],
  "Sport": [],
  "Promocje": [],
})

export const useShopStore = defineStore('shop', () => {
  const selectedCategory = ref('Elektronika');
  const searchQuery = ref('')
  const cart = ref([])

  const addToCart = (productId) => {
    let incremented = false;
    let productData;

    Object.keys(products.value).forEach(key => {
      products.value[key].forEach(searchProduct => {
        if (searchProduct.id == productId) {
          productData = searchProduct
        }
      })
    })

    console.log(productData)

    cart.value.forEach(element => {
      if (element.id == productId) {
        if (element.amount < productData.stock) {
          element.amount++
        }
        incremented = true
      }
    })
    if (!incremented) {
      cart.value.push({id: productId, amount: 1})
    }
  }

  const removeFromCart = (productId, all) => {
    cart.value.forEach(element => {
      if (element.id == productId) {
        if (!all & element.amount >= 1) {
          element.amount--
        } else {
          element.amount = 0
        }
      }
    })
  }

  const clearCart = () => {
    cart.value = []
  }

  const cartLength = computed(() => {
    let sum = 0;
    cart.value.forEach(element => {
      sum += element.amount
    })
    return sum
  })

  const cartTotalCost = computed(() => {
    let sum = 0
    Object.keys(products.value).forEach(key => {
      products.value[key].forEach(product => {
        cart.value.forEach(productInCart => {
          if (productInCart.id == product.id) {
            sum += ((product.price * 100) * productInCart.amount) / 100
          }
        })
      })
    })
    return sum
  })

  return {selectedCategory, cart, searchQuery, addToCart, removeFromCart, clearCart, cartLength, cartTotalCost, products}
}, {persist: true})
