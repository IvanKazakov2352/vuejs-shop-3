<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Магазин</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link 
              to="/" 
              tag="a" 
              class="nav-link"
            >
              Страница с товарами
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/cart" 
              tag="a" 
              class="nav-link"
            >
              Корзина ({{ cartlength }}) Общая сумма: {{ cartCount }}
            </router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Поиск"
            aria-label="Search"
            v-model="search"
          />
          <button class="btn btn-outline-success" @click.prevent="searchItems">Поиск</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from 'vuex'
import { NavigationFailure, Router, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router: Router = useRouter()

    const search = ref<string>("")

    const searchItems = async (): Promise<NavigationFailure | void | undefined> => {
      return await store.dispatch('searchItems', search.value).then(() => router.push('/search'))
    }

    const cartlength = computed<number>(() => store.getters.cartLength)
    const cartCount = computed<number>(() => store.getters.cartCount)

    return {
      cartlength,
      cartCount,
      search,
      searchItems
    }
  },
});
</script>
