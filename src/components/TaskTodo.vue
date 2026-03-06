<script setup>
import { ref, watch } from 'vue';


const emit = defineEmits([
    "deleteTask",
    "toggledDoneCheckbox"
])

const props = defineProps({
    taskData: Object,
    taskId: Number,
})

const onDeleteTask = () => {
    emit("deleteTask", props.taskId);
}

let doneCheckboxValue = ref(props.taskData.done);

watch(doneCheckboxValue, (newVal) => {
    emit('toggledDoneCheckbox', props.taskId, newVal);
})

const onValueChange = (event) => {
    console.log('onValueChange', event.target.checked);
}
</script>

<template>
    <main class="task">
        <h3>{{ props.taskData.description }}</h3>
        <p>Wykonane: <input type="checkbox" v-model="doneCheckboxValue" @change="onValueChange"></p>
        <button @click="onDeleteTask" class="remove">Usuń zadanie</button>
    </main>
</template>

<style scoped>
main {
    border: 2px solid solid;
    margin: 3px;
}

h3 {
    margin: 5px;
}

p {
    margin-bottom: 10px;
}

.task {
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.task:hover {
    background: linear-gradient(rgb(255, 255, 255), rgb(233, 233, 233));
}
</style>