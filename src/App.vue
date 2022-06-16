<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useTodoList } from '@/stores/todoList'

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const storedList = useTodoList()

// Id counter
const nextId: Ref<number> = ref(0)

// Form Data
const todoInput: Ref<string> = ref("")

// List Data
const todos: Ref<Todo[]> = ref([])

// List Methods
const addTodo = (): void => {
  storedList.addTodo(todoInput.value)
  todoInput.value = ""
}

const completeTodo = (id: number): void => {
  const todoIndex: number = todos.value.findIndex(todo => todo.id === id)
  todos.value[todoIndex].done = true
}
const deleteTodo = (id: number): void => {
  const todoIndex: number = todos.value.findIndex(todo => todo.id === id)
  todos.value.splice(todoIndex, 1)
}

</script>

<template>
  <pre>{{ todos }}</pre>
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
      <button @click="deleteTodo(todoItem.id)">Delete</button>
    </li>
  </ul>
</template>

<style>
</style>
