<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useTodoList } from '@/stores/todoList'

const storedList = useTodoList()

// Form Data
const todoInput: Ref<string> = ref("")

// List Methods
const addTodo = (): void => {
  storedList.addTodo(todoInput.value)
  todoInput.value = ""
}

</script>

<template>
  <pre>{{ storedList }}</pre>
  <h1>Just Another Todo List</h1>
  <form @submit.prevent="addTodo()">
    <input v-model="todoInput" type="text">
    <input type="submit" value="Add">
  </form>
  <ul>
    <li v-for="todoItem in storedList.items">
      {{ todoItem.text }}
      <button @click="storedList.completeTodo(todoItem.id)">Complete</button>
      <button @click="storedList.deleteTodo(todoItem.id)">Delete</button>
    </li>
  </ul>
</template>

<style>
</style>
