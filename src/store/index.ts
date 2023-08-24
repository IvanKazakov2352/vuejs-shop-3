import { Item } from '@/models/item.model'
import { State } from '@/models/state.model'
import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      {
        id: 1,
        name: 'Печка 1',
        price: 10000,
        photo: require("@/assets/photo/1.jpg"),
        isCart: false
      },
      {
        id: 2,
        name: 'Печка 2',
        price: 11000,
        photo: require("@/assets/photo/2.jpg"),
        isCart: false
      },
      {
        id: 3,
        name: 'Печка 31',
        price: 12000,
        photo: require("@/assets/photo/3.jpg"),
        isCart: false
      },
      {
        id: 4,
        name: 'Печка 32',
        price: 13000,
        photo: require("@/assets/photo/4.jpg"),
        isCart: false
      },
      {
        id: 5,
        name: 'Печка 33',
        price: 14000,
        photo: require("@/assets/photo/5.jpg"),
        isCart: false
      },
    ] as Item[],
    cart: [] as Item[],
    searchResult: [] as Item[]
  } as State,
  getters: {
    items: (state: State) => state.items,
    cart: (state: State) => state.cart,
    cartLength: (state: State) => state.cart.length,
    cartCount: (state: State) => state.cart.reduce((total, item) => total += item.price, 0),
    searchResult: (state: State) => state.searchResult,
    searchResultLength: (state: State) => state.searchResult.length
  },
  mutations: {
    addItemToCart(state: State, item: Item): void {
      const idx = state.items.findIndex(i => i.id === item.id)
      state.items[idx].isCart = true
      state.cart.push(item as any)
    },
    deleteItem(state: State, id: number): void {
      const idx = state.cart.findIndex(item => item.id === id)
      state.items[idx].isCart = false
      state.cart[idx].isCart = false
      state.cart = state.cart.filter(item => item.id !== id)
    },
    filteredItems(state: State, string: string): void {
      if(!string) return
      state.searchResult = state.items.filter(item => item.name.match(string))
    }
  },
  actions: {
    addItemToCart({ commit }, payload: Item): void {
      commit('addItemToCart', payload)
    },
    deleteItem({ commit }, payload: number): void {
      commit('deleteItem', payload)
    },
    searchItems({ commit }, payload: string): void {
      commit('filteredItems', payload)
    }
  },
})
