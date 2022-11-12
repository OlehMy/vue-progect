<script setup>
import { useCounterStore } from '../stores/NumberCounter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="box wrapper has-text-centered">
    <h1 class="title is-3 has-text-info has-text-centered">
      {{ counterStore.counter }}
    </h1>
    <button
      class="button is-primary mr-3"
      @click="counterStore.decrement()"
      :disabled="counterStore.counter <= 0"
    >
      -
    </button>
    <button class="button is-primary ml-3" @click="counterStore.increment()">
      +
    </button>
  </div>
</template>

<style>
.wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>
