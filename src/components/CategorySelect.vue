<script setup>

import { useShopStore } from '@/stores/shop';
import { storeToRefs } from 'pinia';

const shopStore = useShopStore();
const { selectedCategory, products } = storeToRefs(shopStore);
</script>

<template>
    <v-container class="d-flex justify-md-center">
        <v-chip-group v-model="selectedCategory" mandatory selected-class="bg-primary">
            <v-chip size="x-large" variant="flat" value="Wszystko">Wszystko</v-chip>
            <v-chip v-for="(product, category) in products" :key="category" size="x-large" variant="flat"
                :value="category">{{
                    category
                }}</v-chip>
        </v-chip-group>
    </v-container>
</template>