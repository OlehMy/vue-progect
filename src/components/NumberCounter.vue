<script setup>
import { useCounterStore } from '../stores/NumberCounter';
const store = useCounterStore();
</script>

<template>
  <div class="box wrapper has-text-centered">
    <h1 class="title is-3 has-text-info has-text-centered">
      {{ store.counter }}
    </h1>
    <button
      class="button is-primary mr-3"
      @click="store.decrement()"
      :disabled="store.counter <= 0"
    >
      -
    </button>
    <button class="button is-primary ml-3" @click="store.increment()">+</button>
  </div>
</template>

<style>
.wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>
