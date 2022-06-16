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
    </li>
  </ul>
</template>

<style>
</style>
