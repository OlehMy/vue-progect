<script>
export default {
  props: ['todos', 'activeTodos', 'add'],
  data() {
    return {
      counter: 0,
      title: '',
    };
  },
  methods: {
    handleClickPlus() {
      this.counter++;
    },
    handleClickMinus() {
      this.counter--;
    },
    handleSubmit() {
      if (this.title) {
        this.add(this.title);
      }
      this.title = '';
    },
  },
};
</script>

<template>
  <div class="box wrapper has-text-centered p-5">
    <h1 class="title is-3 has-text-info">Todo List</h1>
    <p class="subtitle is-5 has-text-warning">
      {{ activeTodos.length }} todos left
    </p>
    <form class="is-flex" @submit.prevent="handleSubmit">
      <input
        class="input is-success mb-5"
        type="text"
        placeholder="Input title"
        v-model.trim.lazy="title"
      />
      <button class="button is-success is-outlined ml-5">Add</button>
    </form>
    <ul v-if="todos.length">
      <li
        v-for="todo of todos"
        :key="todo.id"
        class="mb-3 is-flex is-align-content-center"
      >
        <input
          class="mr-2"
          type="checkbox"
          :checked="todo.complited"
          @change="$emit('toggle', todo)"
        />
        <span :class="{ 'has-text-danger': todo.complited }">
          {{ todo.title }}
        </span>
        <button class="button is-small ml-3" @click="$emit('remove', todo)">
          &times;
        </button>
      </li>
    </ul>
    <p v-else>no todos yet</p>
  </div>
</template>

<style>
.wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>
