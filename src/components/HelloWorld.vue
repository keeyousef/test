<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps({
  count: Number,
});

const emit = defineEmits([
  'buttonClicked',
]);

const test = ref('asd');
const isLoading = ref(true);

const buttonClick = () => {
  emit('buttonClicked', [
    'asd',
    'sdfsdf',
  ]);
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000)
})

console.log('asdasd');
</script>

<template>
  <div>
    <h1>HelloWorld</h1>
    <h1>count: {{ props.count }}</h1>
    {{ isLoading ? 'yes' : 'no' }}
    <p>
      {{ test }}
    </p>
    <button @click="buttonClick">incremenet count</button>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
