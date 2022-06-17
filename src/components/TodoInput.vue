<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';
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
  <div flex justify-center mt-8>
    <form @submit.prevent="addTodo()" block>
      <input v-model="todoInput" type="text" pl-8 py-2 text-1rem rounded-l-lg font-sans>
      <input type="submit" value="Add Todo" py-2 px-3 text-1rem rounded-r-lg font-sans>
    </form>
  </div>
</template>