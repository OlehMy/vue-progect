<script>
import 'bulma/css/bulma.css';
import NumberCounter from './components/NumberCounter.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList,
    NumberCounter,
  },
  data() {
    return {
      todos: [
        // { id: 1, title: 'todo1', complited: false },
        // { id: 2, title: 'todo2', complited: true },
        // { id: 3, title: 'todo3', complited: false },
        // { id: 4, title: 'todo4', complited: true },
        // { id: 5, title: 'todo5', complited: false },
      ],
      URL: 'https://mate.academy/students-api/todos',
    };
  },
  computed: {
    activeTodos() {
      return this.todos.filter(({ complited }) => !complited);
    },
  },
  methods: {
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
  mounted() {
    fetch(this.URL)
      .then((res) => res.json())
      .then((receivedTodos) => (this.todos = receivedTodos.slice(0, 15)));
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <TodoList
        :todos="todos"
        :activeTodos="activeTodos"
        :add="addTodo"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
      <NumberCounter />
    </div>
  </header>
</template>

<style scoped></style>
