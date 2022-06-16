<script setup lang="ts">
import { ref } from 'vue';

// Id counter
const nextId = ref(0)

// Form Data
const todoInput = ref("")

// List Data
const todos = ref([])

// List Methods
const addTodo = () => {
  const todo = {
    id: nextId.value++,
    text: todoInput.value,
    done: false
  }
  todos.value.push(todo)
  todoInput.value = ""
}

const completeTodo = (id) => {
  const todoIndex = todos.value.findIndex(todo => todo.id === id)
  todos.value[todoIndex].done = true
}
const deleteTodo = (id) => {
  const todoIndex = todos.value.findIndex(todo => todo.id === id)
  todos.value.splice(todoIndex, 1)
}

</script>

<template>
  <pre>{{ todos }}</pre>
  <h1>Just Another Todo List</h1>
  <form @submit.prevent="addTodo">
    <input v-model="todoInput" type="text">
    <input type="submit" value="Add">
  </form>
  <ul>
    <li v-for="todoItem in todos">
      {{ todoItem.text }}
      <button @click="completeTodo(todoItem.id)">Complete</button>
      <button @click="deleteTodo(todoItem.id)">Delete</button>
    </li>
  </ul>
</template>

<style>
</style>
