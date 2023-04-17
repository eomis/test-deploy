<script setup lang="ts">
import { computed } from 'vue'

const aladinEnv = computed(() => window.aladinEnv)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>{{ aladinEnv.title }}</h1>
  <p class="desc">{{ aladinEnv.description }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.desc {
  margin-top: 24px;
  line-height: 24px;
  font-size: 15px;
  color: rgba(0, 0, 0, .9);
}
</style>
