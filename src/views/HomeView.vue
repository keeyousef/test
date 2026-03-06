<script setup>
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'

const count = ref(1);
const onButtonClicked = (val) => {
  console.log(val);
}
</script>

<template>
  <main>
    <h1>HomeView</h1>
    <HelloWorld :count="count" @button-clicked="onButtonClicked" />
  </main>
</template>

<style scoped>
h1 {
  color: red;
}
</style>