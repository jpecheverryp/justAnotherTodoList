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
  <!-- Divide into components -->
  <!-- TodoHeader -->
  <h1 text-center font-sans uppercase w-14ch mx-auto>Just Another Todo List</h1>

  <!-- TodoInput -->
  <div flex justify-center mt-8>
    <form @submit.prevent="addTodo()" block>
      <input v-model="todoInput" type="text" pl-8 py-2 text-1rem rounded-l-lg font-sans>
      <input type="submit" value="Add Todo" py-2 px-3 text-1rem rounded-r-lg font-sans>
    </form>
  </div>
  <!-- TodoList -->
  <ul list-none p-0 max-w-25rem mx-auto mt-8 font-sans>
    <li v-for="todoItem in todoStore.items" :key="todoItem.id" mb-3 flex justify-between bg-violet-100 py-2 px-3
      text-xl>
      <span :style="todoItem.done ? 'text-decoration: line-through;' : ''">{{ todoItem.text }}</span>
      <div flex gap-2>
        <div bg-green flex justify-center items-center>
          <button m-1 cursor-pointer text-2xl class="i-carbon-checkmark" @click="todoStore.completeTodo(todoItem.id)">
            <span invisible absolute>Complete Task</span></button>
        </div>
        <div bg-red flex justify-center items-center>
          <button m-1 cursor-pointer text-2xl class="i-carbon-trash-can" @click="todoStore.deleteTodo(todoItem.id)">
            <span invisible absolute>Delete Task</span></button>
        </div>

      </div>
    </li>
  </ul>
</template>

<style>
</style>
