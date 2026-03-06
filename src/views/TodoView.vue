<script setup>
import TodoCategory from '../components/TodoCategory.vue'
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();

const { addTask, deleteTask, toggledDoneCheckbox } = todoStore
</script>

<template>
  <main class="container">
    <h1>Do zrobienia</h1>
    <div class="todo-container">
      <TodoCategory v-for="(category, id) in todoStore.categories" :key="category" :categoryData="category"
        :categoryId="Number(id)" @add-task="addTask" @toggled-done-checkbox="toggledDoneCheckbox"
        @delete-task="deleteTask">
      </TodoCategory>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
  border-radius: 27px;
  border: 3px solid black;
  -webkit-box-shadow: 0px 0px 24px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -12px rgba(66, 68, 90, 1);
  width: 80%;
  margin: auto auto;
}

.todo-container {
  display: flex;
  justify-content: space-evenly;
}
</style>