<script setup>
import { useShopStore } from '@/stores/shop';

const shopStore = useShopStore();
const { addToCart, removeFromCart, products } = shopStore

const props = defineProps({
    product: Object
})

let productData;

Object.keys(products).forEach(key => {
    products[key].forEach(searchProduct => {
        if (searchProduct.id == props.product.id) {
            productData = searchProduct
        }
    })
}) 
</script>

<template>
    <v-card class="ma-1 ms-2 pa-2" v-if="product.amount >= 1">
        <v-card-title>{{ productData.name }}</v-card-title>
        <v-card-subtitle>{{ productData.description }}</v-card-subtitle>
        <v-card-title>{{ productData.price }} zł</v-card-title>
        <v-card-subtitle>Ilość: {{ props.product.amount }}</v-card-subtitle>
        <v-card-actions>
            <v-btn @click="addToCart(props.product.id)">Dodaj </v-btn>
            <v-btn @click="removeFromCart(props.product.id, false)">Usuń</v-btn>
            <v-btn @click="removeFromCart(props.product.id, true)">Usuń wszystkie</v-btn>
        </v-card-actions>
    </v-card>
</template>