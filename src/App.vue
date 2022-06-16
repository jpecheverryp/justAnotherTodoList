<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useTodoList } from '@/stores/todoList'

const todoStore = useTodoList()

// Form Data
const todoInput: Ref<string> = ref("")

// List Methods
const addTodo = (): void => {
  todoStore.addTodo(todoInput.value)
  todoInput.value = ""
}

</script>

<template>
  <h1>Just Another Todo List</h1>
  <form @submit.prevent="addTodo()">
    <input v-model="todoInput" type="text">
    <input type="submit" value="Add">
  </form>
  <ul>
    <li v-for="todoItem in todoStore.items">
      <span :style="todoItem.done ? 'text-decoration: line-through;' : ''">{{ todoItem.text }}</span>
      <button @click="todoStore.completeTodo(todoItem.id)">Complete</button>
      <button @click="todoStore.deleteTodo(todoItem.id)">Delete</button>
    </li>
  </ul>
</template>

<style>
</style>
