<script setup>
import { useShopStore } from '@/stores/shop';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import SmallProductCard from './SmallProductCard.vue';

const shopStore = useShopStore();
const { clearCart } = shopStore
const { searchQuery, cart, cartLength, cartTotalCost, products } = storeToRefs(shopStore)

const isCartVisible = ref(false);
</script>

<template>
    <v-container class="mb-8">
        <v-app-bar>
            <v-row class="ma-16">
                <v-icon icon="$vuetify" class="text-primary text-headline-large"></v-icon>
                <v-app-bar-title class="text-primary text-headline-medium">VuetifyShop</v-app-bar-title>
            </v-row>
            <v-row>
                <v-text-field v-model="searchQuery" placeholder="Szukaj produktów..." single-line
                    prepend-inner-icon="mdi-magnify" clearable></v-text-field>
            </v-row>
            <v-row class="ma-16" justify="end">
                <v-btn icon color="dark">
                    <v-icon icon="mdi-heart-outline"></v-icon>
                </v-btn>
                <v-btn icon color="dark" @click.stop="isCartVisible = !isCartVisible">
                    <v-badge v-if="!isCartVisible & cartLength >= 1" location="top right" :offset-x="-3" :offset-y="-3"
                        color="primary" :content="cartLength">
                        <v-icon icon="mdi-cart-outline"></v-icon>
                    </v-badge>
                    <v-icon v-else-if="!isCartVisible" icon="mdi-cart-outline"></v-icon>
                    <v-icon v-else icon="mdi-cart"></v-icon>
                </v-btn>
            </v-row>
        </v-app-bar>
    </v-container>
    <v-navigation-drawer v-model="isCartVisible" location="right" :width="500" elevation="4">
        <v-card class="pa-2">
            <v-card-title class="ma-1">Koszyk</v-card-title>
            <v-card-subtitle class="ma-1 mb-3">{{ cartLength }} produktów</v-card-subtitle>
        </v-card>
        <v-list>
            <SmallProductCard v-for="product in cart" :key="product" :products="products" :product="product">
            </SmallProductCard>
        </v-list>
        <v-card class="pa-2 position-absolute bottom-0" width="100%">
            <v-card-title>Suma: {{ cartTotalCost }} zł</v-card-title>
            <v-card-actions class="ma-2">
                <v-btn class="bg-primary" size="x-large">Przejdź do kasy</v-btn>
                <v-btn size="x-large" @click="clearCart">Wyczyść koszyk</v-btn>
            </v-card-actions>
        </v-card>
    </v-navigation-drawer>
</template>