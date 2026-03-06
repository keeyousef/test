import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const categories = ref([
  {
    name: 'Poniedziałek',
    tasks: [
      { description: "Wynieś śmieci", done: false },
      { description: "Wyjdz z psem", done: true },
      { description: "Zrób pyszny obiad", done: false },
      { description: "Godzina nauki", done: false },
    ]
  },
  {
    name: 'Wtorek',
    tasks: [
      { description: "Wynieś śmieci", done: false },
      { description: "Wyjdz z psem", done: true },
      { description: "Zrób pyszny obiad", done: false },
      { description: "Godzina nauki", done: false },
    ]
  },
  {
    name: 'Środa',
    tasks: [
      { description: "Wynieś śmieci", done: false },
      { description: "Wyjdz z psem", done: true },
      { description: "Zrób pyszny obiad", done: false },
      { description: "Godzina nauki", done: false },
    ]
  },
  {
    name: 'Czwartek',
    tasks: [
      { description: "Wynieś śmieci", done: false },
      { description: "Wyjdz z psem", done: true },
      { description: "Zrób pyszny obiad", done: false },
      { description: "Godzina nauki", done: false },
    ]
  },
  {
    name: 'Piątek',
    tasks: [
      { description: "Wynieś śmieci", done: false },
      { description: "Wyjdz z psem", done: true },
      { description: "Zrób pyszny obiad", done: false },
      { description: "Godzina nauki", done: false },
    ]
  }
]);

const addTask = (categoryId, description) => {
  console.log(`Add Task with description: ${description}`)
  categories.value.at(categoryId).tasks.push({ description: description, done: false })
}

const deleteTask = (categoryId, taskId) => {
  console.log(`Delete task with id: ${categoryId}, ${taskId}`)
  categories.value.at(categoryId).tasks.splice(taskId, 1)
}

const toggledDoneCheckbox = (categoryId, taskId, value) => {
  console.log(`Toggle task done checkbox with id: ${categoryId}, ${taskId} with value ${value}`)
  categories.value.at(categoryId).tasks.at(taskId).done = value
}

  return { categories, addTask, deleteTask, toggledDoneCheckbox }
}, {persist: true})
