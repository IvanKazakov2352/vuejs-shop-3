<template>
  <h1>Результат поиска</h1>
  <h2 v-if="!searchResultLength">Результат отсутствует</h2>
  <div class="items" v-else>
    <div class="item" v-for="item in searchResult" :key="item.id">
      <h3 class="title">{{ item.name }}</h3>
      <img class="image" :src="item.photo">
      <button 
        class="btn btn-success button"
        :disabled="item.isCart"
        @click="addItemToCart(item)" 
      >
        {{ item.isCart ? "В корзине" : "Добавить в корзину" }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Item } from "@/models/item.model";
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const searchResult = computed<Item[]>(() => store.getters.searchResult)
    const searchResultLength = computed<number>(() => store.getters.searchResultLength)

    const addItemToCart = async (item: Item) => {
      return await store.dispatch('addItemToCart', item)
    }

    return {
      searchResult,
      addItemToCart,
      searchResultLength
    }
  },
});
</script>

<style>
.items {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.item {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 200px;
  height: auto;
  border: 1px solid black;
}
.title {
  text-align: center;
}
.image {
  width: 100px;
  height: 100px;
}
.button {
  margin: 5px
}
</style>