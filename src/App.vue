<template>
  <Navbar></Navbar>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts">

import Navbar from "./components/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>
