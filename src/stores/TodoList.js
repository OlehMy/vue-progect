import { defineStore } from 'pinia';

export const useTodosStore = defineStore('TodoList', {
  state: () => ({
    todos: [],
    URL: 'https://mate.academy/students-api/todos',
  }),
  actions: {
    async getTodos() {
      this.todos = await fetch(this.URL)
        .then((res) => res.json())
        .then((res) => res.slice(0, 15));
    },
    toggleTodo(todo) {
      todo.complited = !todo.complited;
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(({ id }) => todo.id !== id);
    },
    addTodo(title) {
      const newTodo = {
        id: Date.now(),
        title,
        complited: false,
      };
      this.todos.push(newTodo);
    },
  },
  getters: {
    activeTodos: ({ todos }) => todos.filter(({ complited }) => !complited),
  },
});
