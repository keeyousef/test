<script setup>
import { storeToRefs } from 'pinia';
import ProductCard from './ProductCard.vue';
import { useShopStore } from '@/stores/shop';

const shopStore = useShopStore();
const { selectedCategory, searchQuery, products } = storeToRefs(shopStore)
</script>

<template>
    <v-container class="d-flex justify-space-evenly flex-wrap">
        <template v-for="(p, category) in products" :key="category">
            <template
                v-if="selectedCategory === 'Wszystko' | selectedCategory === undefined | category === selectedCategory">
                <template v-for="product in p" :key="product">
                    <ProductCard
                        v-if="searchQuery == '' | searchQuery == null | product.name.search(new RegExp(searchQuery, 'i')) !== -1"
                        :product="product">
                    </ProductCard>
                </template>
            </template>
        </template>
    </v-container>
</template>