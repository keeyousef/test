<script setup>
import { useShopStore } from '@/stores/shop';

const shopStore = useShopStore()
const { addToCart } = shopStore

const props = defineProps({
    product: Object
})
</script>

<template>
    <v-card class="ma-4">
        <v-img rounded :width="400" aspect-ratio="1.6" cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-chip v-if="props.product.stock <= 0" class="bg-secondary ma-2">Brak</v-chip>
            <v-chip v-else-if="props.product.discount > 0" class="bg-primary ma-2">-{{ props.product.discount * 100
            }}%</v-chip>
        </v-img>
        <v-card class="ma-2 mb-0 bg-transparent">
            <v-card-title>{{ props.product.name }}</v-card-title>
            <v-card-subtitle>{{ props.product.description }}</v-card-subtitle>
            <v-card-text>{{ props.product.price }} zł</v-card-text>
        </v-card>
        <v-card-actions>
            <v-btn v-if="props.product.stock >= 1" class="bg-primary" @click="addToCart(props.product.id)">Dodaj do
                koszyka</v-btn>
            <v-btn v-else class="bg-primary" disabled>Dodaj do koszyka</v-btn>
            <v-btn class="bg-secondary">Szczegóły</v-btn>
        </v-card-actions>
    </v-card>
</template>