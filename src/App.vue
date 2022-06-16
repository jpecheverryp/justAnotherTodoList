<script setup lang="ts">
import { reactive, ref } from 'vue';

const todoInput = ref("")
const todos = reactive([])
function addTodo() {
  const todo = {
    text: todoInput.value,
    done: false
  }
  todos.push(todo)
  todoInput.value = ""
}
</script>

<template>
  <pre>{{ todos }}</pre>
  <h1>Just Another Todo List</h1>
  <form @submit.prevent="addTodo()">
    <input v-model="todoInput" type="text">
    <input type="submit" value="Add">
  </form>
  <ul>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</template>

<style>
</style>
