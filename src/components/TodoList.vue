<script setup lang="ts">
import { useTodoList } from '@/stores/todoList';

const todoStore = useTodoList()

</script>

<template>
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