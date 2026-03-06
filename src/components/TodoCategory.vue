<script setup>
import TaskTodo from '../components/TaskTodo.vue'
import { ref } from 'vue'

const props = defineProps({
    categoryData: Object,
    categoryId: Number,
})

const emit = defineEmits([
    "deleteTask",
    "toggledDoneCheckbox",
    "addTask"
])

const onAddTask = (description) => {
    emit("addTask", props.categoryId, description)
}

const onDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
        emit("deleteTask", props.categoryId, taskId)
    }
}

const onToggledDoneCheckbox = (taskId, value) => {
    emit("toggledDoneCheckbox", props.categoryId, taskId, value)
}

const taskDescription = ref('')

</script>

<template>
    <main class="category">
        <h3>{{ props.categoryData.name }} <span class="amount">({{ props.categoryData.tasks.length }})</span></h3>
        <div class="tasks">
            <TaskTodo v-for="(task, id) in props.categoryData.tasks" :key="task" :taskData="task" :taskId="Number(id)"
                @delete-task="onDeleteTask" @toggled-done-checkbox="onToggledDoneCheckbox">
            </TaskTodo>
        </div>
        <input type="text" placeholder="Treść zadania..." v-model="taskDescription">&nbsp;
        <button @click="onAddTask(taskDescription)" class="add">Dodaj zadanie</button>
    </main>
</template>

<style scoped>
.category {
    -webkit-box-shadow: 0px 0px 24px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 24px -12px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 24px -12px rgba(66, 68, 90, 1);
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
}

.amount {
    font-size: 75%;
    color: gray
}
</style>