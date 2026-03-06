<script setup>
import AppBar from '@/components/AppBar.vue';
import CategorySelect from '@/components/CategorySelect.vue';
import ProductsTab from '@/components/ProductsTab.vue';

</script>

<template>
  <main>
    <v-app>
      <AppBar></AppBar>
      <CategorySelect></CategorySelect>
      <ProductsTab></ProductsTab>
    </v-app>
  </main>
</template>

<style scoped></style>