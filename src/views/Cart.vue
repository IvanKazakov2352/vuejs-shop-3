<template>
  <h1>Cart</h1>
  <h2 v-if="!cartLength">Корзина пустая</h2>
  <table class="table" v-else>
    <thead>
      <tr>
        <th scope="col">ID Товара</th>
        <th scope="col">Имя</th>
        <th scope="col">Цена</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button 
            class="btn btn-success" 
            @click="deleteItem(item.id)"
          >
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Item } from "@/models/item.model";
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const deleteItem = async (id: number): Promise<void> => {
      return await store.dispatch('deleteItem', id)
    }

    const cart = computed<Item[]>(() => store.getters.cart)
    const cartLength = computed<number>(() => store.getters.cartLength)

    return {
      cart,
      deleteItem,
      cartLength
    }
  },
});
</script>
