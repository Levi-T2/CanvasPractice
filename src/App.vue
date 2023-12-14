<template>
  <header>
    <NeoNav />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import NeoNav from './components/NeoNav.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { NeoNav }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.canvas {
  border: 1.75px solid black;
  border-radius: 4px;
}
</style>
