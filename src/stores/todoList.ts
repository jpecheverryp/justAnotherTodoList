import { defineStore } from "pinia";

export const useTodoList = defineStore('todoList', {
  state: () => ({ items: [], nextId: 0 })
})