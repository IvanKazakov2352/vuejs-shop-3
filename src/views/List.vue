<template>
  <h1>List</h1>

  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
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

    const addItemToCart = async (item: Item): Promise<void> => {
      return await store.dispatch('addItemToCart', item)
    }

    const items = computed<Item[]>(() => store.getters.items)

    return {
      items,
      addItemToCart
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
