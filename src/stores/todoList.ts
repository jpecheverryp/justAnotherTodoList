import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const useTodoList = defineStore('todoList', {
  state: () => (
    {
      items: useStorage('todos', <Todo[]>[]),
      nextId: useStorage('next-id', 0)
    }),
  actions: {
    addTodo(todoText: string): void {
      const todo: Todo = {
        id: this.nextId++,
        text: todoText,
        done: false
      }
      this.items.push(todo)
    },
    completeTodo(id: number): void {
      const todoIndex: number = this.items.findIndex(todo => todo.id === id)
      this.items[todoIndex].done = true
    },
    deleteTodo(id: number): void {
      const todoIndex: number = this.items.findIndex(todo => todo.id === id)
      this.items.splice(todoIndex, 1)
    }
  }
})